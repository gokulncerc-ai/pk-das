
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage/Homepage.jsx'
import GeneralMedicine from './Pages/General-medicine/GeneralMedicine.jsx'
import AboutPkDas from './Pages/About-PkDas/AboutPkDas.jsx'
import TheTrustees from './Pages/The-Trustess/TheTrustees.jsx'
import Founder from './Pages/Founder/Founder.jsx'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Cta from './Components/Cta-Buttons/Cta.jsx'
import ChairmanMessage from './Pages/Chairman-Message/ChairmanMessage.jsx'
import CeoMessage from './Pages/Ceo-Message/CeoMessage.jsx'
import TrusteeMessage from './Pages/Trustee-Message/TrusteeMessage.jsx'
import DirectorsMessage from './Pages/Directors-Message/DirectorsMessage.jsx'

function App() {

  return (
    <>
      <Header />
      <Cta />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/General-Medicine' element={<GeneralMedicine />} />
        <Route path='/About-P.K-Das' element={<AboutPkDas />} />
        <Route path='/The-Trust' element={<TheTrustees />} />
        <Route path='/Founder' element={<Founder />} />
        <Route path='/Chairman-Message' element={<ChairmanMessage />} />
        <Route path='/Ceo-Message' element={<CeoMessage />} />
        <Route path='/Trustee-Message' element={<TrusteeMessage />} />
        <Route path='/Director-Message' element={<DirectorsMessage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
