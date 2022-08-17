require('dotenv').config();
// import the truffle-hdwallet-provider library to rebuild the wallet
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    kovan: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC, 
        process.env.INFURA_API_KEY
      ),
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    },
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}