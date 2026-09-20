import HeroSection from './HeroSection';
import MeetTheCows from './MeetTheCows';
import FounderMessage from './FounderMessage';
import GalleryPreview from './GalleryPreview';
import VolunteerSpotlight from './VolunteerSpotlight';
import BuildSanctuary from './BuildSanctuary';
import SupportDonate from './SupportDonate';

// Homepage kept deliberately clean and focused — an immersive sanctuary
// experience, not a traditional NGO site.
export default function Home() {
  return (
    <>
      {/* 1 — Hero */}
      <HeroSection />

      {/* 2 — Animal Stories */}
      <MeetTheCows />

      {/* 3 — Founder Message */}
      <FounderMessage />

      {/* 4 — Gallery Preview */}
      <GalleryPreview />

      {/* 5 — Volunteer Spotlight */}
      <VolunteerSpotlight />

      {/* 6 — Build Krishna Surabhi */}
      <BuildSanctuary />

      {/* 7 — Real Work / Get Involved */}
      <SupportDonate />
    </>
  );
}
