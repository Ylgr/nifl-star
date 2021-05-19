/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "ethermint.evm.v1alpha1";
const baseParams = {
    evmDenom: "",
    enableCreate: false,
    enableCall: false,
    extraEips: 0,
};
export const Params = {
    encode(message, writer = Writer.create()) {
        if (message.evmDenom !== "") {
            writer.uint32(10).string(message.evmDenom);
        }
        if (message.enableCreate === true) {
            writer.uint32(16).bool(message.enableCreate);
        }
        if (message.enableCall === true) {
            writer.uint32(24).bool(message.enableCall);
        }
        writer.uint32(34).fork();
        for (const v of message.extraEips) {
            writer.int64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseParams };
        message.extraEips = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evmDenom = reader.string();
                    break;
                case 2:
                    message.enableCreate = reader.bool();
                    break;
                case 3:
                    message.enableCall = reader.bool();
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.extraEips.push(longToNumber(reader.int64()));
                        }
                    }
                    else {
                        message.extraEips.push(longToNumber(reader.int64()));
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseParams };
        message.extraEips = [];
        if (object.evmDenom !== undefined && object.evmDenom !== null) {
            message.evmDenom = String(object.evmDenom);
        }
        else {
            message.evmDenom = "";
        }
        if (object.enableCreate !== undefined && object.enableCreate !== null) {
            message.enableCreate = Boolean(object.enableCreate);
        }
        else {
            message.enableCreate = false;
        }
        if (object.enableCall !== undefined && object.enableCall !== null) {
            message.enableCall = Boolean(object.enableCall);
        }
        else {
            message.enableCall = false;
        }
        if (object.extraEips !== undefined && object.extraEips !== null) {
            for (const e of object.extraEips) {
                message.extraEips.push(Number(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.evmDenom !== undefined && (obj.evmDenom = message.evmDenom);
        message.enableCreate !== undefined &&
            (obj.enableCreate = message.enableCreate);
        message.enableCall !== undefined && (obj.enableCall = message.enableCall);
        if (message.extraEips) {
            obj.extraEips = message.extraEips.map((e) => e);
        }
        else {
            obj.extraEips = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseParams };
        message.extraEips = [];
        if (object.evmDenom !== undefined && object.evmDenom !== null) {
            message.evmDenom = object.evmDenom;
        }
        else {
            message.evmDenom = "";
        }
        if (object.enableCreate !== undefined && object.enableCreate !== null) {
            message.enableCreate = object.enableCreate;
        }
        else {
            message.enableCreate = false;
        }
        if (object.enableCall !== undefined && object.enableCall !== null) {
            message.enableCall = object.enableCall;
        }
        else {
            message.enableCall = false;
        }
        if (object.extraEips !== undefined && object.extraEips !== null) {
            for (const e of object.extraEips) {
                message.extraEips.push(e);
            }
        }
        return message;
    },
};
const baseChainConfig = {
    homesteadBlock: "",
    daoForkBlock: "",
    daoForkSupport: false,
    eip150Block: "",
    eip150Hash: "",
    eip155Block: "",
    eip158Block: "",
    byzantiumBlock: "",
    constantinopleBlock: "",
    petersburgBlock: "",
    istanbulBlock: "",
    muirGlacierBlock: "",
    yoloV2Block: "",
    ewasmBlock: "",
};
export const ChainConfig = {
    encode(message, writer = Writer.create()) {
        if (message.homesteadBlock !== "") {
            writer.uint32(10).string(message.homesteadBlock);
        }
        if (message.daoForkBlock !== "") {
            writer.uint32(18).string(message.daoForkBlock);
        }
        if (message.daoForkSupport === true) {
            writer.uint32(24).bool(message.daoForkSupport);
        }
        if (message.eip150Block !== "") {
            writer.uint32(34).string(message.eip150Block);
        }
        if (message.eip150Hash !== "") {
            writer.uint32(42).string(message.eip150Hash);
        }
        if (message.eip155Block !== "") {
            writer.uint32(50).string(message.eip155Block);
        }
        if (message.eip158Block !== "") {
            writer.uint32(58).string(message.eip158Block);
        }
        if (message.byzantiumBlock !== "") {
            writer.uint32(66).string(message.byzantiumBlock);
        }
        if (message.constantinopleBlock !== "") {
            writer.uint32(74).string(message.constantinopleBlock);
        }
        if (message.petersburgBlock !== "") {
            writer.uint32(82).string(message.petersburgBlock);
        }
        if (message.istanbulBlock !== "") {
            writer.uint32(90).string(message.istanbulBlock);
        }
        if (message.muirGlacierBlock !== "") {
            writer.uint32(98).string(message.muirGlacierBlock);
        }
        if (message.yoloV2Block !== "") {
            writer.uint32(106).string(message.yoloV2Block);
        }
        if (message.ewasmBlock !== "") {
            writer.uint32(114).string(message.ewasmBlock);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseChainConfig };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.homesteadBlock = reader.string();
                    break;
                case 2:
                    message.daoForkBlock = reader.string();
                    break;
                case 3:
                    message.daoForkSupport = reader.bool();
                    break;
                case 4:
                    message.eip150Block = reader.string();
                    break;
                case 5:
                    message.eip150Hash = reader.string();
                    break;
                case 6:
                    message.eip155Block = reader.string();
                    break;
                case 7:
                    message.eip158Block = reader.string();
                    break;
                case 8:
                    message.byzantiumBlock = reader.string();
                    break;
                case 9:
                    message.constantinopleBlock = reader.string();
                    break;
                case 10:
                    message.petersburgBlock = reader.string();
                    break;
                case 11:
                    message.istanbulBlock = reader.string();
                    break;
                case 12:
                    message.muirGlacierBlock = reader.string();
                    break;
                case 13:
                    message.yoloV2Block = reader.string();
                    break;
                case 14:
                    message.ewasmBlock = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseChainConfig };
        if (object.homesteadBlock !== undefined && object.homesteadBlock !== null) {
            message.homesteadBlock = String(object.homesteadBlock);
        }
        else {
            message.homesteadBlock = "";
        }
        if (object.daoForkBlock !== undefined && object.daoForkBlock !== null) {
            message.daoForkBlock = String(object.daoForkBlock);
        }
        else {
            message.daoForkBlock = "";
        }
        if (object.daoForkSupport !== undefined && object.daoForkSupport !== null) {
            message.daoForkSupport = Boolean(object.daoForkSupport);
        }
        else {
            message.daoForkSupport = false;
        }
        if (object.eip150Block !== undefined && object.eip150Block !== null) {
            message.eip150Block = String(object.eip150Block);
        }
        else {
            message.eip150Block = "";
        }
        if (object.eip150Hash !== undefined && object.eip150Hash !== null) {
            message.eip150Hash = String(object.eip150Hash);
        }
        else {
            message.eip150Hash = "";
        }
        if (object.eip155Block !== undefined && object.eip155Block !== null) {
            message.eip155Block = String(object.eip155Block);
        }
        else {
            message.eip155Block = "";
        }
        if (object.eip158Block !== undefined && object.eip158Block !== null) {
            message.eip158Block = String(object.eip158Block);
        }
        else {
            message.eip158Block = "";
        }
        if (object.byzantiumBlock !== undefined && object.byzantiumBlock !== null) {
            message.byzantiumBlock = String(object.byzantiumBlock);
        }
        else {
            message.byzantiumBlock = "";
        }
        if (object.constantinopleBlock !== undefined &&
            object.constantinopleBlock !== null) {
            message.constantinopleBlock = String(object.constantinopleBlock);
        }
        else {
            message.constantinopleBlock = "";
        }
        if (object.petersburgBlock !== undefined &&
            object.petersburgBlock !== null) {
            message.petersburgBlock = String(object.petersburgBlock);
        }
        else {
            message.petersburgBlock = "";
        }
        if (object.istanbulBlock !== undefined && object.istanbulBlock !== null) {
            message.istanbulBlock = String(object.istanbulBlock);
        }
        else {
            message.istanbulBlock = "";
        }
        if (object.muirGlacierBlock !== undefined &&
            object.muirGlacierBlock !== null) {
            message.muirGlacierBlock = String(object.muirGlacierBlock);
        }
        else {
            message.muirGlacierBlock = "";
        }
        if (object.yoloV2Block !== undefined && object.yoloV2Block !== null) {
            message.yoloV2Block = String(object.yoloV2Block);
        }
        else {
            message.yoloV2Block = "";
        }
        if (object.ewasmBlock !== undefined && object.ewasmBlock !== null) {
            message.ewasmBlock = String(object.ewasmBlock);
        }
        else {
            message.ewasmBlock = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.homesteadBlock !== undefined &&
            (obj.homesteadBlock = message.homesteadBlock);
        message.daoForkBlock !== undefined &&
            (obj.daoForkBlock = message.daoForkBlock);
        message.daoForkSupport !== undefined &&
            (obj.daoForkSupport = message.daoForkSupport);
        message.eip150Block !== undefined &&
            (obj.eip150Block = message.eip150Block);
        message.eip150Hash !== undefined && (obj.eip150Hash = message.eip150Hash);
        message.eip155Block !== undefined &&
            (obj.eip155Block = message.eip155Block);
        message.eip158Block !== undefined &&
            (obj.eip158Block = message.eip158Block);
        message.byzantiumBlock !== undefined &&
            (obj.byzantiumBlock = message.byzantiumBlock);
        message.constantinopleBlock !== undefined &&
            (obj.constantinopleBlock = message.constantinopleBlock);
        message.petersburgBlock !== undefined &&
            (obj.petersburgBlock = message.petersburgBlock);
        message.istanbulBlock !== undefined &&
            (obj.istanbulBlock = message.istanbulBlock);
        message.muirGlacierBlock !== undefined &&
            (obj.muirGlacierBlock = message.muirGlacierBlock);
        message.yoloV2Block !== undefined &&
            (obj.yoloV2Block = message.yoloV2Block);
        message.ewasmBlock !== undefined && (obj.ewasmBlock = message.ewasmBlock);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseChainConfig };
        if (object.homesteadBlock !== undefined && object.homesteadBlock !== null) {
            message.homesteadBlock = object.homesteadBlock;
        }
        else {
            message.homesteadBlock = "";
        }
        if (object.daoForkBlock !== undefined && object.daoForkBlock !== null) {
            message.daoForkBlock = object.daoForkBlock;
        }
        else {
            message.daoForkBlock = "";
        }
        if (object.daoForkSupport !== undefined && object.daoForkSupport !== null) {
            message.daoForkSupport = object.daoForkSupport;
        }
        else {
            message.daoForkSupport = false;
        }
        if (object.eip150Block !== undefined && object.eip150Block !== null) {
            message.eip150Block = object.eip150Block;
        }
        else {
            message.eip150Block = "";
        }
        if (object.eip150Hash !== undefined && object.eip150Hash !== null) {
            message.eip150Hash = object.eip150Hash;
        }
        else {
            message.eip150Hash = "";
        }
        if (object.eip155Block !== undefined && object.eip155Block !== null) {
            message.eip155Block = object.eip155Block;
        }
        else {
            message.eip155Block = "";
        }
        if (object.eip158Block !== undefined && object.eip158Block !== null) {
            message.eip158Block = object.eip158Block;
        }
        else {
            message.eip158Block = "";
        }
        if (object.byzantiumBlock !== undefined && object.byzantiumBlock !== null) {
            message.byzantiumBlock = object.byzantiumBlock;
        }
        else {
            message.byzantiumBlock = "";
        }
        if (object.constantinopleBlock !== undefined &&
            object.constantinopleBlock !== null) {
            message.constantinopleBlock = object.constantinopleBlock;
        }
        else {
            message.constantinopleBlock = "";
        }
        if (object.petersburgBlock !== undefined &&
            object.petersburgBlock !== null) {
            message.petersburgBlock = object.petersburgBlock;
        }
        else {
            message.petersburgBlock = "";
        }
        if (object.istanbulBlock !== undefined && object.istanbulBlock !== null) {
            message.istanbulBlock = object.istanbulBlock;
        }
        else {
            message.istanbulBlock = "";
        }
        if (object.muirGlacierBlock !== undefined &&
            object.muirGlacierBlock !== null) {
            message.muirGlacierBlock = object.muirGlacierBlock;
        }
        else {
            message.muirGlacierBlock = "";
        }
        if (object.yoloV2Block !== undefined && object.yoloV2Block !== null) {
            message.yoloV2Block = object.yoloV2Block;
        }
        else {
            message.yoloV2Block = "";
        }
        if (object.ewasmBlock !== undefined && object.ewasmBlock !== null) {
            message.ewasmBlock = object.ewasmBlock;
        }
        else {
            message.ewasmBlock = "";
        }
        return message;
    },
};
const baseState = { key: "", value: "" };
export const State = {
    encode(message, writer = Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== "") {
            writer.uint32(18).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseState };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseState };
        if (object.key !== undefined && object.key !== null) {
            message.key = String(object.key);
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = String(object.value);
        }
        else {
            message.value = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseState };
        if (object.key !== undefined && object.key !== null) {
            message.key = object.key;
        }
        else {
            message.key = "";
        }
        if (object.value !== undefined && object.value !== null) {
            message.value = object.value;
        }
        else {
            message.value = "";
        }
        return message;
    },
};
const baseTransactionLogs = { hash: "" };
export const TransactionLogs = {
    encode(message, writer = Writer.create()) {
        if (message.hash !== "") {
            writer.uint32(10).string(message.hash);
        }
        for (const v of message.logs) {
            Log.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseTransactionLogs };
        message.logs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.string();
                    break;
                case 2:
                    message.logs.push(Log.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseTransactionLogs };
        message.logs = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(Log.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = message.hash);
        if (message.logs) {
            obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
        }
        else {
            obj.logs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseTransactionLogs };
        message.logs = [];
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.logs !== undefined && object.logs !== null) {
            for (const e of object.logs) {
                message.logs.push(Log.fromPartial(e));
            }
        }
        return message;
    },
};
const baseLog = {
    address: "",
    topics: "",
    blockNumber: 0,
    txHash: "",
    txIndex: 0,
    blockHash: "",
    index: 0,
    removed: false,
};
export const Log = {
    encode(message, writer = Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.topics) {
            writer.uint32(18).string(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.blockNumber !== 0) {
            writer.uint32(32).uint64(message.blockNumber);
        }
        if (message.txHash !== "") {
            writer.uint32(42).string(message.txHash);
        }
        if (message.txIndex !== 0) {
            writer.uint32(48).uint64(message.txIndex);
        }
        if (message.blockHash !== "") {
            writer.uint32(58).string(message.blockHash);
        }
        if (message.index !== 0) {
            writer.uint32(64).uint64(message.index);
        }
        if (message.removed === true) {
            writer.uint32(72).bool(message.removed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseLog };
        message.topics = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.topics.push(reader.string());
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.blockNumber = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.txHash = reader.string();
                    break;
                case 6:
                    message.txIndex = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.blockHash = reader.string();
                    break;
                case 8:
                    message.index = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.removed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseLog };
        message.topics = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(String(e));
            }
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = Number(object.blockNumber);
        }
        else {
            message.blockNumber = 0;
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = String(object.txHash);
        }
        else {
            message.txHash = "";
        }
        if (object.txIndex !== undefined && object.txIndex !== null) {
            message.txIndex = Number(object.txIndex);
        }
        else {
            message.txIndex = 0;
        }
        if (object.blockHash !== undefined && object.blockHash !== null) {
            message.blockHash = String(object.blockHash);
        }
        else {
            message.blockHash = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = Number(object.index);
        }
        else {
            message.index = 0;
        }
        if (object.removed !== undefined && object.removed !== null) {
            message.removed = Boolean(object.removed);
        }
        else {
            message.removed = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.topics) {
            obj.topics = message.topics.map((e) => e);
        }
        else {
            obj.topics = [];
        }
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.blockNumber !== undefined &&
            (obj.blockNumber = message.blockNumber);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.txIndex !== undefined && (obj.txIndex = message.txIndex);
        message.blockHash !== undefined && (obj.blockHash = message.blockHash);
        message.index !== undefined && (obj.index = message.index);
        message.removed !== undefined && (obj.removed = message.removed);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseLog };
        message.topics = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.topics !== undefined && object.topics !== null) {
            for (const e of object.topics) {
                message.topics.push(e);
            }
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = new Uint8Array();
        }
        if (object.blockNumber !== undefined && object.blockNumber !== null) {
            message.blockNumber = object.blockNumber;
        }
        else {
            message.blockNumber = 0;
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = object.txHash;
        }
        else {
            message.txHash = "";
        }
        if (object.txIndex !== undefined && object.txIndex !== null) {
            message.txIndex = object.txIndex;
        }
        else {
            message.txIndex = 0;
        }
        if (object.blockHash !== undefined && object.blockHash !== null) {
            message.blockHash = object.blockHash;
        }
        else {
            message.blockHash = "";
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = 0;
        }
        if (object.removed !== undefined && object.removed !== null) {
            message.removed = object.removed;
        }
        else {
            message.removed = false;
        }
        return message;
    },
};
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
