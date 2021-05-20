import { txClient, queryClient } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { TxData } from "./module/types/ethermint/evm/v1alpha1/tx";
import { Recipient } from "./module/types/ethermint/evm/v1alpha1/tx";
import { SigCache } from "./module/types/ethermint/evm/v1alpha1/tx";
import { EIP155Signer } from "./module/types/ethermint/evm/v1alpha1/tx";
import { GenesisAccount } from "./module/types/ethermint/evm/v1alpha1/genesis";
import { Params } from "./module/types/ethermint/evm/v1alpha1/evm";
import { ChainConfig } from "./module/types/ethermint/evm/v1alpha1/evm";
import { State } from "./module/types/ethermint/evm/v1alpha1/evm";
import { TransactionLogs } from "./module/types/ethermint/evm/v1alpha1/evm";
import { Log } from "./module/types/ethermint/evm/v1alpha1/evm";
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Account: {},
        Balance: {},
        Storage: {},
        Code: {},
        TxLogs: {},
        BlockLogs: {},
        BlockBloom: {},
        Params: {},
        _Structure: {
            TxData: getStructure(TxData.fromPartial({})),
            Recipient: getStructure(Recipient.fromPartial({})),
            SigCache: getStructure(SigCache.fromPartial({})),
            EIP155Signer: getStructure(EIP155Signer.fromPartial({})),
            GenesisAccount: getStructure(GenesisAccount.fromPartial({})),
            Params: getStructure(Params.fromPartial({})),
            ChainConfig: getStructure(ChainConfig.fromPartial({})),
            State: getStructure(State.fromPartial({})),
            TransactionLogs: getStructure(TransactionLogs.fromPartial({})),
            Log: getStructure(Log.fromPartial({})),
        },
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(subscription);
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(subscription);
        }
    },
    getters: {
        getAccount: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Account[JSON.stringify(params)] ?? {};
        },
        getBalance: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Balance[JSON.stringify(params)] ?? {};
        },
        getStorage: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Storage[JSON.stringify(params)] ?? {};
        },
        getCode: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Code[JSON.stringify(params)] ?? {};
        },
        getTxLogs: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.TxLogs[JSON.stringify(params)] ?? {};
        },
        getBlockLogs: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BlockLogs[JSON.stringify(params)] ?? {};
        },
        getBlockBloom: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.BlockBloom[JSON.stringify(params)] ?? {};
        },
        getParams: (state) => (params = {}) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Params[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('init');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach((subscription) => {
                dispatch(subscription.action, subscription.payload);
            });
        },
        async QueryAccount({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryAccount(key.address, query)).data : (await (await initQueryClient(rootGetters)).queryAccount(key.address)).data;
                commit('QUERY', { query: 'Account', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryAccount', payload: { options: { all }, params: { ...key }, query } });
                return getters['getAccount']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryAccount', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryBalance({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryBalance(key.address, query)).data : (await (await initQueryClient(rootGetters)).queryBalance(key.address)).data;
                commit('QUERY', { query: 'Balance', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBalance', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBalance']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryBalance', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryStorage({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryStorage(key.address, key.key, query)).data : (await (await initQueryClient(rootGetters)).queryStorage(key.address, key.key)).data;
                commit('QUERY', { query: 'Storage', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryStorage', payload: { options: { all }, params: { ...key }, query } });
                return getters['getStorage']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryStorage', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryCode({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryCode(key.address, query)).data : (await (await initQueryClient(rootGetters)).queryCode(key.address)).data;
                commit('QUERY', { query: 'Code', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCode', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCode']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryCode', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryTxLogs({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryTxLogs(key.hash, query)).data : (await (await initQueryClient(rootGetters)).queryTxLogs(key.hash)).data;
                commit('QUERY', { query: 'TxLogs', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryTxLogs', payload: { options: { all }, params: { ...key }, query } });
                return getters['getTxLogs']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryTxLogs', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryBlockLogs({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryBlockLogs(key.hash, query)).data : (await (await initQueryClient(rootGetters)).queryBlockLogs(key.hash)).data;
                commit('QUERY', { query: 'BlockLogs', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBlockLogs', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBlockLogs']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryBlockLogs', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryBlockBloom({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryBlockBloom(query)).data : (await (await initQueryClient(rootGetters)).queryBlockBloom()).data;
                commit('QUERY', { query: 'BlockBloom', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryBlockBloom', payload: { options: { all }, params: { ...key }, query } });
                return getters['getBlockBloom']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryBlockBloom', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async QueryParams({ commit, rootGetters, getters }, { options: { subscribe = false, all = false }, params: { ...key }, query = null }) {
            try {
                let value = query ? (await (await initQueryClient(rootGetters)).queryParams(query)).data : (await (await initQueryClient(rootGetters)).queryParams()).data;
                commit('QUERY', { query: 'Params', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryParams', payload: { options: { all }, params: { ...key }, query } });
                return getters['getParams']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                console.error(new SpVuexError('QueryClient:QueryParams', 'API Node Unavailable. Could not perform query.'));
                return {};
            }
        },
        async sendMsgEthereumTx({ rootGetters }, { value, fee, memo }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgEthereumTx(value);
                const result = await (await initTxClient(rootGetters)).signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgEthereumTx:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgEthereumTx:Send', 'Could not broadcast Tx.');
                }
            }
        },
        async MsgEthereumTx({ rootGetters }, { value }) {
            try {
                const msg = await (await initTxClient(rootGetters)).msgEthereumTx(value);
                return msg;
            }
            catch (e) {
                if (e.toString() == 'wallet is required') {
                    throw new SpVuexError('TxClient:MsgEthereumTx:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgEthereumTx:Create', 'Could not create message.');
                }
            }
        },
    }
};
