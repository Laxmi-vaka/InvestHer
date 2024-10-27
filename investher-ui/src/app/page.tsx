"use client";
import Link from "next/link";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid"; // Import profile icon

export default function Home() {
  return (
    <div className="min-h-screen p-8" style={{ backgroundImage: "url('/Background.jpg')" }}>
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full p-4 bg-green-600 text-white">
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          {/* Dropdown for nav1 */}
          <div className="relative group flex items-center gap-2">
            <span className="hover:text-gray-400">Sustainable Investment Insights</span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-green-600 text-white p-2 rounded shadow-lg group-hover:visible">
            <Link href="/nav1/stocks" className="px-4 py-2 hover:bg-gray-600 rounded">Eco-Friendly Stocks</Link>
            <Link href="/nav1/Tutorial" className="px-4 py-2 hover:bg-gray-600 rounded">Tutorial</Link>
            </div>
          </div>
          {/* Dropdown for nav2 */}
          <div className="relative group flex items-center gap-2">
            <span className="hover:text-gray-400">Eco-Saving Goals & Tips</span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-green-600 text-white p-2 rounded shadow-lg group-hover:visible">
              <Link href="/nav2/Tracker" className="px-4 py-2 hover:bg-gray-600 rounded">Eco-Spending Tracker</Link>
              <Link href="/nav2/Tips" className="px-4 py-2 hover:bg-gray-600 rounded">Tips and Challenges</Link>
            </div>
          </div>
          {/* Dropdown for nav3 */}
          <div className="relative group flex items-center gap-2">
            <span className="hover:text-gray-400">Community and Mentorship</span>
            <div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-green-600 text-white p-2 rounded shadow-lg group-hover:visible">
              <Link href="/nav3/Forums" className="px-4 py-2 hover:bg-gray-600 rounded">Forums</Link>
              <Link href="/nav3/Meetings" className="px-4 py-2 hover:bg-gray-600 rounded">Webinars and Workshops</Link>
              <Link href="/nav3/Resources" className="px-4 py-2 hover:bg-gray-600 rounded">Resource Library</Link>
            </div>
          </div>

        </div>
        <div className="relative group flex items-center gap-2">
          <UserCircleIcon className="w-6 h-6 text-white cursor-pointer" />
          <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col bg-green-600 text-white p-2 rounded shadow-lg">
            <Link href="/settings" className="px-4 py-2 hover:bg-gray-600 rounded">Settings</Link>
            <Link href="/profile" className="px-4 py-2 hover:bg-gray-600 rounded">Profile</Link>
          </div>
        </div>

      </nav>
    </div>
  );
}
