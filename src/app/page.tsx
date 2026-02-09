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
    </div>
  );
}