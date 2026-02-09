"use client";

import { useState } from "react";

export default function Footer() {
  const [devMode, setDevMode] = useState(false);

  return (
    <footer
      className="
        mt-[30px]
        relative
        bg-gradient-to-b from-slate-100 to-slate-200
        dark:from-slate-900 dark:to-black
        border-t border-slate-300 dark:border-slate-700
        overflow-hidden
      "
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Animated Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-indigo-500 via-sky-400 to-indigo-500 animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              IoT Edge Club
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              The official technical club of MITS Gwalior, focused on IoT,
              Edge Computing, embedded systems, and building real-world,
              future-ready technology.
            </p>
          </div>

          {/* NAV */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Explore
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Past Events", "Team", "Projects", "Join"].map((item) => (
                <li
                  key={item}
                  className="text-slate-700 dark:text-slate-300
                             hover:text-indigo-600 dark:hover:text-indigo-400
                             transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT + DEV */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
              Connect
            </h3>

            <p className="text-sm text-slate-700 dark:text-slate-300">
              📍 MITS Gwalior <br />
              📧 iotedge@mitsgwalior.in
            </p>

            <button
              onClick={() => setDevMode(!devMode)}
              className="
                mt-6 px-4 py-2 text-xs font-semibold tracking-wide
                border border-slate-600 dark:border-slate-400
                rounded-full
                hover:bg-slate-900 hover:text-white
                dark:hover:bg-white dark:hover:text-black
                transition-all
              "
            >
              {devMode ? "Exit Developer Mode" : "Developer Mode"}
            </button>
          </div>
        </div>

        {/* DEV MODE PANEL */}
        {devMode && (
          <div
            className="
              mt-12 p-6 rounded-2xl
              bg-white/70 dark:bg-slate-800/70
              backdrop-blur-xl
              border border-indigo-500/40
              shadow-xl
            "
          >
            <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              Developer Diagnostics
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800 dark:text-slate-200">
              <p>⚙ Framework: Next.js (App Router)</p>
              <p>🎨 UI: Tailwind CSS</p>
              <p>🧠 Language: TypeScript</p>
              <p>🌙 Theme: Dark / Light Enabled</p>
              <p>📦 Build: Production Ready</p>
              <p>👨‍💻 Maintained by IoT Edge Dev Team</p>
            </div>
          </div>
        )}

        {/* FOOTER BOTTOM */}
        <div
          className="
            mt-14 pt-6
            border-t border-slate-300 dark:border-slate-700
            flex flex-col md:flex-row
            justify-between items-center gap-4
            text-sm
          "
        >
          <p className="text-slate-700 dark:text-slate-400">
            © {new Date().getFullYear()} IoT Edge Club · MITS Gwalior
          </p>

          <p className="italic text-slate-600 dark:text-slate-500">
            Engineering intelligence at the edge.
          </p>
        </div>
      </div>
    </footer>
  );
}
