// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc/index');
var example_service_pb = require('./example_service_pb.js');

function serialize_example_service_Numbers(arg) {
  if (!(arg instanceof example_service_pb.Numbers)) {
    throw new Error('Expected argument of type example_service.Numbers');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_service_Numbers(buffer_arg) {
  return example_service_pb.Numbers.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_service_Result(arg) {
  if (!(arg instanceof example_service_pb.Result)) {
    throw new Error('Expected argument of type example_service.Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_service_Result(buffer_arg) {
  return example_service_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalculatorService = exports.CalculatorService = {
  add: {
    path: '/example_service.Calculator/add',
    requestStream: false,
    responseStream: false,
    requestType: example_service_pb.Numbers,
    responseType: example_service_pb.Result,
    requestSerialize: serialize_example_service_Numbers,
    requestDeserialize: deserialize_example_service_Numbers,
    responseSerialize: serialize_example_service_Result,
    responseDeserialize: deserialize_example_service_Result,
  },
  sub: {
    path: '/example_service.Calculator/sub',
    requestStream: false,
    responseStream: false,
    requestType: example_service_pb.Numbers,
    responseType: example_service_pb.Result,
    requestSerialize: serialize_example_service_Numbers,
    requestDeserialize: deserialize_example_service_Numbers,
    responseSerialize: serialize_example_service_Result,
    responseDeserialize: deserialize_example_service_Result,
  },
  mul: {
    path: '/example_service.Calculator/mul',
    requestStream: false,
    responseStream: false,
    requestType: example_service_pb.Numbers,
    responseType: example_service_pb.Result,
    requestSerialize: serialize_example_service_Numbers,
    requestDeserialize: deserialize_example_service_Numbers,
    responseSerialize: serialize_example_service_Result,
    responseDeserialize: deserialize_example_service_Result,
  },
  div: {
    path: '/example_service.Calculator/div',
    requestStream: false,
    responseStream: false,
    requestType: example_service_pb.Numbers,
    responseType: example_service_pb.Result,
    requestSerialize: serialize_example_service_Numbers,
    requestDeserialize: deserialize_example_service_Numbers,
    responseSerialize: serialize_example_service_Result,
    responseDeserialize: deserialize_example_service_Result,
  },
};

exports.CalculatorClient = grpc.makeGenericClientConstructor(CalculatorService);
