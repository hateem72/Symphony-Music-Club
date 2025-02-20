import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Mentors from './components/Mentors';
import Team from './components/Team';
import OurPerformance from './components/OurPerformance';
import OurPhotos from './components/OurPhotos'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="mentors"><Mentors /></div>
      <div id="team"><Team /></div>
      <div id="photos"><OurPhotos /></div>
      <div id="performances"><OurPerformance /></div>
      <div id="footer"><Footer /></div>
    </div>
  );
}

export default App;