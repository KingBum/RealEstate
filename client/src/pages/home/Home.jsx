import React from 'react'
import Banner from '../../components/banner/Banner'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Propertice from '../../components/propertice/Propertice'
import Propertice1 from '../../components/propertice1/Propertice1'
import PropertyList from '../../components/propertyList/PropertyList'
import PropertyList1 from '../../components/propertyList1/PropertyList1'
import TopHeader from '../../components/topHeader/TopHeader'
import "./home.css"

export default function Home() {
  return (
    <div className='home'>
        <div className="homeHeader">
            <TopHeader />
            <div className='lineHome'></div>
            <Header />
        </div>
        <Propertice />
        <Propertice1 />
        <PropertyList />
        <PropertyList1 />
        <Banner />
        <Footer />
    </div>
  )
}
