export default function About() {
  return (
    <section
      id="about"
      className=" mb-[30px] mt-[30px] py-24 bg-[#f8f6f2] dark:bg-[#0f1115]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-20">
          <div className="w-fit mx-auto group cursor-default">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1a1a1a] dark:text-white">
              About Us
            </h2>
            <div className="w-20 group-hover:w-full transition-all duration-500 h-[3px] bg-emerald-600 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Our Vision */}
          <div className="md:col-span-2 p-10 rounded-3xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161a20] hover:shadow-xl hover:border-emerald-600 transition-all text-center">
            <div className="inline-block px-8 py-3 rounded-xl mb-8 bg-emerald-600/10 border border-emerald-600">
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white">
                Our Vision
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-xl max-w-4xl mx-auto mb-12">
              We inspire students to explore Internet of Things and Edge
              Technologies as powerful career paths by cultivating creativity,
              innovation, and real-world problem-solving through smart systems
              and automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl border-2 border-emerald-600/40 bg-[#fafafa] dark:bg-[#0f1319] hover:border-emerald-600 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">
                  Smart Device Prototyping
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  Designing and building innovative IoT kits by integrating
                  sensors, actuators, and microcontrollers for impactful
                  real-world applications.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl border-2 border-emerald-600/40 bg-[#fafafa] dark:bg-[#0f1319] hover:border-emerald-600 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold mb-4 text-[#1a1a1a] dark:text-white">
                  Automation & Control
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  Delivering intelligent automation solutions that enhance
                  efficiency, reliability, and control across modern industrial
                  systems.
                </p>
              </div>
            </div>
          </div>

          {/* Our Mentor */}
          <div className="md:col-span-2 p-10 md:p-14 rounded-3xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161a20] hover:shadow-xl hover:border-emerald-600 transition-all">
            <div className="flex flex-col md:flex-row items-center gap-14">

              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6 text-[#1a1a1a] dark:text-white">
                  Our Mentor
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg text-justify">
                  Guided by <b>Dr. Aftab Ahmed Ansari</b>, an accomplished engineer
                  specializing in advanced control strategies for wind energy
                  systems. With multiple SCI Q1 publications and the Best Paper
                  Award at EPREC-2021, he brings deep expertise in renewable
                  energy, electric vehicles, and smart grids. Proficient in
                  OPAL-RT, Typhoon HIL, WAVECT controllers, and MATLAB
                  simulations, he blends academic excellence with hands-on
                  innovation and sustainability-driven impact.
                </p>
              </div>

              <div className="flex-none">
                <div className="relative w-[280px] h-[280px] rounded-full border-2 border-emerald-600/60 dark:border-emerald-500/60 overflow-hidden shadow-lg">
                  <img
                    src="/assets/mentor.png"
                    alt="Our Mentor"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
