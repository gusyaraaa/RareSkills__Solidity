import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Types } from '../typechain-types';

describe('Types', function () {
  let types: Types;

  before(async function () {
    const Types = await ethers.getContractFactory('Types');
    types = await Types.deploy();
    await types.waitForDeployment();
  });

  it('Should return 1 from getNumber()', async function () {
    const result = await types.getNumber();
    expect(result).to.equal(1);
  });

  it('Should return true from getBoolean()', async function () {
    const result = await types.getBoolean();
    expect(result).to.equal(true);
  });

  it('Should return 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 from getUSDCAddress()', async function () {
    const result = await types.getUSDCAddress();
    expect(result).to.equal('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
  });

  it('Should return 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48 from getAnotherUSDCAddress()', async function () {
    const result = await types.getAnotherUSDCAddress();
    expect(result).to.equal('0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48');
  });
});
