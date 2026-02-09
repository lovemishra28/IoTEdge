"use client";

import MemberCard from "./MemberCard";

const members = [
  { _id: "1", name: "Yatharth Gupta", role: "Tech", img: "/assets/yg.png" },
  { _id: "2", name: "Aman Sharma", role: " Member", img: "/assets/aman.png" },
  { _id: "3", name: "Riya Verma", role: "Tech Lead", img: "/assets/window.svg" },
  { _id: "4", name: "Naveen Kumar", role: "Member", img: "/assets/vercel.svg" },
  { _id: "5", name: "Yatharth Gupta", role: "Tech", img: "/assets/yg.png" },
  { _id: "6", name: "Aarav Sharma", role: "Vice President", img: "/assets/globe.svg" },
  { _id: "7", name: "Riya Verma", role: "Tech Lead", img: "/assets/window.svg" },
  { _id: "8", name: "Naveen Kumar", role: "Member", img: "/assets/vercel.svg" },
];
export default function Members() {
  return (
    <section
      id="team"
      className="
      py-20
        bg-slate-100 dark:bg-slate-900
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-8
      ">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
            Meet the Team
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-2">
            Members of our club driving innovation and edge computing projects.
          </p>
        </div>
        <div className="h-px grow bg-emerald-500/30 mx-4 hidden md:block" />
      </div>
      <div className="flex overflow-x-auto space-x-6 pb-4 scroll-smooth scrollbar-hide">
        {members.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>
    </section>
  );
}
