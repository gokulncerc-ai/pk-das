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
import Nephrology from './Pages/Departments/SuperSpeciality-Section/Nephrology/Nephrology.jsx';
import NeuroSurgery from './Pages/Departments/SuperSpeciality-Section/NeuroSurgery/NeuroSurgery.jsx';
import Gastroenterology from './Pages/Departments/SuperSpeciality-Section/Gastroenterology/Gastroenterology.jsx';
import Urology from './Pages/Departments/SuperSpeciality-Section/UROLOGY/UROLOGY.jsx';
import Neurology from './Pages/Departments/SuperSpeciality-Section/Neurology/Neurology.jsx';
import Pediatrics from './Pages/GeneralDepartments/Pediatrics/Pediatrics.jsx';
import ENT from './Pages/GeneralDepartments/ENT/ENT.jsx';
import Dermatology from './Pages/GeneralDepartments/Dermatology/Dermatology.jsx';
import Psychiatry from './Pages/GeneralDepartments/Psychiatry/Psychiatry.jsx';
import Pulmonology from './Pages/GeneralDepartments/Pulmonology/Pulmonology.jsx';
import Radiology from './Pages/GeneralDepartments/Radiology/Radiology.jsx';
import Dentistry from './Pages/GeneralDepartments/Dentistry/Dentistry.jsx';
import Physiotherapy from './Pages/GeneralDepartments/Physiotherapy/Physiotherapy.jsx';
import BloodBank from './Pages/GeneralDepartments/BloodBank/BloodBank.jsx';

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
        <Route path='/general-department/ENT' element={<ENT />} />
        <Route path='/general-department/dermatology' element={<Dermatology />} />
        <Route path='/general-department/psychiatry' element={<Psychiatry />} />
        <Route path='/general-department/Pulmonology' element={<Pulmonology />} />
        <Route path='/general-department/Radiology' element={<Radiology />} />
        <Route path='/general-department/Dentistry' element={<Dentistry />} />
        <Route path='/general-department/physiotherapy' element={<Physiotherapy />} />
        <Route path='/general-department/blood-bank' element={<BloodBank />} />
        {/* ------------department route------------- */}
        <Route path='/Cardiology' element={<Cardiology />} />
        <Route path='/Nephrology' element={<Nephrology />} />
        <Route path='/neuro-surgery' element={<NeuroSurgery />} />
        <Route path='/gastroenterology' element={<Gastroenterology />} />
        <Route path='/urology' element={<Urology />} />
        <Route path='/Neurology' element={<Neurology />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App