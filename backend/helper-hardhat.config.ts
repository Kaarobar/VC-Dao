export interface networkConfigItem {
  ethUsdPriceFeed?: string;
  blockConfirmations?: number;
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem;
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  goerli: {
    blockConfirmations: 6,
  },
  polygon: {
    blockConfirmations: 5,
  },
};

export const developmentChains = ["hardhat", "localhost"];
export const proposalsFile = "proposals.json";

// Governor Values
export const QUORUM_PERCENTAGE = 4; // Need 4% of voters to pass
export const MIN_DELAY = 3600; // 1 hour - after a vote passes, you have 1 hour before you can enact

// export const VOTING_PERIOD = 45818 // 1 week - how long the vote lasts. This is pretty long even for local tests
export const VOTING_PERIOD = 5; // blocks
export const VOTING_DELAY = 1; // 1 Block - How many blocks till a proposal vote becomes active
export const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

export const ARGS = [
  "0xf821D3365814a704e59D7165B3D4CCAa3dF65Ba7",
  "100000",
  "1",
  "Metaverse2",
  "Mark Zingerburger2",
  "1",
];
export const FUNC = "createProject";
export const PROPOSAL_DESCRIPTION = "Proposal #3 Add Meta1 project";
