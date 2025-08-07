import React from 'react'

const Footer = forwardRef(({ onAboutClick }, ref) => {
  return (
    <>
    <footer className="bg-[#2e2e2e] text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        {/* Logo and Description */}
        <div>
          <h1 className="text-xl font-bold text-amber-500">BrewCoffee</h1>
          <p className="mt-2 text-gray-300">
            Brewing the perfect cup for every moment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="font-semibold text-white mb-2">Quick Links</h2>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-amber-500">Home</a></li>
            <li><a href="#" className="hover:text-amber-500">Menu</a></li>
            <li><a href="#" className="hover:text-amber-500">About</a></li>
            <li><a href="#" className="hover:text-amber-500">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-semibold text-white mb-2">Contact</h2>
          <p className="text-gray-400">📍 Phnom Penh, Cambodia</p>
          <p className="text-gray-400">📞 +855 96 888 8888</p>
          <p className="text-gray-400">✉️ info@brewcoffee.com</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} BrewCoffee. All rights reserved.
      </div>
    </footer>
    </>
  )
})

export default Footer