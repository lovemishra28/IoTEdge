import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section
      className="mt-[30px] relative overflow-hidden min-h-screen flex flex-col justify-center items-center
                 bg-[#f5f7fa] dark:bg-[#0b0f14] text-slate-900 dark:text-white pt-24"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[15%] left-[20%] w-[420px] h-[420px] bg-indigo-500/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[15%] right-[20%] w-[420px] h-[420px] bg-slate-400/10 rounded-full blur-[160px]" />
      </div>

      {/* Floating Hardware Images */}
      <img
        src="/assets/Arduino1.png"
        alt="Arduino"
        className="absolute top-[12%] left-[6%]
                   w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px]
                   -rotate-12 opacity-70 hover:scale-105
                   transition-all duration-500 pointer-events-none"
      />

      <img
        src="/assets/c++.png"
        alt="C++"
        className="absolute top-[12%] right-[6%]
                   w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px]
                   rotate-12 opacity-70 hover:scale-105
                   transition-all duration-500 pointer-events-none"
      />

      <img
        src="/assets/py.png"
        alt="Python"
        className="absolute bottom-[12%] left-[6%]
                   w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px]
                   rotate-6 opacity-70 hover:scale-105
                   transition-all duration-500 pointer-events-none"
      />

      <img
        src="/assets/esp32.png"
        alt="ESP32"
        className="absolute bottom-[12%] right-[6%]
                   w-[90px] sm:w-[110px] md:w-[130px] lg:w-[150px]
                   -rotate-6 opacity-70 hover:scale-105
                   transition-all duration-500 pointer-events-none"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-300 dark:border-slate-600
                        bg-white/70 dark:bg-slate-800/60 backdrop-blur text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-600 opacity-70"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
          </span>
          MITS Gwalior
        </div>

        <h1 className="mb-10 flex justify-center">
          <Logo
            edgeColor="text-indigo-600 dark:text-indigo-400"
            className="w-[50px] h-auto"
          />
        </h1>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-12 leading-relaxed">
          The official IoT Edge Club of MITS Gwalior. We design intelligent
          systems, explore edge computing, and build reliable solutions that
          connect the physical and digital worlds.
        </p>

        <div className="flex justify-center">
          <Link
            href="#join"
            className="px-10 py-3 rounded-full border border-slate-900 dark:border-white
                       text-slate-900 dark:text-white font-semibold
                       hover:bg-slate-900 hover:text-white
                       dark:hover:bg-white dark:hover:text-black
                       transition-all"
          >
            Join the Network
          </Link>
        </div>
      </div>
    </section>
  );
}
