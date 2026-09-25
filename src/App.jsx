import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import MeetTheCows from './pages/MeetTheCows';
import CowProfile from './pages/CowProfile';
import TeamProfile from './pages/TeamProfile';
import CoreTeam from './pages/CoreTeam';
import Volunteers from './pages/Volunteers';
import Support from './pages/Support';
import Community from './pages/Community';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="relative font-sans text-forest-dark min-h-screen">
      {/* ── Fixed Sanctuary Aerial Background ── */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/sanctuary-aerial-bg.jpg')",
          }}
        />
        {/* Soft, light translucent veil to ensure text contrast while keeping the image vibrant and clear */}
        <div className="absolute inset-0 bg-white/35" />
      </div>

      <ScrollToTop />
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/meet-the-cows" element={<MeetTheCows />} />
          <Route path="/meet-the-cows/:id" element={<CowProfile />} />
          <Route path="/core-team" element={<CoreTeam />} />
          <Route path="/team/:id" element={<TeamProfile />} />
          <Route path="/volunteers" element={<Volunteers />} />
          <Route path="/volunteers/:id" element={<TeamProfile />} />
          {/* Visits are paused while the gaushala is rebuilt — see VISITS_OPEN in data/index.js */}
          <Route path="/visit" element={<Navigate to="/volunteers" replace />} />
          <Route path="/support" element={<Support />} />
          <Route path="/community" element={<Community />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
