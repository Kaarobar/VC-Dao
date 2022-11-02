import Link from "next/link";
import React from "react";
import DaoListingBox from "../components/Dao/DaoListingBox";
import Layout from "../components/Layout";

// const data = [
//   {
//     dao: "compund",
//     daoIconSrc: "/assets/images/compound.webp",
//     proposal: 90,
//     voters: 90,
//     holders: 90,
//   },
//   {
//     dao: "compund",
//     daoIconSrc: "/assets/images/compound.webp",
//     proposal: 90,
//     voters: 90,
//     holders: 90,
//   },
//   {
//     dao: "compund",
//     daoIconSrc: "/assets/images/compound.webp",
//     proposal: 90,
//     voters: 90,
//     holders: 90,
//   },
//   {
//     dao: "compund",
//     daoIconSrc: "/assets/images/compound.webp",
//     proposal: 90,
//     voters: 90,
//     holders: 90,
//   },
//   {
//     dao: "compund",
//     daoIconSrc: "/assets/images/compound.webp",
//     proposal: 90,
//     voters: 90,
//     holders: 90,
//   },
//   {
//     dao: "compund",
//     daoIconSrc: "/assets/images/compound.webp",
//     proposal: 90,
//     voters: 90,
//     holders: 90,
//   },
// ];

const Dao = () => {
  return (
    <Layout bottom>
      <div className="my-16">
        <div className="container">
          <div className="mb-6">
            <h1 className="font-medium text-gray-800">Explore DAOs</h1>
          </div>
          <div className="space-y-6">
            <DaoListingBox
              dao="compound"
              daoIconSrc="/assets/images/compound.webp"
              proposal={90}
              voters={199.65}
              holders={4.18}
            />
            <DaoListingBox
              dao="uniswap"
              daoIconSrc="/assets/images/uniswap.webp"
              proposal={25}
              voters={330.84}
              holders={14.81}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dao;
