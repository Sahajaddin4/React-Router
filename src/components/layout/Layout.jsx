import React from 'react';
import Navbar from './navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-300">
      <header className="w-full">
        <Navbar />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
