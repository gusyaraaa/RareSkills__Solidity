import fs from 'fs';
import { ethers } from 'hardhat';

async function main() {
  const [owner] = await ethers.getSigners();

  const HelloWorld = await ethers.getContractFactory('HelloWorld', owner);
  const helloWorld = await HelloWorld.deploy();

  fs.writeFileSync(
    'contract-addresses.json',
    JSON.stringify({
      helloWorld: await helloWorld.getAddress(),
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
