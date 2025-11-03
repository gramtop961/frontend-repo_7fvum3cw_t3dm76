import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, MapPin } from 'lucide-react';

function StayDetailSheet({ isOpen, onClose, cabin }) {
  return (
    <AnimatePresence>
      {isOpen && cabin ? (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            className="fixed right-0 top-0 h-full w-full md:w-[520px] bg-white z-50 shadow-2xl flex flex-col"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            role="dialog"
            aria-modal="true"
            aria-label="Stay details"
          >
            <div className="relative">
              <img src={cabin.image} alt={cabin.title} className="h-56 w-full object-cover" />
              <button
                onClick={onClose}
                className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-800 shadow"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-5 flex-1 overflow-y-auto">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-xl font-semibold text-gray-900">{cabin.title}</h3>
                <div className="inline-flex items-center gap-1 text-amber-600">
                  <Star size={16} className="fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{cabin.rating}</span>
                </div>
              </div>
              <div className="mt-1 flex items-center gap-2 text-gray-600 text-sm">
                <MapPin size={16} />
                <span>{cabin.location}</span>
              </div>
              <p className="mt-4 text-gray-700">
                Drift into serenity aboard this thoughtfully designed floating cabin. Enjoy sunrise decks, cozy interiors, and seamless access to nearby harbors.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-black/10 p-3">
                  <div className="text-xs text-gray-500">Nightly</div>
                  <div className="text-lg font-semibold text-gray-900">${'{'}cabin.price{'}'}<span className="text-sm font-normal text-gray-500">/night</span></div>
                </div>
                <div className="rounded-lg border border-black/10 p-3">
                  <div className="text-xs text-gray-500">Sleeps</div>
                  <div className="text-lg font-semibold text-gray-900">2–4</div>
                </div>
              </div>

              <button className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 font-semibold shadow hover:bg-gray-800">
                Book this stay
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default StayDetailSheet;
