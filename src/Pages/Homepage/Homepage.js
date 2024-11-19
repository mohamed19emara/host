import React from 'react'
import HostingOptionsSection from '../../components/HostingOptions/HostingOptions'
import PlanningSection from '../../components/PlanningSection/PlanningSection'
import GetStarted from '../../components/GetStarted/GetStarted'
import GreenGeeksSection from '../../components/GreenGeeksSection/GreenGeeksSection'
import ImageSection from '../../components/ImageSection/ImageSection'

const Homepage = () => {
  return (
    <div>
       <ImageSection />
        <GreenGeeksSection/>
        <HostingOptionsSection/>
        <PlanningSection/>
        <GetStarted />
    </div>
  )
}

export default Homepage