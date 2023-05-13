import Home from "./screens/Home"
import PrivacyPolicy from "./components/PrivacyPolicy"
import { Route, Routes } from "react-router-dom"
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
