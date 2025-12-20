require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    shardeum: {
      url: "https://sphinx.shardeum.org",
      chainId: 8082,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
