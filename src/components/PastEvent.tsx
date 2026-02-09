'use client'

import React, { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  report: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Tech Symposium 2024",
    date: "12 March 2024",
    description: "A full-day tech symposium featuring AI, IoT & Web Dev.",
    image: "/images/event1.jpg",
    report: "/reports/tech-symposium-2024.pdf",
  },
  {
    id: 2,
    title: "Hackathon 2.0",
    date: "28 January 2024",
    description: "24-hour hackathon with real-world problem solving.",
    image: "/images/event2.jpg",
    report: "/reports/hackathon-2.0.pdf",
  },
  {
    id: 3,
    title: "Web Dev Bootcamp",
    date: "10 December 2023",
    description: "Hands-on workshop on HTML, CSS, JS & React.",
    image: "/images/event3.jpg",
    report: "/reports/web-dev-bootcamp.pdf",
  },
  {
    id: 4,
    title: "AI Workshop",
    date: "05 November 2023",
    description: "Intro to Machine Learning and AI tools.",
    image: "/images/event1.jpg",
    report: "/reports/ai-workshop.pdf",
  },
  {
    id: 5,
    title: "Cloud Bootcamp",
    date: "18 October 2023",
    description: "AWS & Cloud fundamentals workshop.",
    image: "/images/event2.jpg",
    report: "/reports/cloud-bootcamp.pdf",
  },
  {
    id: 6,
    title: "IoT Hands-on",
    date: "02 September 2023",
    description: "Practical IoT project building session.",
    image: "/images/event3.jpg",
    report: "/reports/iot-hands-on.pdf",
  },  {
    id: 7,
    title: "Tech Symposium 2024",
    date: "12 March 2024",
    description: "A full-day tech symposium featuring AI, IoT & Web Dev.",
    image: "/images/event1.jpg",
    report: "/reports/tech-symposium-2024.pdf",
  },
  {
    id: 8,
    title: "Hackathon 2.0",
    date: "28 January 2024",
    description: "24-hour hackathon with real-world problem solving.",
    image: "/images/event2.jpg",
    report: "/reports/hackathon-2.0.pdf",
  },
  {
    id: 9,
    title: "Web Dev Bootcamp",
    date: "10 December 2023",
    description: "Hands-on workshop on HTML, CSS, JS & React.",
    image: "/images/event3.jpg",
    report: "/reports/web-dev-bootcamp.pdf",
  },
  {
    id: 10,
    title: "AI Workshop",
    date: "05 November 2023",
    description: "Intro to Machine Learning and AI tools.",
    image: "/images/event1.jpg",
    report: "/reports/ai-workshop.pdf",
  },
  {
    id: 11,
    title: "Cloud Bootcamp",
    date: "18 October 2023",
    description: "AWS & Cloud fundamentals workshop.",
    image: "/images/event2.jpg",
    report: "/reports/cloud-bootcamp.pdf",
  },
  {
    id: 12,
    title: "IoT Hands-on",
    date: "02 September 2023",
    description: "Practical IoT project building session.",
    image: "/images/event3.jpg",
    report: "/reports/iot-hands-on.pdf",
  },
];

const CARDS_PER_PAGE = 3;

const PastEvents: React.FC = () => {
  const totalPages = Math.ceil(events.length / CARDS_PER_PAGE);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 3000); // ⏱ every 2 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section
      id="pastevent"
      className=" mt-[30px] min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-16 text-white font-['Times_New_Roman']"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">Past Events</h1>
          <p className="mt-3 text-slate-300">
            A glimpse of what our club has accomplished ✨
          </p>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div
                key={pageIndex}
                className="grid w-full flex-shrink-0 grid-cols-1 gap-8 px-4 md:grid-cols-3"
              >
                {events
                  .slice(
                    pageIndex * CARDS_PER_PAGE,
                    pageIndex * CARDS_PER_PAGE + CARDS_PER_PAGE
                  )
                  .map((event) => (
                    <div
                      key={event.id}
                      className="overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl"
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="h-52 w-full object-cover"
                      />

                      <div className="p-6">
                        <h2 className="text-xl font-semibold">
                          {event.title}
                        </h2>
                        <p className="mt-1 text-sm text-sky-400">
                          {event.date}
                        </p>

                        <p className="mt-3 text-sm text-slate-200">
                          {event.description}
                        </p>

                        <a
                          href={event.report}
                          download
                          className="mt-4 inline-block rounded-md bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600"
                        >
                          Download Report
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
