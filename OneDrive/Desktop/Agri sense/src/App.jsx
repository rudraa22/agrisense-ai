import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DiseaseDetector from './pages/DiseaseDetector'
import WeatherAdvisor from './pages/WeatherAdvisor'
import MandiMarket from './pages/MandiMarket'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/disease" element={<DiseaseDetector />} />
        <Route path="/weather" element={<WeatherAdvisor />} />
        <Route path="/market" element={<MandiMarket />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App