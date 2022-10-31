import React from 'react'
import DaoListingBox from '../Dao/DaoListingBox'
import Layout from '../Layout'

const AfterFundingHomeScreen = () => {
  return (
    <Layout bottom>
        <div className="my-16">
        <div className="container">
          <div className="mb-6">
            <h1 className="font-medium text-gray-800">Trending DAOs</h1>
          </div>
          <div className="space-y-6">
            <DaoListingBox
              dao="compound"
              daoIconSrc="/assets/images/compound.webp"
              proposal={90}
              voters={90}
              holders={90}
            />
            <DaoListingBox
              dao="compound"
              daoIconSrc="/assets/images/compound.webp"
              proposal={90}
              voters={90}
              holders={90}
            />
            <DaoListingBox
              dao="compound"
              daoIconSrc="/assets/images/compound.webp"
              proposal={90}
              voters={90}
              holders={90}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AfterFundingHomeScreen