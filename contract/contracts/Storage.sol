// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Storage {
  uint256 private favoriteNumber;
  uint256 private sum;

  mapping(address => uint256) private addressToNum;
  mapping(address => bool) private exists;
  address[] private numOfUser;

  function store(uint256 _favoriteNumber) public {
    addressToNum[msg.sender] = _favoriteNumber;
    if (!exists[msg.sender]) {
      exists[msg.sender] = true;
      numOfUser.push(msg.sender);
    }
    sum += _favoriteNumber;
  }

  function getNum() public view returns (uint256) {
    require(exists[msg.sender], "Address not exist");
    return addressToNum[msg.sender];
  }

  function getTotalWallets() public view returns (uint256) {
    return numOfUser.length;
  }

  function getTotalValue() public view returns (uint256) {
    return sum;
  }
}
