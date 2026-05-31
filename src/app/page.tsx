import Header from "../components/Header";

import LandingHero from "../components/landing/LandingHero";
import LandingWhoWeAre from "../components/landing/LandingWhoWeAre";
import LandingWhatWeDo from "../components/landing/LandingWhatWeDo";
import LandingWhyChoose from "../components/landing/LandingWhyChoose";
import LandingOperationNetwork from "../components/landing/LandingOperationNetwork";

export default function Home() {
  return (
    <main className="page-shell">
      <Header />
      <LandingHero />
      <LandingWhoWeAre />
      <LandingWhatWeDo />
      <LandingWhyChoose />
      <LandingOperationNetwork />
    </main>
  );
}