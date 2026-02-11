"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Users, Star } from "lucide-react"; // Importing icons for visual enhancement

const values = [
  {
    title: "Dignity",
    description: "We honor the life experience of every elder.",
    gradient: "from-orange-400 to-red-500",
    icon: Star,
  },
  {
    title: "Compassion",
    description: "We serve with kindness and empathy.",
    gradient: "from-pink-500 to-rose-500",
    icon: Heart,
  },
  {
    title: "Integrity",
    description: "Transparency and accountability in all we do.",
    gradient: "from-emerald-400 to-teal-600",
    icon: Shield,
  },
  {
    title: "Inclusivity",
    description: "We serve all, regardless of background.",
    gradient: "from-blue-400 to-indigo-600",
    icon: Users,
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 md:py-32 bg-orange-50/30 overflow-hidden relative">
      {/* Background Decor Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-[500px] md:h-[800px] relative">
          {/* Orbit Path (Visual Only) */}
          <div className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] border border-orange-200/50 rounded-full" />
          <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-orange-100/50 rounded-full" />

          {/* Rotating System Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] flex items-center justify-center"
          >
            {/* Rotating Ring for Items */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 w-full h-full"
            >
              {values.map((value, index) => {
                // Calculate position on the circle (0, 90, 180, 270 degrees)
                // We use CSS transforms for positioning to keep it responsive based on percentage
                const angle = (index * 360) / values.length;
                const radian = (angle * Math.PI) / 180;

                // Positioning: 50% + radius * cos/sin
                // Using standard CSS translate is easier: rotate container, then place items
                // Actually, just absolute positioning with transforms matching the rotation angle

                return (
                  <div
                    key={value.title}
                    className="absolute top-1/2 left-1/2 w-32 h-32 md:w-48 md:h-48 -ml-16 -mt-16 md:-ml-24 md:-mt-24"
                    style={{
                      transform: `rotate(${angle}deg) translate(160px) rotate(-${angle}deg)`, // Mobile radius
                      // For desktop, we need media queries or a responsive 'translate' value.
                      // Since we can't easily put media queries in inline styles, we'll use a CSS variable or a slightly different approach.
                      // Let's use Tailwind arbitrary values for the translate if possible, or just a simpler approach:
                      // Position them explicitly Top/Right/Bottom/Left since there are exactly 4.
                    }}
                  >
                    {/* 
                        FIX: Inline styles for responsive translate are tricky. 
                        Better approach: 
                        Use specific classes for each index since there are only 4.
                     */}
                  </div>
                );
              })}
            </motion.div>

            {/* 
                Alternative Layout approach for the rotating items to ensure responsiveness:
                We will map them and position them via absolute + generic styles, but handling the radius difference (160px vs 250px) is best done with a wrapper that changes size.
                The 'Rotating Ring' above is 320px/500px.
                So if we position absolute at top-0 left-1/2 etc, it follows the size.
             */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-full h-full"
            >
              {values.map((value, index) => {
                // 0: Top, 1: Right, 2: Bottom, 3: Left
                let positionClass = "";
                if (index === 0)
                  positionClass =
                    "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2";
                if (index === 1)
                  positionClass =
                    "right-0 top-1/2 translate-x-1/2 -translate-y-1/2";
                if (index === 2)
                  positionClass =
                    "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2";
                if (index === 3)
                  positionClass =
                    "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2";

                return (
                  <motion.div
                    key={value.title}
                    className={`absolute ${positionClass}`}
                  >
                    {/* Counter-rotate to keep upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className={`
                              w-32 h-32 md:w-44 md:h-44 rounded-full 
                              bg-gradient-to-br ${value.gradient} 
                              text-white flex flex-col items-center justify-center text-center p-4 
                              shadow-lg shadow-black/10 
                              border-4 border-white/30 backdrop-blur-sm
                              hover:scale-110 transition-transform duration-300 cursor-pointer group
                            `}
                    >
                      <value.icon className="w-6 h-6 md:w-8 md:h-8 mb-2 opacity-90 group-hover:scale-110 transition-transform" />
                      <h3 className="text-sm md:text-lg font-bold font-heading leading-tight mb-1">
                        {value.title}
                      </h3>
                      <p className="text-[10px] md:text-xs font-medium opacity-90 leading-tight hidden md:block">
                        {value.description}
                      </p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Center Circle - Static Title */}
            <div className="relative z-20">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl flex flex-col items-center justify-center text-center p-6 z-20"
              >
                <div className="bg-orange-100 p-3 rounded-full mb-2">
                  <Star className="w-6 h-6 text-primary" fill="currentColor" />
                </div>
                <h2 className="text-2xl md:text-4xl font-bold font-heading text-secondary leading-none">
                  Our <br /> <span className="text-primary">Values</span>
                </h2>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
