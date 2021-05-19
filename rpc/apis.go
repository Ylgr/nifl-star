package rpc

import (
	"github.com/ethereum/go-ethereum/rpc"
	"github.com/ylgr/nifl-star/rpc/namespaces/eth/filters"
	"github.com/ylgr/nifl-star/rpc/namespaces/net"
	"github.com/ylgr/nifl-star/rpc/namespaces/personal"
	"github.com/ylgr/nifl-star/rpc/namespaces/web3"

	"github.com/ylgr/nifl-star/crypto/ethsecp256k1"

	"github.com/ylgr/nifl-star/rpc/backend"
	"github.com/ylgr/nifl-star/rpc/namespaces/eth"
	rpctypes "github.com/ylgr/nifl-star/rpc/types"

	"github.com/cosmos/cosmos-sdk/client"
)

// RPC namespaces and API version
const (
	Web3Namespace     = "web3"
	EthNamespace      = "eth"
	PersonalNamespace = "personal"
	NetNamespace      = "net"

	apiVersion = "1.0"
	flagRPCAPI = "rpc-api"
)

// GetAPIs returns the list of all APIs from the Ethereum namespaces
func GetAPIs(clientCtx client.Context, selectedApis []string, keys ...ethsecp256k1.PrivKey) []rpc.API {
	nonceLock := new(rpctypes.AddrLocker)
	backend := backend.New(clientCtx)
	ethAPI := eth.NewAPI(clientCtx, backend, nonceLock, keys...)

	var apis []rpc.API

	apis = append(apis,
		rpc.API{
			Namespace: EthNamespace,
			Version:   apiVersion,
			Service:   ethAPI,
			Public:    true,
		})

	apis = append(apis, rpc.API{
		Namespace: EthNamespace,
		Version:   apiVersion,
		Service:   filters.NewAPI(clientCtx, backend),
		Public:    true,
	})

	for _, api := range selectedApis {
		switch api {
		case Web3Namespace:
			apis = append(apis,
				rpc.API{
					Namespace: Web3Namespace,
					Version:   apiVersion,
					Service:   web3.NewAPI(),
					Public:    true,
				},
			)
		case PersonalNamespace:
			apis = append(apis,
				rpc.API{
					Namespace: PersonalNamespace,
					Version:   apiVersion,
					Service:   personal.NewAPI(ethAPI),
					Public:    false,
				},
			)
		case NetNamespace:
			apis = append(apis,
				rpc.API{
					Namespace: NetNamespace,
					Version:   apiVersion,
					Service:   net.NewAPI(clientCtx),
					Public:    true,
				},
			)
		}
	}

	return apis
}
