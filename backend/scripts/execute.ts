import { ethers, network } from "hardhat";
import {
  FUNC,
  ARGS,
  PROPOSAL_DESCRIPTION,
  MIN_DELAY,
  developmentChains,
} from "../helper-hardhat.config";
import { moveBlocks } from "../utils/move-blocks";
import { moveTime } from "../utils/move-time";

export async function execute() {
  const args = ARGS;
  const functionToCall = FUNC;
  const crowdfund = await ethers.getContract("CrowdFunding");
  const encodedFunctionCall = crowdfund.interface.encodeFunctionData(
    functionToCall,
    args
  );
  const descriptionHash = ethers.utils.id(PROPOSAL_DESCRIPTION);

  const governor = await ethers.getContract("GovernorContract");
  console.log("Executing...");
  // this will fail on a testnet because you need to wait for the MIN_DELAY!
  const executeTx = await governor.execute(
    [crowdfund.address],
    [0],
    [encodedFunctionCall],
    descriptionHash
  );
  await executeTx.wait(1);
  console.log(`Projects: ${await crowdfund.getActiveProjects()}`);
}

execute()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
