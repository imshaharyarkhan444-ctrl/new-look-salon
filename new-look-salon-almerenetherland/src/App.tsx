import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Prices from "./components/Prices";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Prices />
        <Reviews />
        <Gallery />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
