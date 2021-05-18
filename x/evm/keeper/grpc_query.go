package keeper

import (
	"github.com/ylgr/nifl-star/x/evm/types"
)

var _ types.QueryServer = Keeper{}
