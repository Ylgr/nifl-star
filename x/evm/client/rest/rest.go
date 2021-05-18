package rest

import (
	"github.com/gorilla/mux"

	"github.com/cosmos/cosmos-sdk/client"
	// this line is used by starport scaffolding # 1
)

const (
	MethodGet = "GET"
)

// RegisterRoutes registers evm-related REST handlers to a router
func RegisterRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 2
	registerQueryRoutes(clientCtx, r)
	registerTxHandlers(clientCtx, r)

}

func registerQueryRoutes(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 3
	r.HandleFunc("/evm/accounts/{id}", getAccountHandler(clientCtx)).Methods("GET")
	r.HandleFunc("/evm/accounts", listAccountHandler(clientCtx)).Methods("GET")

}

func registerTxHandlers(clientCtx client.Context, r *mux.Router) {
	// this line is used by starport scaffolding # 4
	r.HandleFunc("/evm/accounts", createAccountHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/evm/accounts/{id}", updateAccountHandler(clientCtx)).Methods("POST")
	r.HandleFunc("/evm/accounts/{id}", deleteAccountHandler(clientCtx)).Methods("POST")

}
