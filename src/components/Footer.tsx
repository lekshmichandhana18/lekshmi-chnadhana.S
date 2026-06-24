import React from "react";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-[#050505] border-t border-zinc-900/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Logo & Brief Info (5 cols) */}
          <div className="md:col-span-5 space-y-4 text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="inline-flex items-center gap-2 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-serif text-base text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                Lekshmi Chandhana S
              </span>
            </a>
            <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-sans max-w-sm">
              3rd Year BTech Computer Science with AI Student. Passionate about software engineering, building clean web applications, and artificial intelligence.
            </p>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-zinc-400 font-medium">
            <a
              href="#about"
              onClick={(e) => handleScrollTo(e, "#about")}
              className="hover:text-cyan-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScrollTo(e, "#skills")}
              className="hover:text-cyan-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="hover:text-cyan-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              onClick={(e) => handleScrollTo(e, "#education")}
              className="hover:text-cyan-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="hover:text-cyan-400 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Socials & Copyright (3 cols) */}
          <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-4">
            
            {/* Social Icons Row */}
            <div className="flex items-center gap-4 text-zinc-500">
              <a
                href="https://github.com/lekshmichandhana18"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-105 transition-all"
                aria-label="GitHub Link"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/lekshmi-chandhana-222820339"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-105 transition-all"
                aria-label="LinkedIn Link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:lekshmichandhana2006@gmail.com"
                className="hover:text-white hover:scale-105 transition-all"
                aria-label="Email Link"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Credit Tagline */}
            <p className="text-[10px] font-mono text-zinc-650 flex items-center gap-1">
              Made with <Heart className="w-2.5 h-2.5 text-cyan-500 fill-cyan-500" /> &copy; {currentYear}
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
