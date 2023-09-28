import React from 'react'
import BannerHome from '../components/bannerHome/BannerHome'
import InfoHome1 from '../components/infoHome1/InfoHome1'
import InfoHome2 from '../components/infoHome1/InfoHome2'
import InfoHome3 from '../components/infoHome1/InfoHome3'
import BottomBannerHome from '../components/bottomBannerHome/BottomBannerHome'



const Home = () => {
  return (
    <div>

        <BannerHome />
        <InfoHome1 />
        <InfoHome2 />
        <InfoHome3 />
        <BottomBannerHome />
    </div>
  )
}

export default Home