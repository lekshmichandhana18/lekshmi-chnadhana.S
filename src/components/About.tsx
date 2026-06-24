import { motion } from "motion/react";
import { User, Target, Compass, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative background flare */}
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            Background
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] w-12 bg-cyan-500/40 mx-auto mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Smaller Profile Image Column */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Soft neon teal background glow */}
              <div className="absolute inset-2 rounded-full bg-cyan-500 opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
              
              {/* Outer frame */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full border-2 border-zinc-700 p-2 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-zinc-900">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-800 to-cyan-950 flex flex-col items-center justify-center border border-cyan-500/10">
                  <span className="text-5xl sm:text-6xl font-serif italic text-cyan-400 select-none tracking-tighter">LC</span>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-zinc-500 mt-1">BTech Student</span>
                </div>
              </div>

              {/* Float sparkles */}
              <div className="absolute -bottom-1 -right-1 p-2 rounded-full bg-zinc-900 border border-zinc-800 shadow-md text-cyan-500">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
            </motion.div>
          </div>

          {/* Description Text Column */}
          <div className="lg:col-span-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl"
            >
              <h3 className="font-serif text-xl font-normal text-white mb-4">
                Lekshmi Chandhana S
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
                I’m a 3rd Year BTech Computer Science with AI student interested in software development and building practical digital solutions. I enjoy learning new technologies, solving problems, and creating responsive applications. I value leadership, communication, teamwork, continuous learning, and building impactful projects.
              </p>
            </motion.div>

            {/* Interests & Goals split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Career Interests Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-cyan-400 border border-zinc-700/60 group-hover:scale-110 transition-transform">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-normal text-base text-white">Career Interests</h4>
                </div>
                <ul className="space-y-2 text-xs text-zinc-400">
                  {["Software Development", "Modern Web Technologies", "Problem Solving", "Real-World Applications"].map((interest, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan-500" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Future Goal Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center text-cyan-400 border border-zinc-700/60 group-hover:scale-110 transition-transform">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif font-normal text-base text-white">Future Goal</h4>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Gain industry experience, continue learning, and build a successful, high-impact software development career with a strong grasp on AI integrations.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
