import { network, ethers } from "hardhat";
import {
  proposalsFile,
  developmentChains,
  VOTING_PERIOD,
} from "../helper-hardhat.config";
import { moveBlocks } from "../utils/move-blocks";

async function main() {
  const proposalId =
    "29978624054552345667251286264545702225642194174443855016805296894465612100156";
  // 0 = Against, 1 = For, 2 = Abstain for this example
  const voteWay = 1;
  const reason = "I lsupport this project";
  await vote(proposalId, voteWay, reason);
}

// 0 = Against, 1 = For, 2 = Abstain for this example
export async function vote(
  proposalId: string,
  voteWay: number,
  reason: string
) {
  console.log("Voting...");
  const governor = await ethers.getContract("GovernorContract");
  const voteTx = await governor.castVoteWithReason(proposalId, voteWay, reason);
  const voteTxReceipt = await voteTx.wait(1);
  console.log(voteTxReceipt.events[0].args.reason);
  const proposalState = await governor.state(proposalId);
  console.log(`Current Proposal State: ${proposalState}`);
  if (developmentChains.includes(network.name)) {
    await moveBlocks(VOTING_PERIOD + 1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
