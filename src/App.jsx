import React, { useState } from 'react';
import Header from './components/Header';
import HeroSpline from './components/HeroSpline';
import ExploreTabs from './components/ExploreTabs';
import StayDetailSheet from './components/StayDetailSheet';

function App() {
  const [selectedCabin, setSelectedCabin] = useState(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleStayClick = (cabin) => {
    setSelectedCabin(cabin);
    setIsSheetOpen(true);
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false);
    setSelectedCabin(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-1">
        <HeroSpline />
        <ExploreTabs onStayClick={handleStayClick} />

        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title: 'Secure booking',
              desc: 'Pay safely with instant confirmations for every stay.',
            }, {
              title: 'Curated only',
              desc: 'We hand-pick unique cabins and boats for quality.',
            }, {
              title: 'Concierge 24/7',
              desc: 'Chat with our AI or humans for anything you need.',
            }].map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/10 p-6 bg-gradient-to-br from-gray-50 to-white">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="mt-1 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-black/5 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Harbor Stays. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>

      {selectedCabin && (
        <StayDetailSheet isOpen={isSheetOpen} onClose={handleSheetClose} cabin={selectedCabin} />
      )}
    </div>
  );
}

export default App;
