import React from "react";
import Button from "../../../../components/common/Button";
import VotingStatusTag from "../../../../components/common/VotingStatusTag";
import Layout from "../../../../components/Layout";

const Proposal = () => {
  return (
    <Layout>
      <div className="my-16">
        <div className="container">
          <div className="space-x-2">
            <VotingStatusTag status="active" />
            <span className="text-sm text-gray-500 font-medium">
              Voting will end in 16 hours, 32 minutes
            </span>
          </div>
          <div className="flex items-center py-4">
            <div className="flex-grow">
              <h2 className="font-medium ">
                Liquidation Event Handling And Collateral Reserves
              </h2>
            </div>
            <div>
              <Button text="Vote" size="md" withBg />
            </div>
          </div>
          <div className="bg-gray-50 space-x-4 font-medium text-gray-500 flex items-center justify-start py-4 px-1">
            <span>ID 123</span>
            <span>Proposed by</span>
            <span className="flex gap-x-3 items-center cursor-pointer">
              <span className="h-8 w-8">
                <img
                  src="/assets/images/user.png"
                  className="w-full h-full rounded-full "
                />
              </span>
              <span className="hover:underline font-normal">
                0xC66e426404C742D81655A9D80Ce58fdbcEE468A9
              </span>
            </span>
            <span>Proposed on: Oct 25th, 2022</span>
          </div>
          <div className="mt-8 mb-4">
            <div>
              <h2 className="font-medium">Details</h2>
            </div>
            <div className="bg-gray-50 p-4 mt-4 text-gray-800">
              <h4 className="mb-4">Description</h4>
              <p className="leading-relaxed">
                Emit Transfer event from absorb When a user is liquidated in
                Compound III, all of their collateral is absorbed into the
                protocol, and they are typically left with a positive balance of
                the base asset (USDC) and no debt (or collateral dust). Shortly
                after the first market launched, a community developer noticed
                that the absorb function was missing an event log in the case
                when an account is left with a positive balance. While this
                doesn’t have any economic impact, adding this event log will
                improve the user experience on Etherscan and blockchain
                explorers, and make analytics easier. Implicit collateral
                reserves Without this patch, the collateral which is bought
                using buyCollateral must be part of the protocol's balance
                explicitly, which can happen during absorb. Excess collateral
                simply transferred to the protocol will not be available as
                collateral reserves to be sold by the protocol automatically.
                With this patch, all of the excess collateral asset available
                using the ERC20 balanceOf function is implicitly considered part
                of collateral reserves. This means that accidentally
                transferring the ERC20 to the protocol will automatically become
                reserves. It also means that interest accrued implicitly, e.g.
                when the collateral is the token of another Compound III market,
                will automatically become part of reserves, which can be sold by
                the protocol and bought using buyCollateral. This patch also
                formalizes the idea of collateral reserves in general, adding a
                getCollateralReserves(asset) function. The associated forum post
                for this proposal can be found here. Proposal The proposal
                itself is to be made from this pull request. The first step is
                to deploy a new CometFactory, using the patched version of the
                contract, which adds the Transfer event to absorb and modifies
                the total collateral accounting. This is done as a ‘prepare’
                step of the migration script. The first action of the proposal
                is to set the factory for cUSDCv3 to the newly deployed factory.
                The second action is to deploy and upgrade to a new
                implementation of Comet, using the newly configured factory. The
                third action is to transfer 10 COMP to ilemi.eth
                (0x2Ae8c972fB2E6c00ddED8986E2dc672ED190DA06), as a reward for
                identifying the issue and suggesting the Transfer event
                improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Proposal;
