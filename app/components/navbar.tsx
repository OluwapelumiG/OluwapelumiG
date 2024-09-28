'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string): boolean => pathname === path;

  return (
    <div>
      <nav className="flex items-center bg-gray-100 justify-between p-4 px-8 sm:px-20">
        <div className="text-2xl font-bold text-black hover:text-blue-500 transition-colors duration-300">
          {'{ GAPS }'}
        </div>
        <div className="flex space-x-4">
          {[
            { href: '/', text: 'Home', icon: '🏠' },
            { href: '/blog', text: 'Blog', icon: '📄' },
            { href: '/work', text: 'Work', icon: '💼' },
            { href: '/contact', text: 'Contact', icon: '📞' },
          ].map(({ href, text, icon }) => (
            <Link key={href} href={href} passHref legacyBehavior>
              <a 
                className={`flex items-center p-2 rounded-lg transition-colors duration-300 
                  ${isActive(href) ? 'bg-blue-500 text-white' : 'bg-muted text-black hover:bg-blue-500 hover:text-white'}`}
              >
                <img alt={`${text.toLowerCase()}-icon`} src={`https://openui.fly.dev/openui/24x24.svg?text=${icon}`} />
                <span className="ml-2">{text}</span>
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}
