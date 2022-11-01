import { Connector } from "@web3modal/ethereum";
import { useAccount, useContract, useProvider, Web3Modal } from "@web3modal/react";
import { sign } from "crypto";
import { ethers } from "ethers";
import project from "../../../backend/deployments/polygon/Project.json";

//following are the functions to trigger when writing relevant scripts
export default async function Pledge(value: string, data: any, account: { address: any; connector?: Connector<any, any, any>; isConnected?: boolean; isReconnecting?: boolean; isConnecting?: boolean; isDisconnected?: boolean; status?: "connected" | "reconnecting" | "connecting" | "disconnected"; }, isReady: boolean) {
    if(isReady){

        console.log("A:", data)
        const contract = new ethers.Contract(project.address, project.abi, data)
        //signer is invalid, needs fix
        const tx = await contract.contribute({value: ethers.utils.parseEther(value)})
        await tx.wait()
        return;
    } else {
        console.log("B")
    }
}