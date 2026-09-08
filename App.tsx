import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competitions from './components/Competitions';
import PrizePool from './components/PrizePool';
import CallingOut from './components/CallingOut';
import Timeline from './components/Timeline';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Competitions />
        <PrizePool />
        <CallingOut />
        <Timeline />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
