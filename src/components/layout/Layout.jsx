import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from '../ui/BackToTop'

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(10, 22, 40, 0.95)',
            color: '#fff',
            border: '1px solid rgba(201, 168, 76, 0.3)',
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.8rem',
          },
        }}
      />
    </>
  )
}
