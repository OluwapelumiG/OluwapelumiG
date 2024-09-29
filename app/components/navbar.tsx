'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string): boolean => pathname === path;

  const navItems = [
    { href: '/', text: 'Home', icon: '🏠' },
    { href: '/blog', text: 'Blog', icon: '📄' },
    { href: '/work', text: 'Work', icon: '💼' },
    { href: '/contact', text: 'Contact', icon: '📞' },
  ];

  return (
    <nav className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 px-4 md:px-0">
            <Image src="/images/gaps.png" alt="{ GAPS }" width={150} height={150} className="rounded-xl hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ href, text, icon }) => (
                <Link key={href} href={href} passHref legacyBehavior>
                  <a 
                    className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 
                      ${isActive(href) ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}
                  >
                    <img alt={`${text.toLowerCase()}-icon`} src={`https://openui.fly.dev/openui/24x24.svg?text=${icon}`} className="mr-2" />
                    {text}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ href, text, icon }) => (
              <Link key={href} href={href} passHref legacyBehavior>
                <a 
                  className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 
                    ${isActive(href) ? 'bg-blue-500 text-white' : 'text-black hover:bg-blue-500 hover:text-white'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img alt={`${text.toLowerCase()}-icon`} src={`https://openui.fly.dev/openui/24x24.svg?text=${icon}`} className="mr-2" />
                  {text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
