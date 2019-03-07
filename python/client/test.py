from snet_sdk import Snet

import config

snet = Snet(private_key=config.private_key, allow_transactions=True)

translation = snet.client("snet", "translation")

stub = translation.grpc.translate_pb2_grpc.TranslationStub(translation.grpc_channel)

request = translation.grpc.translate_pb2.Request(
    source_language="en",
    target_language="de",
    text="Hello World."
)

result = stub.translate(request).translation
