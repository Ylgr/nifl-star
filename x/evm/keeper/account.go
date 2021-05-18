package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/ylgr/nifl-star/x/evm/types"
	"strconv"
)

// GetAccountCount get the total number of account
func (k Keeper) GetAccountCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountCountKey))
	byteKey := types.KeyPrefix(types.AccountCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to iint64
		panic("cannot decode count")
	}

	return count
}

// SetAccountCount set the total number of account
func (k Keeper) SetAccountCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountCountKey))
	byteKey := types.KeyPrefix(types.AccountCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendAccount appends a account in the store with a new id and update the count
func (k Keeper) AppendAccount(
	ctx sdk.Context,
	creator string,
	codeHash string,
) uint64 {
	// Create the account
	count := k.GetAccountCount(ctx)
	var account = types.Account{
		Creator:  creator,
		Id:       count,
		CodeHash: codeHash,
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountKey))
	value := k.cdc.MustMarshalBinaryBare(&account)
	store.Set(GetAccountIDBytes(account.Id), value)

	// Update account count
	k.SetAccountCount(ctx, count+1)

	return count
}

// SetAccount set a specific account in the store
func (k Keeper) SetAccount(ctx sdk.Context, account types.Account) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountKey))
	b := k.cdc.MustMarshalBinaryBare(&account)
	store.Set(GetAccountIDBytes(account.Id), b)
}

// GetAccount returns a account from its id
func (k Keeper) GetAccount(ctx sdk.Context, id uint64) types.Account {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountKey))
	var account types.Account
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetAccountIDBytes(id)), &account)
	return account
}

// HasAccount checks if the account exists in the store
func (k Keeper) HasAccount(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountKey))
	return store.Has(GetAccountIDBytes(id))
}

// GetAccountOwner returns the creator of the account
func (k Keeper) GetAccountOwner(ctx sdk.Context, id uint64) string {
	return k.GetAccount(ctx, id).Creator
}

// RemoveAccount removes a account from the store
func (k Keeper) RemoveAccount(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountKey))
	store.Delete(GetAccountIDBytes(id))
}

// GetAllAccount returns all account
func (k Keeper) GetAllAccount(ctx sdk.Context) (list []types.Account) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AccountKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Account
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetAccountIDBytes returns the byte representation of the ID
func GetAccountIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetAccountIDFromBytes returns ID in uint64 format from a byte array
func GetAccountIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
