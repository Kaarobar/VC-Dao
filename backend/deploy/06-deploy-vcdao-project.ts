import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import verify from "../utils/verify";
import {
  networkConfig,
  developmentChains,
  MIN_DELAY,
} from "../helper-hardhat.config";

const deployVcDaoProject: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre;
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  log("----------------------------------------------------");
  log("Deploying VCDao and waiting for confirmations...");
  const args = [
    deployer,
    "0x4d3940164A51E0963c5B80d0dAfBf39C5ccDa750",
    "0",
    "100000",
    "VCDao",
    "Decentralized Investment platform",
    "1",
    "1"
  ];
  const vcdao = await deploy("Project", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  });
  log(`VCDao at ${vcdao.address}`);
  if (
    !developmentChains.includes(network.name) &&
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(vcdao.address, args);
  }
};

export default deployVcDaoProject;
deployVcDaoProject.tags = ["all", "vcdao"];
