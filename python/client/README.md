# SNET client code example for Python using snet-sdk

To generate the client libraries required by the snet-sdk, you need the SingularityNET Command Line Interface, or CLI, which you can download from PyPi, see [https://github.com/singnet/snet-cli#installing-with-pip](https://github.com/singnet/snet-cli#installing-with-pip)
  
This example uses the `example-service` service from the `snet` organization and it works on the `Kovan` network. Once you have the CLI installed, run the following command:
```bash
snet sdk generate-client-library python snet example-service
```
  
You should move or copy the generated files to the root of the project.

The client code example expects a `config.py` file with a private key in it. Rename `config.py.sample` to `config.py` and edit it to include your private key.  
You should have Kovan ETH and Kovan AGI in the wallet associated with your private key for the example to work.

To get Kovan ETH, please see this link: [https://github.com/kovan-testnet/faucet](https://github.com/kovan-testnet/faucet)
To get Kovan AGI, please use the faucet at the following link: [https://faucet.singularitynet.io/](https://faucet.singularitynet.io/)
