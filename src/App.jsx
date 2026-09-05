import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import LandingPage from './pages/LandingPage.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/xeobit" element={<Product />} />
      </Routes>
      <Footer />
    </>
  )
}
