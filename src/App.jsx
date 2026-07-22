import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage/Homepage.jsx'
import GeneralMedicine from './Pages/GeneralDepartments/General-medicine/GeneralMedicine.jsx';
import AboutPkDas from './Pages/About-PkDas/AboutPkDas.jsx'
import TheTrustees from './Pages/The-Trustess/TheTrustees.jsx'
import Founder from './Pages/Founder/Founder.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Cta from './Components/Cta-Buttons/Cta.jsx'
import ChairmanMessage from './Pages/Chairman-Message/ChairmanMessage.jsx';
import CeoMessage from './Pages/Ceo-Message/CeoMessage.jsx';
import TrusteeMessage from './Pages/Trustee-Message/TrusteeMessage.jsx';
import AwardsRecognition from './Pages/AwardsRecognition/AwardsRecognition.jsx';
import DirectorsMessage from './Pages/Directors-Message/DirectorsMessage.jsx';
import SocialResponsibility from "./Pages/Social-Responsibility/SocialResponsibility.jsx";
import Infrastructure from './Pages/Infrastructure/Infrastructure.jsx';
import GeneralSurgery from './Pages/GeneralDepartments/General-Surgery/GeneralSurgery.jsx';
import Orthopedics from './Pages/GeneralDepartments/Orthopedics/Orthopedics.jsx';
import Cardiology from './Pages/Departments/SuperSpeciality-Section/Cardiology/Cardiology.jsx';
import Neurology from './Pages/Departments/SuperSpeciality-Section/Neurology/Neurology.jsx';
import Pediatrics from './Pages/GeneralDepartments/Pediatrics/Pediatrics.jsx';

function App() {
  return (
    <>
      <Header />
      <Cta />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/general-department/general-medicine" element={<GeneralMedicine />} />
        <Route path='/About-P.K-Das' element={<AboutPkDas />} />
        <Route path='/The-Trust' element={<TheTrustees />} />
        <Route path='/Founder' element={<Founder />} />
        <Route path='/Chairman-Message' element={<ChairmanMessage />} />
        <Route path='/Ceo-Message' element={<CeoMessage />} />
        <Route path='/Trustee-Message' element={<TrusteeMessage />} />
        <Route path='/Director-Message' element={<DirectorsMessage />} />
        <Route path='/Social-Responsibility' element={<SocialResponsibility />} />
        <Route path='/Awards-Recognition' element={<AwardsRecognition />} />
        <Route path='/Infrastructure' element={<Infrastructure />} />
        <Route path='/general-department/general-surgery' element={<GeneralSurgery />} />
        <Route path='/general-department/orthopedics' element={<Orthopedics />} />
        <Route path='/general-department/pediatrics' element={<Pediatrics />} />

        {/* ------------department route------------- */}
        <Route path='/Cardiology' element={<Cardiology />} />
        <Route path='/Neurology' element={<Neurology />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App