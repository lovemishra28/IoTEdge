"use client";

import { Linkedin, Github, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const teamMembers = [
  {
    name: "Core Member Name",
    role: "President / Lead",
    image: "/team/placeholder.jpg",
    github: "#",
    linkedin: "#",
    bio: "IoT enthusiast focused on smart automation and embedded systems.",
  },
  {
    name: "Love Mishra",
    role: "Technical",
    image: "/team/love.jpg", // Add your photo to public/team/
    github: "lovemishra28",
    linkedin: "#",
    bio: "Full-stack developer passionate about bridging hardware with scalable software.",
  },
  {
    name: "Love Mishra",
    role: "Technical",
    image: "/team/love.jpg", // Add your photo to public/team/
    github: "lovemishra28",
    linkedin: "#",
    bio: "Full-stack developer passionate about bridging hardware with scalable software.",
  },
  {
    name: "Love Mishra",
    role: "Technical",
    image: "/team/love.jpg", // Add your photo to public/team/
    github: "lovemishra28",
    linkedin: "#",
    bio: "Full-stack developer passionate about bridging hardware with scalable software.",
  },
  {
    name: "Love Mishra",
    role: "Technical",
    image: "/team/love.jpg", // Add your photo to public/team/
    github: "lovemishra28",
    linkedin: "#",
    bio: "Full-stack developer passionate about bridging hardware with scalable software.",
  },
  {
    name: "Love Mishra",
    role: "Technical",
    image: "/team/love.jpg", // Add your photo to public/team/
    github: "lovemishra28",
    linkedin: "#",
    bio: "Full-stack developer passionate about bridging hardware with scalable software.",
  },
  {
    name: "Love Mishra",
    role: "Technical",
    image: "/team/love.jpg", // Add your photo to public/team/
    github: "lovemishra28",
    linkedin: "#",
    bio: "Full-stack developer passionate about bridging hardware with scalable software.",
  },
  // Add more members as needed
];

export default function Team() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'forward' | 'backward' | 'finished'>('idle');
  const animationStartedRef = useRef(false);

  // Intersection Observer to start animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStartedRef.current && !hasInteracted) {
          animationStartedRef.current = true;
          setAnimationPhase('forward');
        }
      },
      { threshold: 0.1 } // Start when 10% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasInteracted]);

  // Animation Loop
  useEffect(() => {
    if (hasInteracted || animationPhase === 'idle' || animationPhase === 'finished') {
      return;
    }

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) {
      return;
    }

    let animationFrameId: number;
    const speed = 1.5; // Slightly faster for better visibility

    const animate = () => {
      if (animationPhase === 'forward') {
         scrollContainer.scrollLeft += speed;
         
         // Check end condition (with small buffer)
         const isAtEnd = Math.ceil(scrollContainer.scrollLeft) >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 5;
         if (isAtEnd) {
             setAnimationPhase('backward');
             return;
         }
      } else if (animationPhase === 'backward') {
         scrollContainer.scrollLeft -= speed;
         
         // Check start condition
         if (scrollContainer.scrollLeft <= 1) {
            setAnimationPhase('finished');
            return; 
         }
      }

      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Start loop
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationPhase, hasInteracted]);

  const handleManualScroll = (direction: "left" | "right") => {
    setHasInteracted(true);
    setAnimationPhase('finished'); // Stop animation immediately
    if (scrollRef.current) {
      const scrollAmount = 340; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-iot-dark/30 transition-colors duration-300 relative"
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-left mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                The Architects
            </h2>
            <div className="w-20 h-1 bg-iot-green rounded-full"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl">
                The team driving innovation and connectivity at MITS.
            </p>
        </div>

        {/* Scroll Container Wrapper */}
        <div className="relative group/container">
            {/* Left Button */}
            <button
                onClick={() => handleManualScroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-iot-surface border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white hover:bg-iot-green hover:text-black dark:hover:bg-iot-green dark:hover:text-black transition-all shadow-lg opacity-0 group-hover/container:opacity-100 focus:opacity-100 duration-300"
                aria-label="Scroll Left"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scroll Area */}
            <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 pb-8 px-4 snap-x snap-mandatory scrollbar-hide mask-linear-fade"
                style={{ 
                    scrollbarWidth: 'none', 
                    msOverflowStyle: 'none',
                    maskImage: 'linear-gradient(to right, transparent, black 1%, black 99%, transparent)'
                }}
            >
            {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className="group relative flex flex-col items-center justify-between text-center min-w-[280px] sm:min-w-[320px] p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-iot-green/40 hover:shadow-lg dark:hover:bg-white/10 transition-all duration-300 snap-center"
                >
                    {/* Card Hover Gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-iot-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center w-full">
                    <div className="relative w-40 h-40 mb-6">
                        {/* Profile Image Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-iot-green/20 group-hover:border-iot-green transition-all scale-105 duration-300"></div>
                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-iot-surface border-4 border-white dark:border-iot-dark shadow-xl">
                        {member.image && !member.image.includes("placeholder") ? (
                            <Image 
                                src={member.image} 
                                alt={member.name}
                                width={160}
                                height={160}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-iot-surface text-iot-green font-bold text-2xl">
                                {member.name.charAt(0)}
                            </div>
                        )}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-iot-green transition-colors">{member.name}</h3>
                    <p className="text-iot-green text-sm font-medium mb-4 uppercase tracking-widest">
                        {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed line-clamp-3">
                        {member.bio}
                    </p>

                    <div className="flex gap-4 mt-auto">
                        <a
                        href={`https://github.com/${member.github}`}
                        className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-iot-green hover:text-black dark:hover:text-black border border-gray-200 dark:border-white/10 transition-all duration-300"
                        >
                        <Github size={18} />
                        </a>
                        <a
                        href={member.linkedin}
                        className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-iot-green hover:text-black dark:hover:text-black border border-gray-200 dark:border-white/10 transition-all duration-300"
                        >
                        <Linkedin size={18} />
                        </a>
                        <a
                        href="mailto:contact@example.com"
                        className="p-2 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-iot-green hover:text-black dark:hover:text-black border border-gray-200 dark:border-white/10 transition-all duration-300"
                        >
                        <Mail size={18} />
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            
                {/* Spacer */}
                <div className="min-w-[5%]"></div>
            </div>

            {/* Right Button */}
            <button
                onClick={() => handleManualScroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white dark:bg-iot-surface border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white hover:bg-iot-green hover:text-black dark:hover:bg-iot-green dark:hover:text-black transition-all shadow-lg opacity-0 group-hover/container:opacity-100 focus:opacity-100 duration-300"
                aria-label="Scroll Right"
            >
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
}
