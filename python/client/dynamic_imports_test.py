from snet.sdk import SnetSDK

from config import config

sdk = SnetSDK(config)

org_id = "snet"
service_id = "example-service"

service_client = sdk.create_dynamic_service_client(org_id, service_id)


# Examples using the "get_method" utility function
method, request_type, _ = service_client.get_method("add")
request = request_type(a=20, b=3)
print("Performing {} + {}:".format(request.a, request.b))
result = method(request)
print("Result: {}".format(result.value))

# Example using the "get_method" utility function and a fully qualified method name ([<package>].service.method)
method, request_type, _ = service_client.get_method("example_service.Calculator.mul")
request = request_type(a=7, b=12)
print("Performing {} * {}:".format(request.a, request.b))
result = method(request)
print("Result: {}".format(result.value))


# Examples without the get_method utility function
request = service_client.example_service.message.Numbers(a=17, b=12)
print("Performing {} - {}:".format(request.a, request.b))
result = service_client.example_service.service.Calculator.service.sub(request)
print("Result: {}".format(result.value))

print("Performing {} / {}:".format(request.a, request.b))
result = service_client.example_service.service.Calculator.service.div(request)
print("Result: {}".format(result.value))
