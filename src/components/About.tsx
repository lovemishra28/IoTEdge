import { Cpu, Network, Code2 } from "lucide-react";

const pillars = [
  {
    title: "Hardware Engineering",
    description: "Mastering microcontrollers like ESP32 and Arduino, sensor integration, and custom PCB design.",
    icon: <Cpu className="w-8 h-8 text-iot-green" />,
  },
  {
    title: "Connectivity & Protocols",
    description: "Exploring MQTT, LoRaWAN, and WebSockets to build seamless communication between devices.",
    icon: <Network className="w-8 h-8 text-iot-green" />,
  },
  {
    title: "Software & Edge AI",
    description: "Developing robust firmware, real-time dashboards, and deploying AI models directly on the edge.",
    icon: <Code2 className="w-8 h-8 text-iot-green" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-iot-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">Our Vission</h2>
          <div className="w-20 h-1 bg-iot-green mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We don't just connect things to the internet. We build intelligent systems that 
            process data where it matters most—at the Edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl border border-gray-200 dark:border-iot-surface bg-gray-50 dark:bg-iot-surface/30 hover:border-iot-green hover:shadow-lg hover:shadow-iot-green/20 transition-all group"
            >
              <div className="mb-6 p-3 rounded-lg bg-iot-green/10 w-fit group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{pillar.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}