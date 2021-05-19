/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  Log,
  TransactionLogs,
  Params,
} from "../../../ethermint/evm/v1alpha1/evm";

export const protobufPackage = "ethermint.evm.v1alpha1";

/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address is the ethereum hex address to query the account for. */
  address: string;
}

/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
  /** code_hash is the code bytes from the EOA. */
  codeHash: Uint8Array;
  /** nonce is the account's sequence number. */
  nonce: number;
}

/** QueryBalanceRequest is the request type for the Query/Balance RPC method. */
export interface QueryBalanceRequest {
  /** address is the ethereum hex address to query the balance for. */
  address: string;
}

/** QueryBalanceResponse is the response type for the Query/Balance RPC method. */
export interface QueryBalanceResponse {
  /** balance is the balance of the EVM denomination. */
  balance: string;
}

/** QueryStorageRequest is the request type for the Query/Storage RPC method. */
export interface QueryStorageRequest {
  /** / address is the ethereum hex address to query the storage state for. */
  address: string;
  /** key defines the key of the storage state */
  key: string;
}

/**
 * QueryStorageResponse is the response type for the Query/Storage RPC
 * method.
 */
export interface QueryStorageResponse {
  /** key defines the storage state value hash associated with the given key. */
  value: string;
}

/** QueryCodeRequest is the request type for the Query/Code RPC method. */
export interface QueryCodeRequest {
  /** address is the ethereum hex address to query the code for. */
  address: string;
}

/**
 * QueryCodeResponse is the response type for the Query/Code RPC
 * method.
 */
export interface QueryCodeResponse {
  /** code represents the code bytes from an ethereum address. */
  code: Uint8Array;
}

/** QueryTxLogsRequest is the request type for the Query/TxLogs RPC method. */
export interface QueryTxLogsRequest {
  /** hash is the ethereum transaction hex hash to query the logs for. */
  hash: string;
}

/** QueryTxLogs is the response type for the Query/TxLogs RPC method. */
export interface QueryTxLogsResponse {
  /** logs represents the ethereum logs generated from the given transaction. */
  logs: Log[];
}

/** QueryBlockLogsRequest is the request type for the Query/BlockLogs RPC method. */
export interface QueryBlockLogsRequest {
  /** hash is the block hash to query the logs for. */
  hash: string;
}

/** QueryTxLogs is the response type for the Query/BlockLogs RPC method. */
export interface QueryBlockLogsResponse {
  /** logs represents the ethereum logs generated at the given block hash. */
  txLogs: TransactionLogs[];
}

/**
 * QueryBlockBloomRequest is the request type for the Query/BlockBloom RPC
 * method.
 */
export interface QueryBlockBloomRequest {}

/**
 * QueryBlockBloomResponse is the response type for the Query/BlockBloom RPC
 * method.
 */
export interface QueryBlockBloomResponse {
  /** bloom represents bloom filter for the given block hash. */
  bloom: Uint8Array;
}

/** QueryParamsRequest defines the request type for querying x/evm parameters. */
export interface QueryParamsRequest {}

/** QueryParamsResponse defines the response type for querying x/evm parameters. */
export interface QueryParamsResponse {
  /** params define the evm module parameters. */
  params: Params | undefined;
}

const baseQueryAccountRequest: object = { address: "" };

export const QueryAccountRequest = {
  encode(
    message: QueryAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
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

  fromJSON(object: any): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountRequest>): QueryAccountRequest {
    const message = { ...baseQueryAccountRequest } as QueryAccountRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryAccountResponse: object = { balance: "", nonce: 0 };

export const QueryAccountResponse = {
  encode(
    message: QueryAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.codeHash.length !== 0) {
      writer.uint32(18).bytes(message.codeHash);
    }
    if (message.nonce !== 0) {
      writer.uint32(24).uint64(message.nonce);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.codeHash = reader.bytes();
          break;
        case 3:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = bytesFromBase64(object.codeHash);
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = Number(object.nonce);
    } else {
      message.nonce = 0;
    }
    return message;
  },

  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    message.codeHash !== undefined &&
      (obj.codeHash = base64FromBytes(
        message.codeHash !== undefined ? message.codeHash : new Uint8Array()
      ));
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAccountResponse>): QueryAccountResponse {
    const message = { ...baseQueryAccountResponse } as QueryAccountResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    if (object.codeHash !== undefined && object.codeHash !== null) {
      message.codeHash = object.codeHash;
    } else {
      message.codeHash = new Uint8Array();
    }
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = object.nonce;
    } else {
      message.nonce = 0;
    }
    return message;
  },
};

const baseQueryBalanceRequest: object = { address: "" };

export const QueryBalanceRequest = {
  encode(
    message: QueryBalanceRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBalanceRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
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

  fromJSON(object: any): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryBalanceRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceRequest>): QueryBalanceRequest {
    const message = { ...baseQueryBalanceRequest } as QueryBalanceRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryBalanceResponse: object = { balance: "" };

export const QueryBalanceResponse = {
  encode(
    message: QueryBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    return message;
  },

  toJSON(message: QueryBalanceResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryBalanceResponse>): QueryBalanceResponse {
    const message = { ...baseQueryBalanceResponse } as QueryBalanceResponse;
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    return message;
  },
};

const baseQueryStorageRequest: object = { address: "", key: "" };

export const QueryStorageRequest = {
  encode(
    message: QueryStorageRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStorageRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStorageRequest {
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    return message;
  },

  toJSON(message: QueryStorageRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStorageRequest>): QueryStorageRequest {
    const message = { ...baseQueryStorageRequest } as QueryStorageRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    return message;
  },
};

const baseQueryStorageResponse: object = { value: "" };

export const QueryStorageResponse = {
  encode(
    message: QueryStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStorageResponse {
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value);
    } else {
      message.value = "";
    }
    return message;
  },

  toJSON(message: QueryStorageResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryStorageResponse>): QueryStorageResponse {
    const message = { ...baseQueryStorageResponse } as QueryStorageResponse;
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = "";
    }
    return message;
  },
};

const baseQueryCodeRequest: object = { address: "" };

export const QueryCodeRequest = {
  encode(message: QueryCodeRequest, writer: Writer = Writer.create()): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCodeRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
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

  fromJSON(object: any): QueryCodeRequest {
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryCodeRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeRequest>): QueryCodeRequest {
    const message = { ...baseQueryCodeRequest } as QueryCodeRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryCodeResponse: object = {};

export const QueryCodeResponse = {
  encode(message: QueryCodeResponse, writer: Writer = Writer.create()): Writer {
    if (message.code.length !== 0) {
      writer.uint32(10).bytes(message.code);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCodeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCodeResponse {
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = bytesFromBase64(object.code);
    }
    return message;
  },

  toJSON(message: QueryCodeResponse): unknown {
    const obj: any = {};
    message.code !== undefined &&
      (obj.code = base64FromBytes(
        message.code !== undefined ? message.code : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<QueryCodeResponse>): QueryCodeResponse {
    const message = { ...baseQueryCodeResponse } as QueryCodeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = new Uint8Array();
    }
    return message;
  },
};

const baseQueryTxLogsRequest: object = { hash: "" };

export const QueryTxLogsRequest = {
  encode(
    message: QueryTxLogsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTxLogsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTxLogsRequest {
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: QueryTxLogsRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTxLogsRequest>): QueryTxLogsRequest {
    const message = { ...baseQueryTxLogsRequest } as QueryTxLogsRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseQueryTxLogsResponse: object = {};

export const QueryTxLogsResponse = {
  encode(
    message: QueryTxLogsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.logs) {
      Log.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTxLogsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logs.push(Log.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTxLogsResponse {
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTxLogsResponse): unknown {
    const obj: any = {};
    if (message.logs) {
      obj.logs = message.logs.map((e) => (e ? Log.toJSON(e) : undefined));
    } else {
      obj.logs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTxLogsResponse>): QueryTxLogsResponse {
    const message = { ...baseQueryTxLogsResponse } as QueryTxLogsResponse;
    message.logs = [];
    if (object.logs !== undefined && object.logs !== null) {
      for (const e of object.logs) {
        message.logs.push(Log.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryBlockLogsRequest: object = { hash: "" };

export const QueryBlockLogsRequest = {
  encode(
    message: QueryBlockLogsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBlockLogsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBlockLogsRequest } as QueryBlockLogsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlockLogsRequest {
    const message = { ...baseQueryBlockLogsRequest } as QueryBlockLogsRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    return message;
  },

  toJSON(message: QueryBlockLogsRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlockLogsRequest>
  ): QueryBlockLogsRequest {
    const message = { ...baseQueryBlockLogsRequest } as QueryBlockLogsRequest;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    return message;
  },
};

const baseQueryBlockLogsResponse: object = {};

export const QueryBlockLogsResponse = {
  encode(
    message: QueryBlockLogsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.txLogs) {
      TransactionLogs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBlockLogsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBlockLogsResponse } as QueryBlockLogsResponse;
    message.txLogs = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txLogs.push(TransactionLogs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlockLogsResponse {
    const message = { ...baseQueryBlockLogsResponse } as QueryBlockLogsResponse;
    message.txLogs = [];
    if (object.txLogs !== undefined && object.txLogs !== null) {
      for (const e of object.txLogs) {
        message.txLogs.push(TransactionLogs.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryBlockLogsResponse): unknown {
    const obj: any = {};
    if (message.txLogs) {
      obj.txLogs = message.txLogs.map((e) =>
        e ? TransactionLogs.toJSON(e) : undefined
      );
    } else {
      obj.txLogs = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlockLogsResponse>
  ): QueryBlockLogsResponse {
    const message = { ...baseQueryBlockLogsResponse } as QueryBlockLogsResponse;
    message.txLogs = [];
    if (object.txLogs !== undefined && object.txLogs !== null) {
      for (const e of object.txLogs) {
        message.txLogs.push(TransactionLogs.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryBlockBloomRequest: object = {};

export const QueryBlockBloomRequest = {
  encode(_: QueryBlockBloomRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBlockBloomRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryBlockBloomRequest } as QueryBlockBloomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryBlockBloomRequest {
    const message = { ...baseQueryBlockBloomRequest } as QueryBlockBloomRequest;
    return message;
  },

  toJSON(_: QueryBlockBloomRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryBlockBloomRequest>): QueryBlockBloomRequest {
    const message = { ...baseQueryBlockBloomRequest } as QueryBlockBloomRequest;
    return message;
  },
};

const baseQueryBlockBloomResponse: object = {};

export const QueryBlockBloomResponse = {
  encode(
    message: QueryBlockBloomResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.bloom.length !== 0) {
      writer.uint32(10).bytes(message.bloom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBlockBloomResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBlockBloomResponse,
    } as QueryBlockBloomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bloom = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBlockBloomResponse {
    const message = {
      ...baseQueryBlockBloomResponse,
    } as QueryBlockBloomResponse;
    if (object.bloom !== undefined && object.bloom !== null) {
      message.bloom = bytesFromBase64(object.bloom);
    }
    return message;
  },

  toJSON(message: QueryBlockBloomResponse): unknown {
    const obj: any = {};
    message.bloom !== undefined &&
      (obj.bloom = base64FromBytes(
        message.bloom !== undefined ? message.bloom : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBlockBloomResponse>
  ): QueryBlockBloomResponse {
    const message = {
      ...baseQueryBlockBloomResponse,
    } as QueryBlockBloomResponse;
    if (object.bloom !== undefined && object.bloom !== null) {
      message.bloom = object.bloom;
    } else {
      message.bloom = new Uint8Array();
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Account queries an Ethereum account. */
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /**
   * Balance queries the balance of a the EVM denomination for a single
   * EthAccount.
   */
  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse>;
  /** Storage queries the balance of all coins for a single account. */
  Storage(request: QueryStorageRequest): Promise<QueryStorageResponse>;
  /** Code queries the balance of all coins for a single account. */
  Code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** TxLogs queries ethereum logs from a transaction. */
  TxLogs(request: QueryTxLogsRequest): Promise<QueryTxLogsResponse>;
  /** BlockLogs queries all the ethereum logs for a given block hash. */
  BlockLogs(request: QueryBlockLogsRequest): Promise<QueryBlockLogsResponse>;
  /** BlockBloom queries the block bloom filter bytes at a given height. */
  BlockBloom(request: QueryBlockBloomRequest): Promise<QueryBlockBloomResponse>;
  /** Params queries the parameters of x/evm module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "Account",
      data
    );
    return promise.then((data) =>
      QueryAccountResponse.decode(new Reader(data))
    );
  }

  Balance(request: QueryBalanceRequest): Promise<QueryBalanceResponse> {
    const data = QueryBalanceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "Balance",
      data
    );
    return promise.then((data) =>
      QueryBalanceResponse.decode(new Reader(data))
    );
  }

  Storage(request: QueryStorageRequest): Promise<QueryStorageResponse> {
    const data = QueryStorageRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "Storage",
      data
    );
    return promise.then((data) =>
      QueryStorageResponse.decode(new Reader(data))
    );
  }

  Code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "Code",
      data
    );
    return promise.then((data) => QueryCodeResponse.decode(new Reader(data)));
  }

  TxLogs(request: QueryTxLogsRequest): Promise<QueryTxLogsResponse> {
    const data = QueryTxLogsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "TxLogs",
      data
    );
    return promise.then((data) => QueryTxLogsResponse.decode(new Reader(data)));
  }

  BlockLogs(request: QueryBlockLogsRequest): Promise<QueryBlockLogsResponse> {
    const data = QueryBlockLogsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "BlockLogs",
      data
    );
    return promise.then((data) =>
      QueryBlockLogsResponse.decode(new Reader(data))
    );
  }

  BlockBloom(
    request: QueryBlockBloomRequest
  ): Promise<QueryBlockBloomResponse> {
    const data = QueryBlockBloomRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "BlockBloom",
      data
    );
    return promise.then((data) =>
      QueryBlockBloomResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ethermint.evm.v1alpha1.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
