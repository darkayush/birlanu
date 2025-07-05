import LenisScroll from './Components/LenisScroll';
import Navbar from './Components/Navbar';
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TheCKABirlaGroup from './Pages/CorporateOverview/TheCKABirlaGroup';
import AboutBirlaNu from './Pages/CorporateOverview/AboutBirlaNu';
import ChairmansMessage from './Pages/CorporateOverview/ChairmansMessage';
import MDCEOsMessage from './Pages/CorporateOverview/MDCEOsMessage';
import FinancialHighlights from './Pages/CorporateOverview/FinancialHighlights';
import PortfolioOfConsumerOfferings from './Pages/CorporateOverview/PortfolioOfConsumerOfferings';
import IntentionalInnovation from './Pages/CorporateOverview/IntentionalInnovation';
import TechnologyAndDigital from './Pages/CorporateOverview/TechnologyAndDigital';
import Sustainability from './Pages/CorporateOverview/Sustainability';
import HumanCapital from './Pages/CorporateOverview/HumanCapital';
import BoardOfDirectors from './Pages/CorporateOverview/BoardOfDirectors';
import AwardsAndAchievements from './Pages/CorporateOverview/AwardsAndAchievements';
import CorporateInformation from './Pages/CorporateOverview/CorporateInformation';
import Footer from './Components/Footer';
import Home from './Pages/CorporateOverview/Home';
import BuildYourWorld from './Pages/CorporateOverview/BuildYourWorld';

const App = () => {
  return (
    <LenisScroll>
      <div>
        <BrowserRouter>
          <Navbar />
          <div className='flex-grow md:mt-16 mt-15'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/build_your_world' element={<BuildYourWorld/>}/>
              <Route path="/the_ckabirla_group" element={<TheCKABirlaGroup />} />
              <Route path="/about_birlanu" element={<AboutBirlaNu />} />
              <Route path="/chairmans_message" element={<ChairmansMessage />} />
              <Route path="/md_ceos_message" element={<MDCEOsMessage />} />
              <Route path="/financial_highlights" element={<FinancialHighlights />} />
              <Route path="/portfolio_of_consumer_offerings" element={<PortfolioOfConsumerOfferings />} />
              <Route path="/intentional_innovation" element={<IntentionalInnovation />} />
              <Route path="/technology_digital" element={<TechnologyAndDigital />} />
              <Route path="/sustainability" element={<Sustainability />} />
              <Route path="/human_capital" element={<HumanCapital />} />
              <Route path="/board_of_directors" element={<BoardOfDirectors />} />
              <Route path="/awards_and_achievements" element={<AwardsAndAchievements />} />
              <Route path="/corporate_information" element={<CorporateInformation />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </div>
    </LenisScroll>
  )
}

export default App