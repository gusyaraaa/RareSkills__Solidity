// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Types {
  function getNumber() public pure returns (uint256) {
    uint256 x = 1;
    return x;
  }

  function getBoolean() public pure returns (bool) {
    bool y = true;
    return y;
  }

  function getUSDCAddress() public pure returns (address) {
    // address of the USDC stablecoin
    address z = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    return z;
  }

  function getAnotherUSDCAddress() public pure returns (address) {
    return 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
  }
}
