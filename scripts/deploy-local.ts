import fs from 'fs';
import { ethers } from 'hardhat';

async function main() {
  const [owner] = await ethers.getSigners();

  const HelloWorld = await ethers.getContractFactory('HelloWorld', owner);
  const helloWorld = await HelloWorld.deploy();

  const Types = await ethers.getContractFactory('Types', owner);
  const types = await Types.deploy();

  fs.writeFileSync(
    'contract-addresses.json',
    JSON.stringify({
      helloWorld: await helloWorld.getAddress(),
      types: await types.getAddress(),
    }),
  );
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
