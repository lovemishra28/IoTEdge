import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="absolute top-6 z-50 flex justify-center px-4 w-full">
      {/* Floating Navbar Container */}
      <nav className="w-full max-w-7xl border border-white/50 dark:border-white/10 rounded-2xl bg-white/60 dark:bg-black/60 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] ring-1 ring-white/60 dark:ring-white/5">
        <div className="px-6 py-2">
          <div className="flex justify-between items-center h-12">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link
                href="/"
                className="hover:scale-105 transition-transform duration-300"
              >
                <Logo edgeColor="text-iot-green-deep dark:text-iot-green" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {["About", "Projects", "Team"].map((item) => (
                <Link
                  href={`#${item.toLowerCase()}`}
                  key={item}
                  className="px-5 py-2 rounded-full text-gray-800 dark:text-gray-200 text-sm font-bold tracking-wide transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:shadow-sm dark:hover:shadow-[0_0_15px_rgba(160,241,189,0.4)] hover:text-iot-green-deep dark:hover:text-iot-green border border-transparent hover:border-white/50 dark:hover:border-white/10"
                >
                  {item}
                </Link>
              ))}

              <div className="ml-2 pl-2 border-l border-gray-900/10 dark:border-white/10">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
