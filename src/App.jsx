import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import OurHistoryPage from './pages/OurHistoryPage';
import MissionVisionPage from './pages/MissionVisionPage';
import OurBeliefsPage from './pages/OurBeliefsPage';
import OurStructurePage from './pages/OurStructurePage';
import MinistryPage from './pages/MinistryPage';
import EventsPage from './pages/EventsPage';
import SermonsPage from './pages/SermonsPage';
import GivingPage from './pages/GivingPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/our-history" element={<OurHistoryPage />} />
            <Route path="/mission-vision" element={<MissionVisionPage />} />
            <Route path="/our-beliefs" element={<OurBeliefsPage />} />
            <Route path="/our-structure" element={<OurStructurePage />} />
            <Route path="/ministries" element={<MinistryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/sermons" element={<SermonsPage />} />
            <Route path="/giving" element={<GivingPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;