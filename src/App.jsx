
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
      </Routes>
      <Footer />
    </>
  )
}

export default App
