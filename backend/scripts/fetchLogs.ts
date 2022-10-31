import { ethers, network } from "hardhat";

export async function fetch() {
    const governor = await ethers.getContract("GovernorContract");
}