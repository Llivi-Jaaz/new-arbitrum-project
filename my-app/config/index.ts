import { Contract, ContractRunner } from "ethers";
import abi from "./abi.json";

export function getContract(signer: ContractRunner) {
  return new Contract(
    "0x9C59EBeD791988B196f78a232F1395854565277d" /* address of the deployed contract */,
    abi as any,
    signer
  );
}