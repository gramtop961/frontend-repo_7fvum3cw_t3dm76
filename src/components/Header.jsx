import React from 'react';
import { Ship, Menu, Sparkles } from 'lucide-react';

function Header() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-gray-900">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow">
            <Ship size={18} />
          </span>
          <span className="tracking-tight">Harbor Stays</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#find" className="hover:text-gray-900 transition-colors">Find a stay</a>
          <a href="#partner" className="hover:text-gray-900 transition-colors">Partners</a>
          <a href="#concierge" className="hover:text-gray-900 transition-colors">AI Concierge</a>
          <a href="#gift" className="hover:text-gray-900 transition-colors">Gift cards</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:bg-gray-800">
            <Sparkles size={16} /> Explore
          </button>
          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
