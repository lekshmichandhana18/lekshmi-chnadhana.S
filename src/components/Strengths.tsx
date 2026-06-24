import { motion } from "motion/react";
import { BrainCircuit, Users, MessageSquareCode, BookOpen, Sparkles } from "lucide-react";
import { StrengthItem } from "../types";

const STRENGTHS: StrengthItem[] = [
  {
    title: "Leadership",
    description: "Actively guiding and organizing team efforts, taking initiative on new challenges, and fostering clear group objectives.",
    iconName: "Sparkles",
  },
  {
    title: "Teamwork & Collaboration",
    description: "Working seamlessly with diverse groups, actively sharing knowledge, and combining skills to deliver high-quality project outcomes.",
    iconName: "Users",
  },
  {
    title: "Communication",
    description: "Articulating complex technical concepts clearly, actively listening, and documenting codebases comprehensively.",
    iconName: "MessageSquare",
  },
  {
    title: "Continuous Learning",
    description: "Eagerly adopting emerging technologies, exploring system architectures, and maintaining curiosity in computer science.",
    iconName: "BookOpen",
  },
  {
    title: "Impact-Driven Building",
    description: "Focused on solving real-world challenges through clean, responsive web applications and reliable computer systems.",
    iconName: "BrainCircuit",
  },
];

export default function Strengths() {
  const getStrengthIcon = (iconName: string) => {
    switch (iconName) {
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case "Users":
        return <Users className="w-5 h-5 text-cyan-400" />;
      case "MessageSquare":
        return <MessageSquareCode className="w-5 h-5 text-cyan-400" />;
      case "BookOpen":
        return <BookOpen className="w-5 h-5 text-cyan-400" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="strengths" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 right-12 w-64 h-64 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-4 left-12 w-64 h-64 rounded-full bg-zinc-800/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <BrainCircuit className="w-3.5 h-3.5" />
            Core Values
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Key Strengths
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-sm sm:text-base">
            Essential interpersonal and professional strengths that empower my academic and technical pursuits.
          </p>
          <div className="h-[1px] w-12 bg-cyan-500/40 mx-auto mt-4" />
        </div>

        {/* Strengths Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STRENGTHS.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-zinc-900/60 border border-zinc-850 p-6 rounded-2xl hover:border-cyan-500/50 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                  {getStrengthIcon(strength.iconName)}
                </div>
                
                <h3 className="font-serif font-normal text-lg text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {strength.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed font-sans">
                  {strength.description}
                </p>
              </div>

              {/* Small graphic accent line inside the card */}
              <div className="w-full h-[1px] bg-zinc-800/40 mt-6 group-hover:bg-cyan-500/20 transition-colors" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
