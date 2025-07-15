
import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Start Making Money Online in 7 Days
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          No Experience. No Tech Skills. Just Real Results.
        </p>
        <div className="max-w-3xl mx-auto mb-8">
          <video
            className="w-full rounded-xl"
            controls
          >
            <source src="/videos/earn-from-home.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <a
          href="https://whop.com/profit-plug-join?a=pjbashal"
          className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold text-lg rounded-xl hover:bg-yellow-400 transition"
        >
          Join Now
        </a>
      </section>

      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">What You’ll Get</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Step-by-Step System</h3>
            <p>Learn exactly how to get started even if you're a complete beginner.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Proven Tools</h3>
            <p>Get access to automation tools that do the heavy lifting for you.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">Private Community</h3>
            <p>Join a Discord of high-performers and digital entrepreneurs.</p>
          </div>
        </div>
      </section>

      <section className="bg-yellow-500 text-black text-center py-6">
        <p className="text-lg font-semibold">
          ⚡ Limited Spots – Offer Closes Soon
        </p>
      </section>
    </div>
  );
}
