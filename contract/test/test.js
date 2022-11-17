const { ethers } = require("hardhat");
const { expect, assert } = require("chai");

describe("Storage", function () {
  let Storage;
  let storage;
  beforeEach(async function () {
    Storage = await ethers.getContractFactory("Storage");
    storage = await Storage.deploy();
  });
  it("Should start with a sum of 0", async function () {
    const currentValue = await storage.getTotalValue();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should start with 0 wallets", async function () {
    const currentValue = await storage.getTotalWallets();
    const expectedValue = "0";
    assert.equal(currentValue.toString(), expectedValue);
  });
  it("Should update value when store is called", async function () {
    const value = "4";
    const currentValue = await storage.store(value);
    await currentValue.wait(1);
    const expectedValue = await storage.getTotalValue();
    const wallet = await storage.getTotalWallets();
    assert.equal(value, expectedValue);
    assert.equal("1", wallet);
  });
});
