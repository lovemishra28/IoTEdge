"use client";

interface MemberCardProps {
  member: {
    _id: string;
    name: string;
    role: string;
    img: string;
  };
}
export default function MemberCard({ member }: MemberCardProps) {
  return (
    <div
      className="mt-[30px] min-w-[200px] md:min-w-[220px] lg:min-w-[250px]
                 bg-white dark:bg-iot-surface/20 rounded-2xl shadow-lg
                 flex flex-col items-center text-center p-4
                 hover:scale-105 transition-transform"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Profile Image */}
      <div
        className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40
                   rounded-full overflow-hidden flex items-center justify-center
                   bg-blue-500 border-4 border-emerald-600"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-black dark:text-white">
        {member.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {member.role}
      </p>
    </div>
  );
}
