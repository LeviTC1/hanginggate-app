import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Book from './pages/Book'
import Admin from './pages/Admin'

export default function App() {
  const location = useLocation()
  const MotionDiv = motion.div

  const pageVariants = {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  }

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <MotionDiv
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-[calc(100svh-78px)]"
        >
          <Routes location={location}>
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
            <Route path="/book" element={<Book />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </MotionDiv>
      </AnimatePresence>
    </Layout>
  )
}
