
import './App.css';
import Navbar from './components/Navbar';
import './input.css'
import Hero from './components/hero';
import Accommodations from './components/accommodation';
import PopularCities from './components/popularcities';
import StudentReviews from './components/studentreviews';
import BookingFeatures from './components/bookingfeatures';
import ReferralProgram from './components/referealprogram';
import BookingSteps from './components/bookingsteps';
import Footer from './components/footer';
import StatsSection from './components/statesection';
import AccommodationComponent from './components/pages/AccommodationComponent';
import { popularCitiesData } from './components/data/popularCitiesData';
import { topUniversitiesData } from './components/data/topUniversitiesData';
import { globalPropertiesData } from './components/data/globalPropertiesData';

function App() {
  return (
    
    <>
    <Navbar/>
    <Hero/>
    
    <Accommodations/>
    <PopularCities/>
    <AccommodationComponent {...popularCitiesData} />
      <AccommodationComponent {...topUniversitiesData} />
      <AccommodationComponent {...globalPropertiesData} />
    <StatsSection/>
    <StudentReviews/>
    <BookingFeatures/>
    <ReferralProgram/>
    <BookingSteps/>
    <Footer/>

    
    </>
  );
}

export default App;
