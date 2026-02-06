export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-iot-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            About Us
          </h2>
          <div className="w-20 h-1 bg-iot-green mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We don't just connect things to the internet. We build intelligent
            systems that process data where it matters most—at the Edge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Our Vision */}
          <div className="md:col-span-2 p-8 rounded-2xl border border-gray-200 dark:border-iot-surface bg-gray-50 dark:bg-iot-surface/30 hover:border-iot-green hover:shadow-lg hover:shadow-iot-green/20 transition-all group min-h-75 flex flex-col justify-start items-center text-center">
            <div className="px-6 py-2 rounded-lg mb-6 bg-iot-green-dark/20 border border-iot-green-dark">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl text-lg mb-8">
              Students are encouraged to explore IoT and edge technologies as exciting career paths, while developing creativity and innovation in smart systems and automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="p-6 rounded-xl border-2 border-iot-green-dark bg-white dark:bg-black/20 flex flex-col justify-center items-center text-center hover:border-iot-green hover:shadow-lg hover:shadow-iot-green/20 transition-all h-full">
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                  Smart Device Prototyping
                </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Building innovative IoT kits and prototypes that connect sensors, actuators, and microcontrollers for real-world applications.
                  </p>
              </div>

              <div className="p-6 rounded-xl border-2 border-iot-green-dark bg-white dark:bg-black/20 flex flex-col justify-center items-center text-center hover:border-iot-green hover:shadow-lg hover:shadow-iot-green/20 transition-all h-full">
                <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
                  Automation & Control
                </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                    Empowering industries with smart automation solutions that enhance efficiency, reliability, and operational control.
                  </p>
              </div>
            </div>
          </div>

          {/* Our Mentor */}
          <div className="md:col-span-2 p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-iot-surface bg-gray-50 dark:bg-iot-surface/30 hover:border-iot-green hover:shadow-lg hover:shadow-iot-green/20 transition-all group">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="text-left flex-1">
                <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                  Our Mentor
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify">
                  Guided by <b>Dr. Aftab Ahmed Ansari</b>, an accomplished
                  engineer with expertise in advanced control strategies for
                  wind energy systems. With over five SCI Q1 research
                  publications and the Best Paper Award at EPREC-2021, he brings
                  deep knowledge of renewable energy, electric vehicles, and
                  smart grid technologies. Skilled in OPAL-RT, Typhoon HIL,
                  WAVECT controllers, and MATLAB simulations, he combines
                  hands-on experience in DFIG-based systems with a passion for
                  innovation, sustainability, and practical impact.
                </p>
              </div>
              <div className="flex justify-center items-center flex-none">
                <div className="relative w-full max-w-[320px] aspect-square rounded-2xl border border-gray-300 dark:border-iot-surface/50 bg-white dark:bg-black/20 overflow-hidden shadow-sm">
                  <img
                    src="/assets/mentor.png"
                    alt="Our Mentor"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
