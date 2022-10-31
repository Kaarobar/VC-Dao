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

export async function queue() {
  const args = ARGS;
  const functionToCall = FUNC;
  const crowdfund = await ethers.getContract("CrowdFunding");
  const encodedFunctionCall = crowdfund.interface.encodeFunctionData(
    functionToCall,
    args
  );
  const descriptionHash = ethers.utils.id(PROPOSAL_DESCRIPTION);

  const governor = await ethers.getContract("GovernorContract");
  console.log("Queueing...");
  const queueTx = await governor.queue(
    [crowdfund.address],
    [0],
    [encodedFunctionCall],
    descriptionHash
  );
  await queueTx.wait(1);

  if (developmentChains.includes(network.name)) {
    await moveTime(MIN_DELAY + 1);
    await moveBlocks(1);
  }
}

queue()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
