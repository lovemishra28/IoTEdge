"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { useEffect } from "react";

export default function Navbar() {

  // 🔹 Scroll to section if URL has hash on refresh
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      const offset = 90;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      setTimeout(() => {
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 100);
    }
  }, []);

  // 🔹 Scroll Spy (NO HOME RESET)
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ["about", "team", "pastevent", "upevent"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          window.history.replaceState(null, "", `#${section}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    window.history.pushState({}, "", href);

    if (elem) {
      const offset = 90;
      const y = elem.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-5 z-50 w-full flex justify-center px-4">
      <nav
        className="
          w-full max-w-7xl rounded-3xl
          bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10
          dark:from-blue-400/10 dark:via-indigo-400/10 dark:to-purple-400/10
          backdrop-blur-2xl
          border border-white/20 dark:border-white/10
          shadow-xl
        "
      >
        <div className="px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo edgeColor="text-indigo-600 dark:text-indigo-400" />
          </Link>

          {/* Nav */}
          <div className="hidden md:flex items-center gap-2">
            {["About", "Team", "PastEvent", "UpEvent"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) =>
                  handleScroll(e, `#${item.toLowerCase()}`)
                }
                className="
                  px-5 py-2 rounded-full text-sm font-semibold
                  text-gray-800 dark:text-gray-200
                  hover:bg-white/20 transition
                "
              >
                {item}
              </Link>
            ))}

            <div className="mx-2 h-6 w-px bg-white/30" />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
