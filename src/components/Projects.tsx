import { motion } from "motion/react";
import { FolderGit2, Github, ExternalLink, Cpu, HeartPulse } from "lucide-react";
import { Project } from "../types";

const PROJECTS: Project[] = [
  {
    id: "hms",
    title: "Hospital Management System",
    description: "A comprehensive Java-based application designed for efficient healthcare management, patient records administration, and staff scheduling.",
    longDescription: "Developed as a robust desktop system, this application streamlines essential clinical operations. It allows administrators to register patients, book medical appointments, assign dedicated healthcare staff, and securely store billing details, ensuring high-quality organization and rapid lookup times.",
    tech: ["Java", "OOP", "MySQL", "JDBC"],
    category: "Software Development",
    githubUrl: "https://github.com/lekshmichandhana18",
  },
  {
    id: "riscv",
    title: "Pipeline Hazard Mitigation in 5-Stage RISC-V Processor",
    description: "An implementation of modern computer architecture techniques to mitigate hazards and optimize execution speed in a simulated 5-stage RISC-V pipeline.",
    longDescription: "This architectural project focuses on minimizing stalls in instruction execution. By implementing data forwarding and branch prediction techniques, the design effectively mitigates structural, data, and control hazards within a classic 5-stage RISC-V pipeline model, substantially boosting processor efficiency and performance metrics.",
    tech: ["RISC-V", "Computer Architecture", "Pipeline Processing"],
    category: "Hardware Simulation",
    githubUrl: "https://github.com/lekshmichandhana18",
  },
];

export default function Projects() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "hms":
        return <HeartPulse className="w-5 h-5 text-cyan-400" />;
      case "riscv":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  const getGlowColor = (id: string) => {
    return "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.06)]";
  };

  return (
    <section id="projects" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Portfolio
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-sm sm:text-base">
            Exploring practical implementations of software development and complex system architecture.
          </p>
          <div className="h-[1px] w-12 bg-cyan-500/40 mx-auto mt-4" />
        </div>

        {/* Projects Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`flex flex-col h-full bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 ${getGlowColor(
                project.id
              )} group cursor-pointer`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-850 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/20 px-2.5 py-1 rounded border border-cyan-500/15">
                      {project.category}
                    </span>
                    <h3 className="font-serif font-normal text-xl text-white mt-2 leading-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-grow space-y-4">
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {project.description}
                </p>
                {project.longDescription && (
                  <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed border-t border-zinc-800/40 pt-4 font-sans italic">
                    {project.longDescription}
                  </p>
                )}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-zinc-800/60">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-[11px] font-sans text-zinc-350"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-zinc-800/40">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Codebase
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-500 hover:text-cyan-400 transition-colors ml-auto"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
