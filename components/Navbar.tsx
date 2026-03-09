import React, { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'events', label: 'Events' },
    { id: 'press', label: 'Press' },
    { id: 'ai-lab', label: 'AI Modeling Lab' },
    { id: 'contact', label: 'Join Us' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 top-0 border-t-4 border-[#BB0000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <Terminal className="h-8 w-8 text-[#BB0000] mr-2" />
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter text-gray-900 leading-none">BMMSS</span>
                <span className="text-xs font-medium text-gray-500 tracking-wider">THE OHIO STATE UNIVERSITY</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  activeTab === item.id
                    ? 'text-[#BB0000] border-b-2 border-[#BB0000]'
                    : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                } px-1 pt-1 text-sm font-medium transition-colors duration-200 h-full flex items-center`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#BB0000]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  activeTab === item.id
                    ? 'bg-red-50 text-[#BB0000]'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } block w-full text-left px-3 py-4 rounded-md text-base font-medium`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;