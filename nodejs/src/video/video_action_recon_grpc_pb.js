// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc/index');
var video_action_recon_pb = require('./video_action_recon_pb.js');

function serialize_Input(arg) {
  if (!(arg instanceof video_action_recon_pb.Input)) {
    throw new Error('Expected argument of type Input');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Input(buffer_arg) {
  return video_action_recon_pb.Input.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Output(arg) {
  if (!(arg instanceof video_action_recon_pb.Output)) {
    throw new Error('Expected argument of type Output');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Output(buffer_arg) {
  return video_action_recon_pb.Output.deserializeBinary(new Uint8Array(buffer_arg));
}


var VideoActionRecognitionService = exports.VideoActionRecognitionService = {
  video_action_recon: {
    path: '/VideoActionRecognition/video_action_recon',
    requestStream: false,
    responseStream: false,
    requestType: video_action_recon_pb.Input,
    responseType: video_action_recon_pb.Output,
    requestSerialize: serialize_Input,
    requestDeserialize: deserialize_Input,
    responseSerialize: serialize_Output,
    responseDeserialize: deserialize_Output,
  },
};

exports.VideoActionRecognitionClient = grpc.makeGenericClientConstructor(VideoActionRecognitionService);
