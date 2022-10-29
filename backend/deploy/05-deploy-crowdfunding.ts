import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import verify from "../utils/verify";
import { networkConfig, developmentChains } from "../helper-hardhat.config";
import { ethers } from "hardhat";

const deployCrowdFunding: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("----------------------------------------------------");
  log("Deploying CrowdFund and waiting for confirmations...");
  const crowdfund = await deploy("CrowdFunding", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });
  log(`crowdFund at ${crowdfund.address}`);
  if (
    !developmentChains.includes(network.name) &&
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(crowdfund.address, []);
  }
  const crowdfundContract = await ethers.getContractAt(
    "CrowdFunding",
    crowdfund.address
  );
  const timeLock = await ethers.getContract("TimeLock");
  const transferTx = await crowdfundContract.transferOwnership(
    timeLock.address
  );
  await transferTx.wait(1);
};

export default deployCrowdFunding;
deployCrowdFunding.tags = ["all", "crowdfund"];
