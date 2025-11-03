import React, { useMemo } from 'react';
import { useState } from 'react';
import { Gift, MessageSquare, Search, Ship, Star, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const demoCabins = [
  {
    id: 'c1',
    title: 'Sunset Harbor Cabin',
    image: 'https://images.unsplash.com/photo-1705125489076-6e172c639303?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdW5zZXQlMjBIYXJib3IlMjBDYWJpbnxlbnwwfDB8fHwxNzYyMjAzMTA3fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    price: 240,
    location: 'Portofino, Italy',
    rating: 4.9,
  },
  {
    id: 'c2',
    title: 'Nordic Fjord Houseboat',
    image: 'https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1600&auto=format&fit=crop',
    price: 310,
    location: 'Bergen, Norway',
    rating: 4.8,
  },
  {
    id: 'c3',
    title: 'Lagoon Glass Pod',
    image: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop',
    price: 285,
    location: 'Bora Bora, French Polynesia',
    rating: 4.7,
  },
  {
    id: 'c4',
    title: 'Canal Boutique Barge',
    image: 'https://images.unsplash.com/photo-1505356822725-08ad25f3ffe4?q=80&w=1600&auto=format&fit=crop',
    price: 220,
    location: 'Amsterdam, Netherlands',
    rating: 4.6,
  },
];

function ExploreTabs({ onStayClick }) {
  const [tab, setTab] = useState('find-stay');

  const tabs = useMemo(
    () => [
      { key: 'find-stay', label: 'Find a Stay', icon: Search },
      { key: 'partner-signup', label: 'Become a Partner', icon: Ship },
      { key: 'concierge-chat', label: 'AI Concierge', icon: MessageSquare },
      { key: 'gift-card', label: 'Gift Card', icon: Gift },
    ],
    []
  );

  return (
    <section id="find" className="relative mx-auto max-w-6xl px-4 -mt-24">
      <div className="rounded-2xl border border-black/10 bg-white shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium border-b md:border-b-0 md:border-r transition-colors ${
                tab === key ? 'bg-gray-900 text-white' : 'bg-white hover:bg-gray-50 text-gray-800'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>

        <div className="p-5">
          <AnimatePresence mode="wait">
            {tab === 'find-stay' && (
              <motion.div
                key="find"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {demoCabins.map((cabin) => (
                    <button
                      key={cabin.id}
                      onClick={() => onStayClick(cabin)}
                      className="group text-left rounded-xl overflow-hidden border border-black/10 bg-white hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img src={cabin.image} alt={cabin.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-3">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-gray-900 leading-tight">{cabin.title}</h3>
                          <div className="inline-flex items-center gap-1 text-amber-600">
                            <Star size={14} className="fill-amber-400 text-amber-400" />
                            <span className="text-xs font-medium">{cabin.rating}</span>
                          </div>
                        </div>
                        <div className="mt-1 flex items-center gap-1 text-xs text-gray-600">
                          <MapPin size={14} /> {cabin.location}
                        </div>
                        <div className="mt-2 text-gray-900 font-semibold">${'{'}cabin.price{'}'} <span className="text-gray-500 font-normal">/ night</span></div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {tab === 'partner-signup' && (
              <motion.div
                key="partner"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                id="partner"
              >
                <div className="rounded-lg border border-dashed border-black/10 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">List your boat or cabin</h3>
                  <p className="mt-1 text-gray-600">Join our curated marketplace and reach travelers worldwide. We offer concierge onboarding and dynamic pricing tools.</p>
                  <div className="mt-4 flex gap-2">
                    <input type="email" placeholder="you@harbor.co" className="flex-1 rounded-full border border-black/10 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
                    <button className="rounded-full bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-gray-800">Request invite</button>
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'concierge-chat' && (
              <motion.div
                key="concierge"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                id="concierge"
              >
                <div className="rounded-lg border border-dashed border-black/10 p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Ask our AI concierge</h3>
                  <p className="mt-1 text-gray-600">Describe your perfect trip and get tailored stays instantly. Clicking suggestions will open details.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {['Romantic weekend', 'Family on a fjord', 'Work on water'].map((q) => (
                      <button
                        key={q}
                        onClick={() => onStayClick(demoCabins[Math.floor(Math.random() * demoCabins.length)])}
                        className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm hover:bg-gray-50"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {tab === 'gift-card' && (
              <motion.div
                key="gift"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                id="gift"
              >
                <div className="grid md:grid-cols-2 gap-5 items-center">
                  <div className="rounded-xl border border-black/10 p-6 bg-gradient-to-br from-orange-50 to-rose-50">
                    <h3 className="text-lg font-semibold text-gray-900">The Harbor Gift Card</h3>
                    <p className="mt-1 text-gray-600">Give unforgettable nights on the water. Digital delivery, no fees, never expires.</p>
                    <div className="mt-4 flex gap-2">
                      <button className="rounded-full bg-gray-900 text-white px-4 py-2 font-semibold hover:bg-gray-800">Buy now</button>
                      <button className="rounded-full border border-black/10 bg-white px-4 py-2 font-semibold hover:bg-gray-50">Learn more</button>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden border border-black/10">
                    <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Gift" className="w-full h-full object-cover" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default ExploreTabs;
