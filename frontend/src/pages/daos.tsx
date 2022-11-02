import Link from "next/link";
import React from "react";
import DaoListingBox from "../components/Dao/DaoListingBox";
import Layout from "../components/Layout";

const data = [
  {
    dao: "compund",
    daoIconSrc: "/assets/images/compound.webp",
    proposal: 90,
    voters: 90,
    holders: 90,
  },
  {
    dao: "compund",
    daoIconSrc: "/assets/images/compound.webp",
    proposal: 90,
    voters: 90,
    holders: 90,
  },
  {
    dao: "compund",
    daoIconSrc: "/assets/images/compound.webp",
    proposal: 90,
    voters: 90,
    holders: 90,
  },
  {
    dao: "compund",
    daoIconSrc: "/assets/images/compound.webp",
    proposal: 90,
    voters: 90,
    holders: 90,
  },
  {
    dao: "compund",
    daoIconSrc: "/assets/images/compound.webp",
    proposal: 90,
    voters: 90,
    holders: 90,
  },
  {
    dao: "compund",
    daoIconSrc: "/assets/images/compound.webp",
    proposal: 90,
    voters: 90,
    holders: 90,
  },
];

const Dao = () => {
  return (
    <Layout>
      <div className="my-16">
        <div className="container">
          <div className="mb-6">
            <h1 className="font-medium text-gray-800">Explore DAOs</h1>
          </div>
          <div className="space-y-6">
            {data.map(({ dao, daoIconSrc, holders, proposal, voters }, i) => (
              <Link href={`/governance/${i}`} className="no-underline" key={i}>
                <DaoListingBox
                  dao={dao}
                  daoIconSrc={daoIconSrc}
                  proposal={proposal}
                  voters={voters}
                  holders={holders}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dao;
