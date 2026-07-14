
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/HomePage/Homepage.jsx'
import GeneralMedicine from './Pages/General-medicine/GeneralMedicine.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/General-Medicine' element={<GeneralMedicine />} />
      </Routes>

    </>
  )
}

export default App
