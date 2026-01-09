import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";

export default function IndexPage() {
    return(
      <div className="min-h-screen md:gap-0 gap-16 flex flex-col justify-between items-center">
        <div>
            <Navigation />
        </div>
        <div className="flex-1 flex items-center justify-center">
            <HeroSection />
        </div>
        <div>
            <Footer />
        </div>
      </div>
    )
}