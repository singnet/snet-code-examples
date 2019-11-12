# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
import grpc

import video_action_recon_pb2 as video__action__recon__pb2


class VideoActionRecognitionStub(object):
  # missing associated documentation comment in .proto file
  pass

  def __init__(self, channel):
    """Constructor.

    Args:
      channel: A grpc.Channel.
    """
    self.video_action_recon = channel.unary_unary(
        '/VideoActionRecognition/video_action_recon',
        request_serializer=video__action__recon__pb2.Input.SerializeToString,
        response_deserializer=video__action__recon__pb2.Output.FromString,
        )


class VideoActionRecognitionServicer(object):
  # missing associated documentation comment in .proto file
  pass

  def video_action_recon(self, request, context):
    # missing associated documentation comment in .proto file
    pass
    context.set_code(grpc.StatusCode.UNIMPLEMENTED)
    context.set_details('Method not implemented!')
    raise NotImplementedError('Method not implemented!')


def add_VideoActionRecognitionServicer_to_server(servicer, server):
  rpc_method_handlers = {
      'video_action_recon': grpc.unary_unary_rpc_method_handler(
          servicer.video_action_recon,
          request_deserializer=video__action__recon__pb2.Input.FromString,
          response_serializer=video__action__recon__pb2.Output.SerializeToString,
      ),
  }
  generic_handler = grpc.method_handlers_generic_handler(
      'VideoActionRecognition', rpc_method_handlers)
  server.add_generic_rpc_handlers((generic_handler,))