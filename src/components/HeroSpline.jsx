import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

function HeroSpline() {
  return (
    <section className="relative h-[70vh] md:h-[78vh] w-full overflow-hidden" aria-label="Immersive 3D Hero">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-16 md:pt-24">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Discover exceptional stays on the water
          </h1>
          <p className="mt-4 text-gray-700 md:text-lg">
            Curated floating cabins, boutique houseboats, and coastal escapes. Book with confidence and chat with our AI concierge.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#find" className="inline-flex items-center justify-center gap-2 rounded-full bg-gray-900 text-white px-6 py-3 font-semibold shadow hover:bg-gray-800">
              Find a stay <ArrowRight size={18} />
            </a>
            <a href="#partner" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 font-medium text-gray-900 hover:bg-gray-50">
              Become a partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSpline;
