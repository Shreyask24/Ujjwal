import { Routes, Route, BrowserRouter } from "react-router-dom"

import Home from "./screens/Home"
import About from "./screens/About"
import Services from "./screens/Services"
import TrunkyExecution from "./screens/TrunkyExecution"
import Carrer from "./screens/Carrer"
import Gallery from "./screens/Gallery"
import Contact from "./screens/Contact"
import SafetyServices from "./screens/SafetyServices"

import './index.css'
import PrivacyPolicy from "./screens/PrivacyPolicy"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<TrunkyExecution />} />
          <Route path="safety-services" element={<SafetyServices />} />
          <Route path="career" element={<Carrer />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
