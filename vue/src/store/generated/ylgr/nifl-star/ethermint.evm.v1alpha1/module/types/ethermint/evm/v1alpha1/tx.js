/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { TransactionLogs } from "../../../ethermint/evm/v1alpha1/evm";
export const protobufPackage = "ethermint.evm.v1alpha1";
const baseMsgEthereumTx = { size: 0 };
export const MsgEthereumTx = {
    encode(message, writer = Writer.create()) {
        if (message.data !== undefined) {
            TxData.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.size !== 0) {
            writer.uint32(17).double(message.size);
        }
        if (message.from !== undefined) {
            SigCache.encode(message.from, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgEthereumTx };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = TxData.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.size = reader.double();
                    break;
                case 3:
                    message.from = SigCache.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgEthereumTx };
        if (object.data !== undefined && object.data !== null) {
            message.data = TxData.fromJSON(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = Number(object.size);
        }
        else {
            message.size = 0;
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = SigCache.fromJSON(object.from);
        }
        else {
            message.from = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = message.data ? TxData.toJSON(message.data) : undefined);
        message.size !== undefined && (obj.size = message.size);
        message.from !== undefined &&
            (obj.from = message.from ? SigCache.toJSON(message.from) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgEthereumTx };
        if (object.data !== undefined && object.data !== null) {
            message.data = TxData.fromPartial(object.data);
        }
        else {
            message.data = undefined;
        }
        if (object.size !== undefined && object.size !== null) {
            message.size = object.size;
        }
        else {
            message.size = 0;
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = SigCache.fromPartial(object.from);
        }
        else {
            message.from = undefined;
        }
        return message;
    },
};
const baseMsgEthereumTxResponse = { contractAddress: "" };
export const MsgEthereumTxResponse = {
    encode(message, writer = Writer.create()) {
        if (message.contractAddress !== "") {
            writer.uint32(10).string(message.contractAddress);
        }
        if (message.bloom.length !== 0) {
            writer.uint32(18).bytes(message.bloom);
        }
        if (message.txLogs !== undefined) {
            TransactionLogs.encode(message.txLogs, writer.uint32(26).fork()).ldelim();
        }
        if (message.ret.length !== 0) {
            writer.uint32(34).bytes(message.ret);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgEthereumTxResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contractAddress = reader.string();
                    break;
                case 2:
                    message.bloom = reader.bytes();
                    break;
                case 3:
                    message.txLogs = TransactionLogs.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ret = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgEthereumTxResponse };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = String(object.contractAddress);
        }
        else {
            message.contractAddress = "";
        }
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = bytesFromBase64(object.bloom);
        }
        if (object.txLogs !== undefined && object.txLogs !== null) {
            message.txLogs = TransactionLogs.fromJSON(object.txLogs);
        }
        else {
            message.txLogs = undefined;
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = bytesFromBase64(object.ret);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.contractAddress !== undefined &&
            (obj.contractAddress = message.contractAddress);
        message.bloom !== undefined &&
            (obj.bloom = base64FromBytes(message.bloom !== undefined ? message.bloom : new Uint8Array()));
        message.txLogs !== undefined &&
            (obj.txLogs = message.txLogs
                ? TransactionLogs.toJSON(message.txLogs)
                : undefined);
        message.ret !== undefined &&
            (obj.ret = base64FromBytes(message.ret !== undefined ? message.ret : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgEthereumTxResponse };
        if (object.contractAddress !== undefined &&
            object.contractAddress !== null) {
            message.contractAddress = object.contractAddress;
        }
        else {
            message.contractAddress = "";
        }
        if (object.bloom !== undefined && object.bloom !== null) {
            message.bloom = object.bloom;
        }
        else {
            message.bloom = new Uint8Array();
        }
        if (object.txLogs !== undefined && object.txLogs !== null) {
            message.txLogs = TransactionLogs.fromPartial(object.txLogs);
        }
        else {
            message.txLogs = undefined;
        }
        if (object.ret !== undefined && object.ret !== null) {
            message.ret = object.ret;
        }
        else {
            message.ret = new Uint8Array();
        }
        return message;
    },
};
const baseTxData = { nonce: 0, price: "", gas: 0, value: "", hash: "" };
export const TxData = {
    encode(message, writer = Writer.create()) {
        if (message.nonce !== 0) {
            writer.uint32(8).uint64(message.nonce);
        }
        if (message.price !== "") {
            writer.uint32(18).string(message.price);
        }
        if (message.gas !== 0) {
            writer.uint32(24).uint64(message.gas);
        }
        if (message.to !== undefined) {
            Recipient.encode(message.to, writer.uint32(34).fork()).ldelim();
        }
        if (message.value !== "") {
            writer.uint32(42).string(message.value);
        }
        if (message.input.length !== 0) {
            writer.uint32(50).bytes(message.input);
        }
        if (message.v.length !== 0) {
            writer.uint32(58).bytes(message.v);
        }
        if (message.r.length !== 0) {
            writer.uint32(66).bytes(message.r);
        }
        if (message.s.length !== 0) {
            writer.uint32(74).bytes(message.s);
        }
        if (message.hash !== "") {
            writer.uint32(82).string(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTxData };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nonce = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.price = reader.string();
                    break;
                case 3:
                    message.gas = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.to = Recipient.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.value = reader.string();
                    break;
                case 6:
                    message.input = reader.bytes();
                    break;
                case 7:
                    message.v = reader.bytes();
                    break;
                case 8:
                    message.r = reader.bytes();
                    break;
                case 9:
                    message.s = reader.bytes();
                    break;
                case 10:
                    message.hash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTxData };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = Number(object.nonce);
        }
        else {
            message.nonce = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Number(object.gas);
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = Recipient.fromJSON(object.to);
        }
        else {
            message.to = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = bytesFromBase64(object.input);
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = bytesFromBase64(object.v);
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = bytesFromBase64(object.r);
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = bytesFromBase64(object.s);
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.nonce !== undefined && (obj.nonce = message.nonce);
        message.price !== undefined && (obj.price = message.price);
        message.gas !== undefined && (obj.gas = message.gas);
        message.to !== undefined &&
            (obj.to = message.to ? Recipient.toJSON(message.to) : undefined);
        message.value !== undefined && (obj.value = message.value);
        message.input !== undefined &&
            (obj.input = base64FromBytes(message.input !== undefined ? message.input : new Uint8Array()));
        message.v !== undefined &&
            (obj.v = base64FromBytes(message.v !== undefined ? message.v : new Uint8Array()));
        message.r !== undefined &&
            (obj.r = base64FromBytes(message.r !== undefined ? message.r : new Uint8Array()));
        message.s !== undefined &&
            (obj.s = base64FromBytes(message.s !== undefined ? message.s : new Uint8Array()));
        message.hash !== undefined && (obj.hash = message.hash);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTxData };
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = object.nonce;
        }
        else {
            message.nonce = 0;
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = "";
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = 0;
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = Recipient.fromPartial(object.to);
        }
        else {
            message.to = undefined;
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        if (object.input !== undefined && object.input !== null) {
            message.input = object.input;
        }
        else {
            message.input = new Uint8Array();
        }
        if (object.v !== undefined && object.v !== null) {
            message.v = object.v;
        }
        else {
            message.v = new Uint8Array();
        }
        if (object.r !== undefined && object.r !== null) {
            message.r = object.r;
        }
        else {
            message.r = new Uint8Array();
        }
        if (object.s !== undefined && object.s !== null) {
            message.s = object.s;
        }
        else {
            message.s = new Uint8Array();
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        return message;
    },
};
const baseRecipient = { address: "" };
export const Recipient = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRecipient };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseRecipient };
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseRecipient };
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseSigCache = { address: "" };
export const SigCache = {
    encode(message, writer = Writer.create()) {
        if (message.signer !== undefined) {
            EIP155Signer.encode(message.signer, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSigCache };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer = EIP155Signer.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSigCache };
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = EIP155Signer.fromJSON(object.signer);
        }
        else {
            message.signer = undefined;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.signer !== undefined &&
            (obj.signer = message.signer
                ? EIP155Signer.toJSON(message.signer)
                : undefined);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSigCache };
        if (object.signer !== undefined && object.signer !== null) {
            message.signer = EIP155Signer.fromPartial(object.signer);
        }
        else {
            message.signer = undefined;
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseEIP155Signer = {};
export const EIP155Signer = {
    encode(message, writer = Writer.create()) {
        if (message.chainId.length !== 0) {
            writer.uint32(10).bytes(message.chainId);
        }
        if (message.chainIdMul.length !== 0) {
            writer.uint32(18).bytes(message.chainIdMul);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseEIP155Signer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chainId = reader.bytes();
                    break;
                case 2:
                    message.chainIdMul = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseEIP155Signer };
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = bytesFromBase64(object.chainId);
        }
        if (object.chainIdMul !== undefined && object.chainIdMul !== null) {
            message.chainIdMul = bytesFromBase64(object.chainIdMul);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.chainId !== undefined &&
            (obj.chainId = base64FromBytes(message.chainId !== undefined ? message.chainId : new Uint8Array()));
        message.chainIdMul !== undefined &&
            (obj.chainIdMul = base64FromBytes(message.chainIdMul !== undefined ? message.chainIdMul : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseEIP155Signer };
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = new Uint8Array();
        }
        if (object.chainIdMul !== undefined && object.chainIdMul !== null) {
            message.chainIdMul = object.chainIdMul;
        }
        else {
            message.chainIdMul = new Uint8Array();
        }
        return message;
    },
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    EthereumTx(request) {
        const data = MsgEthereumTx.encode(request).finish();
        const promise = this.rpc.request("ethermint.evm.v1alpha1.Msg", "EthereumTx", data);
        return promise.then((data) => MsgEthereumTxResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
