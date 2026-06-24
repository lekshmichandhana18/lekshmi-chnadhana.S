import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail, MousePointerClick } from "lucide-react";

export default function Hero() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-zinc-800/10 blur-[100px] pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a08_1px,transparent_1px),linear-gradient(to_bottom,#27272a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Details Text (7 cols on large screen) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1">
            
            {/* Status / Welcome Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono uppercase tracking-wider"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Opportunities
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-tight tracking-tight text-[#e0e0e0]"
              >
                Hi, I'm <span className="italic">Lekshmi</span> <br className="hidden sm:inline" />
                <span className="italic text-cyan-500">Chandhana S.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-zinc-500 text-xs sm:text-sm tracking-widest uppercase font-mono font-bold"
              >
                3rd Year BTech Computer Science (AI)
              </motion.p>
            </div>

            {/* Sub-headline/tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed font-sans"
            >
              Building practical and user-friendly digital experiences through technology. Focused on modern web technologies and real-world problem solving.
            </motion.p>

            {/* Tech stack short indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {["Python", "Java", "MySQL", "Web Dev", "RISC-V"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-zinc-900/60 border border-zinc-800/80 text-xs font-mono text-zinc-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 font-mono text-xs uppercase tracking-wider font-bold text-black shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] group"
              >
                View My Projects
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-850 text-zinc-250 border border-zinc-800 hover:border-zinc-700 font-mono text-xs uppercase tracking-wider font-bold transition-all duration-300 hover:scale-[1.03]"
              >
                Let's Connect
                <MousePointerClick className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </motion.div>

            {/* Quick Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-5 pt-4 text-zinc-400"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">Find me on:</span>
              <a
                href="https://github.com/lekshmichandhana18"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-zinc-850 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/lekshmi-chandhana-222820339"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-zinc-850 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:lekshmichandhana2006@gmail.com"
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-zinc-850 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Hero Profile Photo Visual Container (5 cols on large screen) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
              className="relative group"
            >
              {/* Outer decorative neon glow */}
              <div className="absolute inset-2 rounded-full bg-cyan-500 opacity-10 blur-xl group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
              
              {/* Inner glowing ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-zinc-800 to-cyan-500/30 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

              {/* Profile Image Frame with Glow */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-zinc-700 p-2 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-zinc-900">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-800 to-cyan-950 flex flex-col items-center justify-center border border-cyan-500/10">
                  <span className="text-7xl sm:text-8xl font-serif italic text-cyan-400 select-none tracking-tighter">LC</span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-2">Computer Science</span>
                </div>
              </div>

              {/* Float tech card badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-2 -left-4 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-850 backdrop-blur-md shadow-xl text-left"
              >
                <p className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider">Major</p>
                <p className="text-xs font-bold text-zinc-300">CS + AI Student</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 -right-4 px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-850 backdrop-blur-md shadow-xl text-left"
              >
                <p className="text-[9px] text-zinc-500 font-mono uppercase tracking-wider">Graduating</p>
                <p className="text-xs font-bold text-cyan-500">Class of 2028</p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
