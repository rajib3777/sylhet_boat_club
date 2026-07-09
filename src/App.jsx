import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import Lenis from 'lenis'

import Layout from './components/layout/Layout'
import CustomCursor from './components/ui/CustomCursor'
import Preloader from './components/ui/Preloader'
import ScrollProgress from './components/ui/ScrollProgress'

import Home from './pages/Home'
import About from './pages/About'
import President from './pages/President'
import FoundingMembers from './pages/FoundingMembers'
import ECMembersPage from './pages/ECMembersPage'
import FacilitiesPage from './pages/FacilitiesPage'
import EventsPage from './pages/EventsPage'
import GalleryPage from './pages/GalleryPage'
import DiningPage from './pages/DiningPage'
import MembershipPage from './pages/MembershipPage'
import NoticePage from './pages/NoticePage'
import AffiliatedClubsPage from './pages/AffiliatedClubsPage'
import ContactPage from './pages/ContactPage'
import ReservationPage from './pages/ReservationPage'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <CustomCursor />
      <Preloader />
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="president" element={<President />} />
            <Route path="founding-members" element={<FoundingMembers />} />
            <Route path="ec-members" element={<ECMembersPage />} />
            <Route path="facilities" element={<FacilitiesPage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="dining" element={<DiningPage />} />
            <Route path="membership" element={<MembershipPage />} />
            <Route path="notice" element={<NoticePage />} />
            <Route path="affiliated-clubs" element={<AffiliatedClubsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="reservation" element={<ReservationPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
