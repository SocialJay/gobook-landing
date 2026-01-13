import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

export default function IndexPage() {
  return (
    <div className="min-h-screen max-w-[998px] border-r border-l border-[#262626] max-md:px-4 w-[343px] sm:w-full mx-auto flex flex-col items-center max-sm:gap-16 ">
      <Navigation />

      <div className="flex-1 flex items-center justify-center">
        <HeroSection />
      </div>

      <Footer />
    </div>
  );
}
