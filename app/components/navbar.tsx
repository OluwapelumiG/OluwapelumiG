'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div>
      <nav className="flex items-center bg-gray-100 justify-between p-4 px-8 sm:px-20">
        <div className="text-2xl font-bold text-black hover:text-blue-500 transition-colors duration-300">
          {'{ GAPS }'}
        </div>
        <div className="flex space-x-4">
          <Link href="/" passHref legacyBehavior>
            <a 
              className={`flex items-center p-2 rounded-lg transition-colors duration-300 
                ${isActive('/') ? 'bg-blue-500 text-white' : 'bg-muted text-black hover:bg-blue-500 hover:text-white'}`}
            >
              <img alt="home-icon" src="https://openui.fly.dev/openui/24x24.svg?text=🏠" />
              <span className="ml-2">Home</span>
            </a>
          </Link>

          <Link href="/blog" passHref legacyBehavior>
            <a 
              className={`flex items-center p-2 rounded-lg transition-colors duration-300 
                ${isActive('/blog') ? 'bg-blue-500 text-white' : 'bg-muted text-black hover:bg-blue-500 hover:text-white'}`}
            >
              <img alt="resume-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📄" />
              <span className="ml-2">Blog</span>
            </a>
          </Link>

          <Link href="/work" passHref legacyBehavior>
            <a 
              className={`flex items-center p-2 rounded-lg transition-colors duration-300 
                ${isActive('/work') ? 'bg-blue-500 text-white' : 'bg-muted text-black hover:bg-blue-500 hover:text-white'}`}
            >
              <img alt="work-icon" src="https://openui.fly.dev/openui/24x24.svg?text=💼" />
              <span className="ml-2">Work</span>
            </a>
          </Link>

          <Link href="/contact" passHref legacyBehavior>
            <a 
              className={`flex items-center p-2 rounded-lg transition-colors duration-300 
                ${isActive('/contact') ? 'bg-blue-500 text-white' : 'bg-muted text-black hover:bg-blue-500 hover:text-white'}`}
            >
              <img alt="contact-icon" src="https://openui.fly.dev/openui/24x24.svg?text=📞" />
              <span className="ml-2">Contact</span>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  )
}
