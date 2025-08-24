'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-300">Sales Dashboard</span>
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8">
          Track your performance, analyze trends, and make data-driven decisions
          with our interactive dashboard.
        </p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-300 transition"
        >
          View Dashboard
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">📊 Interactive Charts</h3>
          <p className="text-gray-600">
            Visualize your sales data with bar, line, and pie charts.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🎯 Custom Filters</h3>
          <p className="text-gray-600">
            Apply filters to focus on what matters most to your business.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">🚀 Fast & Responsive</h3>
          <p className="text-gray-600">
            Optimized for desktop and mobile with a clean, modern design.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t mt-auto">
        © {new Date().getFullYear()} Sales Dashboard. All rights reserved.
      </footer>
    </main>
  );
}
