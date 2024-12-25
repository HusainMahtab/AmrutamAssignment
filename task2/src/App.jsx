import { useState } from 'react'
import Welcom from './components/Welcom'
import DiscoverAyurveda from './components/DiscoverAyurveda'
import AyurvedicConsulatation from './components/AyurvedicConsulatation'
import BookConsulatation from './components/BookConsulatation'
import AyurvedicApproach from "./components/AyurvedicApproach"
import Stories from './components/Stories'
import MeetExperts from './components/MeetExperts'
import AmrutamApp from './components/AmrutamApp'
import Footer from './components/Footer'
import Header from './components/Mobile/Header'
import Welcome from './components/Mobile/Welcome'
import TermAndCondition from './components/Mobile/TermAndCondition'
import DiscoverAyurvedaMobile from './components/Mobile/DiscoverAyurvedaMobile'
import OurServicesMobile from './components/Mobile/OurServicesMobile'
import AyurvedicConsultationMobile from './components/Mobile/AyurvedicConsultationMobile'
import BookConsultationMobile from './components/Mobile/BookConsultationMobile'
import AyurvedicApproachMobile from './components/Mobile/AyurvedicApproachMobile'
import ServicesMobile from './components/Mobile/ServicesMobile'
import CustomersStoriesMobile from './components/Mobile/CustomersStoriesMobile'
import AyurvedaExpertsMobile from './components/Mobile/AyurvedaExpertsMobile'
import GetMobileApp from './components/Mobile/GetMobileApp'
import FooterMobile from './components/Mobile/FooterMobile'
function App() {
  return (
  <>
    {/* for mobile */}
    <Header/>
    <Welcome/>
    <TermAndCondition/>
    <DiscoverAyurvedaMobile/>
    <OurServicesMobile/>
    <AyurvedicConsultationMobile/>
    <BookConsultationMobile/>
    <AyurvedicApproachMobile/>
    <ServicesMobile/>
    <CustomersStoriesMobile/>
    <AyurvedaExpertsMobile/>
    <GetMobileApp/>
    <FooterMobile/>
    {/* for decktop */}
    <Welcom/>
    <DiscoverAyurveda/>
    <AyurvedicConsulatation/>
    <BookConsulatation/>
    <AyurvedicApproach/>
    <Stories/>
    <MeetExperts/>
    <AmrutamApp/>
    <Footer/>
  </>
  )
}

export default App
