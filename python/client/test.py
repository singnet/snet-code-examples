from snet.sdk import SnetSDK

import example_service_pb2
import example_service_pb2_grpc

import image_recon_pb2
import image_recon_pb2_grpc

import video_action_recon_pb2
import video_action_recon_pb2_grpc


from config import config

sdk = SnetSDK(config)


service_client = sdk.create_service_client(
    "snet", "example-service", example_service_pb2_grpc.CalculatorStub)
request = example_service_pb2.Numbers(a=20, b=3)
print("Performing {} + {}:".format(request.a, request.b))
result = service_client.service.add(request)
print("Result: {}".format(result.value))


service_client = sdk.create_service_client(
    "snet", "i3d-video-action-recognition", video_action_recon_pb2_grpc.VideoActionRecognitionStub)
request = video_action_recon_pb2.Input(
    model="400", url="http://crcv.ucf.edu/THUMOS14/UCF101/UCF101/v_CricketShot_g04_c02.avi")
print("Performing video action recognition")
result = service_client.service.video_action_recon(request)
print("Result: {}".format(result))


service_client = sdk.create_service_client(
    "snet", "cntk-image-recon", image_recon_pb2_grpc.RecognizerStub)
request = image_recon_pb2.Input(
    model="ResNet152", img_path="https://www.fiftyflowers.com/site_files/FiftyFlowers/Image/Product/Mini-Black-Eye-bloom-350_c7d02e72.jpg")
print("Performing image recognition")
result = service_client.service.flowers(request)
print("Result: {}".format(result))
