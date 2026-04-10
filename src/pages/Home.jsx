import HeroSection from "../components/home/HeroSection";
import FeaturedBooks from "../components/home/FeaturedBooks";
import HowItWorks from "../components/home/HowItWorks";
import Testimonials from "../components/home/Testimonals";
import HomeBanner from "../components/home/HomeBanner";  // ✦ NEW

export default function Home() {
  return (
    <div>
      <HeroSection />
      {/* ✦ Genre marquee strip — inserted here */}
      <HomeBanner />
      <HowItWorks />
      <FeaturedBooks />
      <Testimonials />
    </div>
  );
}
