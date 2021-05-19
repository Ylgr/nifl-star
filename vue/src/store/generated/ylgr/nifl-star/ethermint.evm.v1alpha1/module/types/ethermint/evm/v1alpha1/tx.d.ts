import { Reader, Writer } from "protobufjs/minimal";
import { TransactionLogs } from "../../../ethermint/evm/v1alpha1/evm";
export declare const protobufPackage = "ethermint.evm.v1alpha1";
/** MsgEthereumTx encapsulates an Ethereum transaction as an SDK message. */
export interface MsgEthereumTx {
    data: TxData | undefined;
    /** caches */
    size: number;
    from: SigCache | undefined;
}
/** MsgEthereumTxResponse defines the Msg/EthereumTx response type. */
export interface MsgEthereumTxResponse {
    /**
     * contract_address contains the ethereum address of the created contract (if
     * any). If the state transition is an evm.Call, the contract address will be
     * empty.
     */
    contractAddress: string;
    /** bloom represents the bloom filter bytes */
    bloom: Uint8Array;
    /**
     * tx_logs contains the transaction hash and the proto-compatible ethereum
     * logs.
     */
    txLogs: TransactionLogs | undefined;
    /** ret defines the bytes from the execution. */
    ret: Uint8Array;
}
/**
 * TxData implements the Ethereum transaction data structure. It is used
 * solely as intended in Ethereum abiding by the protocol.
 */
export interface TxData {
    /** nonce corresponds to the account nonce (transaction sequence). */
    nonce: number;
    /** price defines the unsigned integer value of the gas price in bytes. */
    price: string;
    /** gas defines the gas limit defined for the transaction. */
    gas: number;
    to: Recipient | undefined;
    /** value defines the unsigned integer value of the transaction amount. */
    value: string;
    /** input defines the data payload bytes of the transaction. */
    input: Uint8Array;
    /** v defines the signature value */
    v: Uint8Array;
    /** r defines the signature value */
    r: Uint8Array;
    /** s define the signature value */
    s: Uint8Array;
    /** hash defines the tx data hash, which is only used when marshaling to JSON. */
    hash: string;
}
/**
 * Recipient defines a protobuf-compatible wrapper for an Ethereum address
 * pointer. It is required for RLP encoding.
 */
export interface Recipient {
    /** address defines the hex-formated ethereum address of the recipient */
    address: string;
}
/**
 * SigCache is used to cache the derived sender and contains the signer used
 * to derive it.
 */
export interface SigCache {
    signer: EIP155Signer | undefined;
    address: string;
}
/** EIP155Transaction implements Signer using the EIP155 rules. */
export interface EIP155Signer {
    chainId: Uint8Array;
    chainIdMul: Uint8Array;
}
export declare const MsgEthereumTx: {
    encode(message: MsgEthereumTx, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEthereumTx;
    fromJSON(object: any): MsgEthereumTx;
    toJSON(message: MsgEthereumTx): unknown;
    fromPartial(object: DeepPartial<MsgEthereumTx>): MsgEthereumTx;
};
export declare const MsgEthereumTxResponse: {
    encode(message: MsgEthereumTxResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgEthereumTxResponse;
    fromJSON(object: any): MsgEthereumTxResponse;
    toJSON(message: MsgEthereumTxResponse): unknown;
    fromPartial(object: DeepPartial<MsgEthereumTxResponse>): MsgEthereumTxResponse;
};
export declare const TxData: {
    encode(message: TxData, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): TxData;
    fromJSON(object: any): TxData;
    toJSON(message: TxData): unknown;
    fromPartial(object: DeepPartial<TxData>): TxData;
};
export declare const Recipient: {
    encode(message: Recipient, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Recipient;
    fromJSON(object: any): Recipient;
    toJSON(message: Recipient): unknown;
    fromPartial(object: DeepPartial<Recipient>): Recipient;
};
export declare const SigCache: {
    encode(message: SigCache, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SigCache;
    fromJSON(object: any): SigCache;
    toJSON(message: SigCache): unknown;
    fromPartial(object: DeepPartial<SigCache>): SigCache;
};
export declare const EIP155Signer: {
    encode(message: EIP155Signer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): EIP155Signer;
    fromJSON(object: any): EIP155Signer;
    toJSON(message: EIP155Signer): unknown;
    fromPartial(object: DeepPartial<EIP155Signer>): EIP155Signer;
};
/** Msg defines the evm Msg service. */
export interface Msg {
    /** EthereumTx defines a method submitting Ethereum transactions. */
    EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    EthereumTx(request: MsgEthereumTx): Promise<MsgEthereumTxResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
