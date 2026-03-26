import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import History from './pages/History'
import Facilities from './pages/Facilities'
import Menus from './pages/Menus'
import BarMenu from './pages/BarMenu'
import SeniorMenu from './pages/SeniorMenu'
import SetMenu from './pages/SetMenu'
import FunctionsMenu from './pages/FunctionsMenu'
import ChristmasMenuPage from './pages/ChristmasMenuPage'
import AfternoonTea from './pages/AfternoonTea'
import OutsideCatering from './pages/OutsideCatering'
import Children from './pages/Children'
import Christmas from './pages/Christmas'
import Events from './pages/Events'
import Team from './pages/Team'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/menus/bar-restaurant" element={<BarMenu />} />
        <Route path="/menus/senior" element={<SeniorMenu />} />
        <Route path="/menus/set-menu" element={<SetMenu />} />
        <Route path="/menus/functions" element={<FunctionsMenu />} />
        <Route path="/menus/christmas" element={<ChristmasMenuPage />} />
        <Route path="/menus/afternoon-tea" element={<AfternoonTea />} />
        <Route path="/outside-catering" element={<OutsideCatering />} />
        <Route path="/children" element={<Children />} />
        <Route path="/christmas" element={<Christmas />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
