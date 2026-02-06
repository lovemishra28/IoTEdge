import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Logo from "@/components/Logo";

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-pixel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IoT Edge | MITS Gwalior",
  description: "Official IoT and Embedded Systems Club of MITS Gwalior",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Start in Dark Mode
    <html lang="en" className="dark">
      <body className={`${pixelify.variable} font-pixel antialiased min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <footer className="py-10 text-center text-sm text-gray-600 dark:text-gray-400 border-t border-gray-300 dark:border-iot-surface bg-white dark:bg-iot-dark flex justify-center items-center gap-1">
          © {new Date().getFullYear()} <Logo className="scale-75 origin-center" /> Club - MITS Gwalior
        </footer>
      </body>
    </html>
  );
}