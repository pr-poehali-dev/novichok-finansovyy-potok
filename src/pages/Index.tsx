import HeroSection from "./components/HeroSection";
import StrategySection from "./components/StrategySection";
import AuthorSection from "./components/AuthorSection";
import ConsultationSection from "./components/ConsultationSection";

export default function Index() {
  return (
    <div className="font-montserrat bg-white text-black overflow-x-hidden">
      <HeroSection />
      <StrategySection />
      <AuthorSection />
      <ConsultationSection />
    </div>
  );
}
