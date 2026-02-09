import Hero from "@/components/Hero";
import About from "@/components/About";
import PastEvents from "@/components/PastEvent";
import Members from "@/components/Members";

export default function Home() {
  return (
    <div className="flex flex-col bg-iot-light dark:bg-iot-dark">
      <Hero />
      <About />
      <Members />
      <PastEvents/>
    </div>
  );
}