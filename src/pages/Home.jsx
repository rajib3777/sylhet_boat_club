import Hero from '../components/sections/Hero'
import NoticeTicker from '../components/sections/NoticeTicker'
import StatsBar from '../components/sections/StatsBar'
import OurStory from '../components/sections/OurStory'
import Facilities from '../components/sections/Facilities'
import LocationAdvantage from '../components/sections/LocationAdvantage'
import PresidentMessage from '../components/sections/PresidentMessage'
import ECMembers from '../components/sections/ECMembers'
import Events from '../components/sections/Events'
import GalleryShowcase from '../components/sections/GalleryShowcase'
import AffiliatedClubs from '../components/sections/AffiliatedClubs'
import Testimonials from '../components/sections/Testimonials'
import MembershipCTA from '../components/sections/MembershipCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <NoticeTicker />
      <StatsBar />
      <OurStory />
      <Facilities />
      <LocationAdvantage />
      <PresidentMessage />
      <ECMembers />
      <Events />
      <GalleryShowcase />
      <AffiliatedClubs />
      <Testimonials />
      <MembershipCTA />
    </>
  )
}
