package evm

import (
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	authtypes "github.com/cosmos/cosmos-sdk/x/auth/types"

	ethcmn "github.com/ethereum/go-ethereum/common"

	ethermint "github.com/ylgr/nifl-star/types"
	"github.com/ylgr/nifl-star/x/evm/keeper"
	"github.com/ylgr/nifl-star/x/evm/types"

	abci "github.com/tendermint/tendermint/abci/types"
)

// InitGenesis initializes genesis state based on exported genesis
func InitGenesis(
	ctx sdk.Context,
	k keeper.Keeper,
	accountKeeper types.AccountKeeper, // nolint: interfacer
	bankKeeper types.BankKeeper,
	data types.GenesisState,
) []abci.ValidatorUpdate {
	k.SetParams(ctx, data.Params)
	evmDenom := data.Params.EvmDenom

	for _, account := range data.Accounts {
		address := ethcmn.HexToAddress(account.Address)
		accAddress := sdk.AccAddress(address.Bytes())
		// check that the EVM balance the matches the account balance
		acc := accountKeeper.GetAccount(ctx, accAddress)
		if acc == nil {
			panic(fmt.Errorf("account not found for address %s", account.Address))
		}

		_, ok := acc.(*ethermint.EthAccount)
		if !ok {
			panic(
				fmt.Errorf("account %s must be an %T type, got %T",
					account.Address, &ethermint.EthAccount{}, acc,
				),
			)
		}

		evmBalance := bankKeeper.GetBalance(ctx, accAddress, evmDenom)
		k.SetBalance(ctx, address, evmBalance.Amount.BigInt())
		k.SetNonce(ctx, address, acc.GetSequence())
		k.SetCode(ctx, address, ethcmn.Hex2Bytes(account.Code))

		for _, storage := range account.Storage {
			k.SetState(ctx, address, ethcmn.HexToHash(storage.Key), ethcmn.HexToHash(storage.Value))
		}
	}

	var err error
	for _, txLog := range data.TxsLogs {
		err = k.SetLogs(ctx, ethcmn.HexToHash(txLog.Hash), txLog.EthLogs())
		if err != nil {
			panic(err)
		}
	}

	k.SetChainConfig(ctx, data.ChainConfig)

	// set state objects and code to store
	_, err = k.Commit(ctx, false)
	if err != nil {
		panic(err)
	}

	// set storage to store
	// NOTE: don't delete empty object to prevent import-export simulation failure
	err = k.Finalise(ctx, false)
	if err != nil {
		panic(err)
	}

	return []abci.ValidatorUpdate{}
}

// ExportGenesis exports genesis state of the EVM module
func ExportGenesis(ctx sdk.Context, k keeper.Keeper, ak types.AccountKeeper) *types.GenesisState {
	// nolint: prealloc
	var ethGenAccounts []types.GenesisAccount
	ak.IterateAccounts(ctx, func(account authtypes.AccountI) bool {
		ethAccount, ok := account.(*ethermint.EthAccount)
		if !ok {
			// ignore non EthAccounts
			return false
		}

		addr := ethAccount.EthAddress()

		storage, err := k.GetAccountStorage(ctx, addr)
		if err != nil {
			panic(err)
		}

		genAccount := types.GenesisAccount{
			Address: addr.String(),
			Code:    ethcmn.Bytes2Hex(k.GetCode(ctx, addr)),
			Storage: storage,
		}

		ethGenAccounts = append(ethGenAccounts, genAccount)
		return false
	})

	config, _ := k.GetChainConfig(ctx)

	return &types.GenesisState{
		Accounts:    ethGenAccounts,
		TxsLogs:     k.GetAllTxLogs(ctx),
		ChainConfig: config,
		Params:      k.GetParams(ctx),
	}
}
