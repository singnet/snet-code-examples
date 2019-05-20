from snet_sdk import SnetSDK

import example_service_pb2
import example_service_pb2_grpc

from config import config

sdk = SnetSDK(config)

org_id = "snet"
service_id = "example-service"

service_client = sdk.create_service_client(org_id, service_id, example_service_pb2_grpc.CalculatorStub)

request = example_service_pb2.Numbers(a=20, b=3)

result = service_client.stub.add(request)

print(result)
