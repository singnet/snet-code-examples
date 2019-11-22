import "dotenv/config";
require("es6-promise").polyfill();

import SnetSDK, { DefaultPaymentChannelManagementStrategy } from "snet-sdk";

import services from "./example_service_grpc_pb";
import messages from "./example_service_pb";
import config from "../config";

const sdk = new SnetSDK(config);

const main = async () => {
  const orgId = "snet";
  const serviceId = "freecall";
  const groupName = "default_group";
  const defaultPaymentChannelManagementStrategy = new DefaultPaymentChannelManagementStrategy(
    sdk,
    100
  );

  const serviceClient = await sdk.createServiceClient(
    orgId,
    serviceId,
    services.CalculatorClient,
    groupName,
    defaultPaymentChannelManagementStrategy
  );

  const responseHandler = (resolve, reject) => (err, result) => {
    if (err) {
      console.log("GRPC call failed");
      console.error(err);
      reject(err);
      sdk.web3.currentProvider.connection.close();
    } else {
      console.log("Result:", result.getValue());
      console.log("<---------->");
      resolve(result);
    }
  };

  const request = new messages.Numbers();
  request.setA(20);
  request.setB(3);

  await new Promise((resolve, reject) => {
    console.log("Performing 20 + 3");
    serviceClient.service.add(request, responseHandler(resolve, reject));
  });

  await new Promise((resolve, reject) => {
    console.log("Performing 20 - 3");
    serviceClient.service.sub(request, responseHandler(resolve, reject));
  });

  await new Promise((resolve, reject) => {
    console.log("Performing 20 * 3");
    serviceClient.service.mul(request, responseHandler(resolve, reject));
  });

  await new Promise((resolve, reject) => {
    console.log("Performing 20 / 3");
    serviceClient.service.div(request, responseHandler(resolve, reject));
  });

  sdk.web3.currentProvider.connection.close();
};

main();
