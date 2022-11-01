import { Connector } from "@web3modal/ethereum";
import { useAccount, useContract, useProvider, Web3Modal } from "@web3modal/react";
import { sign } from "crypto";
import { ethers } from "ethers";
import { Form } from "formik";
import project from "../../../backend/deployments/polygon/Project.json";

//following are the functions to trigger when writing relevant scripts
export async function Pledge(value: string,account, data: any, isReady: boolean) {
    if(isReady){
        const contract = new ethers.Contract(project.address, project.abi, data)
        const tx = await contract.contribute({value: ethers.utils.parseEther(value), from: account.address} )
        await tx.wait()
        return;
    }
}

export async function Details() {
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/")
    const contract = new ethers.Contract(project.address, project.abi, provider)
    const tx = await contract.getDetails()
    console.log(tx)
    return tx
}

export async function contributedAmnt(account, setContributed) {
    const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/")
    const contract = new ethers.Contract(project.address, project.abi, provider)
    const tx = await contract.contributedFunds(account.address)
    console.log(tx)
    return tx
}