import React from 'react'
import { HeroSection,HeroCard, Categories, FoundSection,BuyFromFactory,TradeWithConfidence, Matches, DiscountsAndServices, Ready, EmpoweringCompanies } from '../components/HomePage'

const Home = () => {
  return (
    <div className=''>
      <HeroSection/>
      <HeroCard/>
      <Categories/>
      <FoundSection/>
      <BuyFromFactory/>
      <TradeWithConfidence/>
      <Matches/>
      <DiscountsAndServices/>
      <Ready/>
      <EmpoweringCompanies/>
    </div>
  )
}

export default Home