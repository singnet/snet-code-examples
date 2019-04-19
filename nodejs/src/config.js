export default {
  web3Provider: process.env.PROVIDER_HOST,
  privateKey: process.env.PRIVATE_KEY,
  signerPrivateKey: process.env.PRIVATE_KEY,
  networkId: process.env.NETWORK_ID,
  ipfsEndpoint: process.env.IPFS_ENDPOINT,
  defaultGasPrice: 4700000,
  defaultGasLimit: 210000,
  blockOffset: process.env.BLOCK_OFFSET,
};
