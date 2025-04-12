// Main App with routes and Firebase
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import DashboardHome from './pages/DashboardHome';
import DesignServices from './pages/DesignServices';
import Templates from './pages/Templates';
import Courses from './pages/Courses';
import EBooks from './pages/EBooks';
import AudioBooks from './pages/AudioBooks';
import RequestZone from './pages/RequestZone';
import Ratings from './pages/Ratings';
import Certificates from './pages/Certificates';
import MerchandiseShop from './pages/MerchandiseShop';
import Profile from './pages/Profile';
import AffiliateProgram from './pages/AffiliateProgram';
import firebaseApp from './firebase';

function App() {
  return (
    <Router>
      <div className='flex min-h-screen'>
        <Sidebar />
        <main className='flex-grow p-4 bg-gray-50'>
          <Routes>
            <Route path='/' element={<DashboardHome />} />
            <Route path='/design-services' element={<DesignServices />} />
            <Route path='/templates' element={<Templates />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/ebooks' element={<EBooks />} />
            <Route path='/audiobooks' element={<AudioBooks />} />
            <Route path='/request-zone' element={<RequestZone />} />
            <Route path='/ratings' element={<Ratings />} />
            <Route path='/certificates' element={<Certificates />} />
            <Route path='/merchandise' element={<MerchandiseShop />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/affiliate' element={<AffiliateProgram />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;