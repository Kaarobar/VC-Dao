// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Project.sol";

/**
 * Propose a project (name, website, logo, prject description, prospects, fund amount, formula: numOfTokens to issue in exchange for 1ETH, dao details)
 * Fund a project (projectId, amount) - become a member of the project's DAO if enough num of tokens
 * Funding complete - DAO created, members added
 */
contract CrowdFunding {
    Project[] private s_projects;
    
    event ProjectCreated(
        address indexed contractAddress,
        address indexed creator,
        string projectTitle,
        uint256 deadline,
        uint256 goalAmount
    );

    /**
     * @dev This is called by the CrowdFundingDAO, once the voters have agreed to add this project into active list
     */
    function createProject(
        address token,
        uint toIssue,
        uint goalAmount,
        string memory title,
        string memory description,
        uint durationInDays
    ) public {
        uint fundRaisingDeadline = block.timestamp + (durationInDays*24*3600);
        Project project = new Project(
            msg.sender,
            token,
            (s_projects.length),
            toIssue,
            title,
            description,
            fundRaisingDeadline
        );
        s_projects.push(project);
        emit ProjectCreated(
            address(project),   //project address
            msg.sender,         //project initiator
            title,              //coin name or starting of project
            fundRaisingDeadline,//deadline in days
            goalAmount          //amnt needed to be raised
        );
    }

    function getActiveProjects() public view returns (Project[] memory) {
        return s_projects;
    }
}
