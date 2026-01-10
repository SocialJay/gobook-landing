import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

export default function IndexPage() {
  return (
    <div className="h-screen max-w-[864px] max-md:px-4 w-full mx-auto flex flex-col max-sm:gap-12 justify-between">
      <Navigation />

      <div className="flex-1 flex items-center justify-center">
        <HeroSection />
      </div>

      <Footer />
    </div>
  );
}
