import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const balanceButton = document.getElementById("balanceButton");
const walletsButton = document.getElementById("walletsButton");
const favNumber = document.getElementById("favNumber");
const number = document.getElementById("number");
const numberButton = document.getElementById("numberButton");

connectButton.onclick = connect;
balanceButton.onclick = balance;
walletsButton.onclick = wallet;
favNumber.onclick = store;
numberButton.onclick = getnum;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerHTML = "Connected!!!";
    const accounts = await ethereum.request({ method: "eth_accounts" });
  } else {
    connectButton.innerHTML = "Please install MetaMask";
  }
}

async function store(num) {
  try {
    console.log("hi");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    num = number.value;
    await contract.store(num);
  } catch (error) {
    console.log(error);
  }
}

async function balance() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const value = await contract.getTotalValue();
    console.log(value.toString());
    document.getElementById("balanceDiv").innerHTML = value.toString();
  } catch (error) {
    console.log(error);
  }
}

async function wallet() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log(signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const value = await contract.getTotalWallets();
    console.log(value.toString());
    document.getElementById("walletDiv").innerHTML = value.toString();
  } catch (error) {
    console.log(error);
  }
}
async function getnum() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer);
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const value = await contract.getNum();
      console.log(value.toString());
      document.getElementById("numberDiv").innerHTML = value.toString();
    } catch (error) {
      document.getElementById("numberDiv").innerHTML = "Address not exist";
      console.log(error);
    }
  } else {
  }
}
