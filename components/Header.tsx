'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Separator } from './ui/separator';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    {
      name: "Programs",
      href: "/programs",
      sublinks: [
        { name: "New Muslim Classes", href: "/new-muslim-classes" },
        { name: "Intro to Islam", href: "/intro-to-islam" },
        { name: "Madrassah", href: "/madrassa" },
        { name: "Friday Youth Nights", href: "/fri-youth-nights" },
      ],
    },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Announcements", href: "/announcements" },
    { name: "Donate", href: "/donate" },
    { name: "Events Calendar", href: "/events" },
  ];
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mosque Name */}
        <div className="py-2 border-b">
          <h1 className="text-2xl font-bold text-emerald-700">Masjid Taqwa</h1>
        </div>

        {/* Navigation */}
        <nav className="py-4">
          <div className="flex items-center justify-between">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex md:space-x-6 ">
              {navigation.map((item) => (
                <div className="relative group">
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-emerald-600 transition-colors cursor-pointer flex">
                    {item.name}
                    {item?.sublinks && <ChevronDown />}
                  </Link>
                  <div className="hidden group-hover:flex flex-col z-10 absolute pt-2 bg-black/30 whitespace-nowrap">
                    {item?.sublinks &&
                      item?.sublinks.map((subitem) => (
                        <>
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="text-white hover:text-emerald-600 hover:font-bold hover:bg-white transition-colors p-2">
                            {subitem.name}
                          </Link>
                          <Separator />
                        </>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-2">
              {navigation.map((item) => (
                <div className="relative group">
                  <Link
                    key={item.name}
                    href={item.href}
                    className="py-2 text-gray-600 hover:text-emerald-600 transition-colors flex"
                    onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                    {item?.sublinks && <ChevronRight />}
                  </Link>
                  <div className="hidden group-hover:block z-10 absolute pt-2 left-24 top-0 bg-black/30 whitespace-nowrap">
                    {item?.sublinks &&
                      item?.sublinks.map((subitem) => (
                        <>
                          <Link
                            key={subitem.name}
                            href={subitem.href}
                            className="text-white hover:text-emerald-600 hover:font-bold hover:bg-white transition-colors p-2">
                            {subitem.name}
                          </Link>
                          <Separator />
                        </>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;