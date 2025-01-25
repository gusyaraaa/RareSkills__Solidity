import { ethers } from 'hardhat';
import { expect } from 'chai';
import { HelloWorld } from '../typechain-types';

describe('HelloWorld', function () {
  let helloWorld: HelloWorld;

  before(async function () {
    const HelloWorld = await ethers.getContractFactory('HelloWorld');
    helloWorld = await HelloWorld.deploy();
    await helloWorld.waitForDeployment();
  });

  it('Should return 100 from helloWorld()', async function () {
    const result = await helloWorld.helloWorld();
    expect(result).to.equal(100);
  });

  it('Should return true from haloDunia()', async function () {
    const result = await helloWorld.haloDunia();
    expect(result).to.equal(true);
  });
});
