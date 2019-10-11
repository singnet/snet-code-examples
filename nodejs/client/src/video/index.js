import 'dotenv/config';
import SnetSDK, { DefaultPaymentChannelManagementStrategy } from 'snet-sdk';

import services from './video_action_recon_grpc_pb';
import messages from './video_action_recon_pb';
import config from '../config';

const main = async () => {
  const orgId = 'snet';
  const serviceId = 'i3d-video-action-recognition';
  const groupName = 'default_group';
  const sdk = new SnetSDK(config);

  const GRPCServiceClientStub = services.VideoActionRecognitionClient;
  const defaultPaymentChannelManagementStrategy = new DefaultPaymentChannelManagementStrategy(sdk, 100);
  const serviceClient = await sdk.createServiceClient(orgId, serviceId, GRPCServiceClientStub, groupName, defaultPaymentChannelManagementStrategy);

  const request = new messages.Input();
  request.setModel('400');
  request.setUrl('http://crcv.ucf.edu/THUMOS14/UCF101/UCF101/v_CricketShot_g04_c02.avi');

  serviceClient.service.video_action_recon(request, (err, result) => {
    if(err) {
      console.log('GRPC call failed');
      console.error(err);
    } else {
      console.log('Result:', result.getValue());
    }

    sdk.web3.currentProvider.connection.close();
  });
};

main();
