import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Reservation from '@/pages/Reservation';
import Medias from '@/pages/Medias';
import Presse from '@/pages/Presse';
import Photos from '@/pages/Photos';
import Videos from '@/pages/Videos';
// Articles component is kept but not routed
// import Articles from '@/pages/Articles'; 
import Domaine from '@/pages/Domaine';
import DetentionPreventive from '@/pages/DetentionPreventive';
import CourAssises from '@/pages/CourAssises';
import TribunalPolice from '@/pages/TribunalPolice';
import TribunalCorrectionnel from '@/pages/TribunalCorrectionnel';
import Chatbot from '@/components/Chatbot';
import WhatsAppButton from '@/components/WhatsAppButton'; // Import WhatsAppButton

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/medias" element={<Medias />} />
            <Route path="/medias/presse" element={<Presse />} />
            <Route path="/medias/photos" element={<Photos />} />
            <Route path="/medias/videos" element={<Videos />} />
            {/* Route for Articles removed */}
            {/* <Route path="/medias/articles" element={<Articles />} /> */}
            <Route path="/domaine" element={<Domaine />} />
            <Route path="/domaine/detention-preventive" element={<DetentionPreventive />} />
            <Route path="/domaine/cour-assises" element={<CourAssises />} />
            <Route path="/domaine/tribunal-police" element={<TribunalPolice />} />
            <Route path="/domaine/tribunal-correctionnel" element={<TribunalCorrectionnel />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
        <WhatsAppButton /> {/* Add WhatsAppButton component here */}
        <Toaster />
      </div>
    </Router>
  );
}

export default App;