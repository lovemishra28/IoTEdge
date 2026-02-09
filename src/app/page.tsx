import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="flex flex-col bg-iot-light dark:bg-iot-dark">
      <Hero />
      <About />
      <Projects />
      <Team />

      {/* Next Step Placeholder */}
      <section
        id="team"
        className="py-20 text-center bg-white dark:bg-iot-dark/50"
      >
        <p className="text-gray-600 dark:text-gray-400 italic">
          Team Section - Coming Soon...
        </p>
      </section>
    </div>
  );
}
