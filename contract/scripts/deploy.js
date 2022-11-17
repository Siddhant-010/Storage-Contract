const { ethers } = require("hardhat");

async function main() {
  const Storage = await ethers.getContractFactory("Storage");
  console.log("Deploying contract.....");
  const storage = await Storage.deploy();
  await storage.deployed();
  console.log(`Contact deployed to ${storage.address}`);
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
