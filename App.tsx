import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import InsightGenerator from './components/InsightGenerator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <InsightGenerator />
      
      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6 text-center">
           <p className="text-gray-400 uppercase tracking-widest text-sm font-semibold mb-8">Trusted by Global Financial Institutions</p>
           <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text placeholders for logos */}
             <div className="h-8 font-bold text-2xl text-gray-800 flex items-center gap-2"><span className="w-6 h-6 bg-blue-600 rounded-sm"></span> CitiBank</div>
             <div className="h-8 font-bold text-2xl text-gray-800 italic flex items-center gap-2"><span className="w-6 h-6 bg-red-600 rounded-full"></span> HSBC</div>
             <div className="h-8 font-bold text-2xl text-gray-800 tracking-tighter flex items-center gap-2"><span className="w-6 h-6 bg-green-600 rounded-tr-xl"></span> BNP Paribas</div>
             <div className="h-8 font-bold text-2xl text-gray-800 font-serif flex items-center gap-2"><span className="w-6 h-6 bg-black rounded-lg"></span> BlackRock</div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;