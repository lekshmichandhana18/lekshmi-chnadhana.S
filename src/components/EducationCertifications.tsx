import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, MapPin, BadgeCheck, ShieldAlert } from "lucide-react";
import { EducationItem, CertificationItem } from "../types";

const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: "Bishop Jerome Institute, Kollam",
    degree: "Bachelor of Technology (BTech)",
    specialization: "Computer Science with AI",
    period: "2024 - 2028",
    gpaOrStatus: "3rd Year Undergraduate",
    location: "Kollam, Kerala, India",
  },
];

const CERTIFICATION_ITEMS: CertificationItem[] = [
  {
    name: "Machine Learning Certification",
    issuer: "Authorized Course / Provider",
    date: "Completed Coursework",
    badgeColor: "from-cyan-500 to-blue-500",
  },
  {
    name: "NASSCOM Certification",
    issuer: "National Association of Software and Service Companies",
    date: "Professional Verified",
    badgeColor: "from-teal-400 to-indigo-500",
  },
];

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-zinc-800/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Credentials
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Education & Certifications
          </h2>
          <div className="h-[1px] w-12 bg-cyan-500/40 mx-auto mt-4" />
        </div>

        {/* Dual Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Education Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-cyan-400" />
              <h3 className="font-serif font-normal text-xl text-white">Academic Journey</h3>
            </div>

            <div className="space-y-6 relative border-l border-zinc-800 ml-4 pl-6 sm:pl-8">
              {EDUCATION_ITEMS.map((item, index) => (
                <motion.div
                  key={item.institution}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline bullet */}
                  <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-4 w-4 rounded-full border-[3px] border-cyan-500 bg-zinc-950 group-hover:scale-125 transition-transform duration-300 shadow shadow-cyan-500/50" />

                  <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors">
                    {/* Date/Period */}
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-500 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    {/* Degree & Specialization */}
                    <h4 className="font-serif font-normal text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {item.degree}
                    </h4>
                    <p className="text-cyan-500 text-sm font-medium mt-1">
                      {item.specialization}
                    </p>

                    {/* Institution */}
                    <p className="text-zinc-400 text-xs sm:text-sm font-sans mt-3 font-semibold">
                      {item.institution}
                    </p>

                    {/* Badge status */}
                    <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-950 border border-zinc-850 text-xs font-mono text-zinc-300">
                      <BadgeCheck className="w-3.5 h-3.5 text-cyan-400" />
                      {item.gpaOrStatus}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-cyan-400" />
              <h3 className="font-serif font-normal text-xl text-white">Professional Certifications</h3>
            </div>

            <div className="space-y-4">
              {CERTIFICATION_ITEMS.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900/40 border border-zinc-800 p-5 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 group flex items-start gap-4"
                >
                  {/* Decorative badge icon with custom glow */}
                  <div className="w-10 h-10 rounded-xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0 shadow-md shadow-black/10">
                    <Award className="w-5 h-5" />
                  </div>

                  {/* Cert details */}
                  <div className="space-y-1">
                    <h4 className="font-serif font-normal text-base text-zinc-150 group-hover:text-cyan-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-zinc-400 font-sans">
                      {cert.issuer}
                    </p>
                    {cert.date && (
                      <p className="text-[10px] font-mono text-zinc-500 pt-1">
                        {cert.date}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
