import React from "react";
import Button from "../../../components/common/Button";
import CoinTag from "../../../components/Governance/CoinTag";
import InfoBox from "../../../components/Governance/InfoBox";
import TableRow from "../../../components/Governance/Table/Row";
import TableHead from "../../../components/Governance/Table/Head";
import Layout from "../../../components/Layout";
import { TableData } from "../../../components/Governance/Table/Row/Data";
import TableDataProposal from "../../../components/Governance/Table/Row/Data/Proposal";
import TableDataVoteProgress from "../../../components/Governance/Table/Row/Data/VoteProgress";
import TableDateVotes from "../../../components/Governance/Table/Row/Data/Votes";

const Governance = () => {
  return (
    <Layout>
      <div className="my-16">
        <div className="container">
          <div className="flex items-center">
            <div className="flex items-center gap-x-2 flex-grow">
              <div className="w-16 h-16">
                <img
                  src="/assets/images/compound.webp"
                  className="w-full h-full"
                />
              </div>
              <div className="space-y-1">
                <h2>Compound</h2>
                <p className="text-gray-600 hover:underline">
                  https://compound.finance/
                </p>
              </div>
            </div>
            <div className="space-x-2">
              <Button size="md" withBg={false} text="Create new proposal" />
              <Button size="md" withBg text="Delegate Vote" />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6 mt-4">
            <div className="flex items-center mt-4 gap-x-2">
              <CoinTag iconSrc="/assets/images/eth.svg" coinName="ETHEREUM" />
              <InfoBox desc="DAO TYPE" value="ERC20" />
              <InfoBox desc="Token Max Supply" value="10,000,000" />
            </div>
          </div>

          <div className="mb-3 bg-gray-50">
            <div className="flex items-center justify-around p-4 rounded-sm w-full">
              <div className="flex justify-center flex-1 text-sm flex-col gap-y-1 text-center">
                <span className="text-gray-700 font-medium">90</span>
                <span className="text-gray-600">Proposal</span>
              </div>
              <div className="flex justify-center flex-1 text-sm flex-col gap-y-1 text-center">
                <span className="text-gray-700 font-medium">90</span>
                <span className="text-gray-600">Proposal</span>
              </div>
              <div className="flex justify-center flex-1 text-sm flex-col gap-y-1 text-center">
                <span className="text-gray-700 font-medium">90</span>
                <span className="text-gray-600">Proposal</span>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center">
              <div className="flex-grow">
                <h2 className="font-medium">Proposal</h2>
              </div>
              <div className="flex items-center gap-x-2">
                <div className="flex items-center text-sm font-medium gap-x-1">
                  <p className="text-gray-500">50</p>
                  <p className="text-green-500">Passed</p>
                </div>
                <div className="flex items-center text-sm font-medium gap-x-1">
                  <p className="text-gray-500">50</p>
                  <p className="text-red-500">Failed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <table className="w-full rounded-sm border-collapse">
              <TableHead
                items={[
                  "Proposal",
                  "Votes for",
                  "Votes against",
                  "total votes",
                ]}
              />
              <tbody>
                <TableRow>
                  <TableData>
                    <TableDataProposal
                      title="Liquidation Event Handling And Collateral Reserves"
                      status="active"
                      id={123}
                    />
                  </TableData>
                  <TableData>
                    <TableDataVoteProgress
                      votes={35.2}
                      percentage={60}
                      status="for"
                    />
                  </TableData>
                  <TableData>
                    <TableDataVoteProgress
                      votes={35.2}
                      percentage={60}
                      status="against"
                    />
                  </TableData>
                  <TableData>
                    <TableDateVotes votes={35.2} addresses={48} />
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>
                    <TableDataProposal
                      title="Liquidation Event Handling And Collateral Reserves"
                      status="executed"
                      id={123}
                    />
                  </TableData>
                  <TableData>
                    <TableDataVoteProgress
                      votes={35.2}
                      percentage={60}
                      status="for"
                    />
                  </TableData>
                  <TableData>
                    <TableDataVoteProgress
                      votes={35.2}
                      percentage={60}
                      status="against"
                    />
                  </TableData>
                  <TableData>
                    <TableDateVotes votes={35.2} addresses={48} />
                  </TableData>
                </TableRow>
                <TableRow>
                  <TableData>
                    <TableDataProposal
                      title="Liquidation Event Handling And Collateral Reserves"
                      status="active"
                      id={123}
                    />
                  </TableData>
                  <TableData>
                    <TableDataVoteProgress
                      votes={35.2}
                      percentage={60}
                      status="for"
                    />
                  </TableData>
                  <TableData>
                    <TableDataVoteProgress
                      votes={35.2}
                      percentage={60}
                      status="against"
                    />
                  </TableData>
                  <TableData>
                    <TableDateVotes votes={35.2} addresses={48} />
                  </TableData>
                </TableRow>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Governance;
