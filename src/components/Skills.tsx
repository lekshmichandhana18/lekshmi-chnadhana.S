import { motion } from "motion/react";
import { Terminal, Laptop, Database, GitBranch, ShieldCheck } from "lucide-react";
import { SkillCategory } from "../types";

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C", level: 75 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    id: "frontend",
    name: "Web Technologies",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Responsive Web Design", level: 92 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    id: "concepts",
    name: "Core CS & Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Object-Oriented Programming (OOP)", level: 88 },
      { name: "Data Structures & Algorithms (DSA)", level: 78 },
    ],
  },
  {
    id: "tools",
    name: "Development Tools",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 90 },
    ],
  },
];

export default function Skills() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "languages":
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      case "frontend":
        return <Laptop className="w-5 h-5 text-cyan-400" />;
      case "concepts":
        return <Database className="w-5 h-5 text-cyan-400" />;
      case "tools":
        return <GitBranch className="w-5 h-5 text-cyan-400" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-zinc-400" />;
    }
  };

  const getBorderColor = (id: string) => {
    switch (id) {
      case "languages":
        return "hover:border-cyan-500/30";
      case "frontend":
        return "hover:border-cyan-500/30";
      case "concepts":
        return "hover:border-cyan-500/30";
      case "tools":
        return "hover:border-cyan-500/30";
      default:
        return "hover:border-zinc-500/30";
    }
  };

  return (
    <section id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background visual flair */}
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-cyan-500/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-zinc-800/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Laptop className="w-3.5 h-3.5" />
            Capabilities
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-sm sm:text-base">
            A comprehensive overview of my technological expertise, programming foundations, and toolchains.
          </p>
          <div className="h-[1px] w-12 bg-cyan-500/40 mx-auto mt-4" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-zinc-900/40 border border-zinc-800 p-6 sm:p-8 rounded-2xl transition-all duration-300 ${getBorderColor(
                category.id
              )} group`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-850 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {getCategoryIcon(category.id)}
                </div>
                <h3 className="font-serif font-normal text-lg text-white">
                  {category.name}
                </h3>
              </div>

              {/* Skills Progress bars */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono tracking-wider">
                      <span className="font-medium text-zinc-300">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    
                    {/* Progress track */}
                    <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/80">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`h-full rounded-full bg-cyan-500`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
