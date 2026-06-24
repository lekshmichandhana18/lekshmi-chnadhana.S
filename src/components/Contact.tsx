import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormState("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    setFormState("submitting");

    // Simulate sending message
    setTimeout(() => {
      setFormState("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-12 left-12 w-96 h-96 rounded-full bg-zinc-800/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            Connect
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-sm sm:text-base">
            Have a question, a project idea, or just want to say hello? Drop me a message!
          </p>
          <div className="h-[1px] w-12 bg-cyan-500/40 mx-auto mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif font-normal text-2xl text-white">
                Contact Information
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-sans">
                I'm always excited to connect with other developers, students, and professionals in the software development and AI space. Feel free to reach out via email or connect through my social profiles.
              </p>

              {/* Direct Info List */}
              <div className="space-y-4 pt-4">
                
                {/* Email Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Email</p>
                    <a
                      href="mailto:lekshmichandhana2006@gmail.com"
                      className="text-sm sm:text-base text-zinc-300 hover:text-cyan-400 transition-colors font-medium break-all"
                    >
                      lekshmichandhana2006@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Location</p>
                    <p className="text-sm sm:text-base text-zinc-300 font-medium">
                      Kollam, Kerala, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Block */}
            <div className="space-y-4 pt-6 lg:pt-0 border-t border-zinc-900/60">
              <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                Online Platforms
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/lekshmichandhana18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-zinc-850 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/lekshmi-chandhana-222820339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-zinc-850 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900/40 border border-zinc-800 p-6 sm:p-8 rounded-2xl relative">
              <h3 className="font-serif font-normal text-xl text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    disabled={formState === "submitting" || formState === "success"}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 focus:border-cyan-500 focus:outline-none text-zinc-150 text-sm transition-all placeholder:text-zinc-600 disabled:opacity-50"
                  />
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    disabled={formState === "submitting" || formState === "success"}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 focus:border-cyan-500 focus:outline-none text-zinc-150 text-sm transition-all placeholder:text-zinc-600 disabled:opacity-50"
                  />
                </div>

                {/* Subject field */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Collaboration, Question, Project Idea"
                    disabled={formState === "submitting" || formState === "success"}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 focus:border-cyan-500 focus:outline-none text-zinc-150 text-sm transition-all placeholder:text-zinc-600 disabled:opacity-50"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    disabled={formState === "submitting" || formState === "success"}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-850 focus:border-cyan-500 focus:outline-none text-zinc-150 text-sm transition-all placeholder:text-zinc-600 disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Status/Alert Banners */}
                <AnimatePresence>
                  {formState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-rose-950/40 border border-rose-500/20 text-rose-300 text-sm"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <p>{errorMessage}</p>
                    </motion.div>
                  )}

                  {formState === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/20 text-emerald-300 text-sm"
                    >
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <p>Message sent successfully! I will get back to you soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === "submitting" || formState === "success"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cyan-500 font-serif font-normal text-black shadow-lg hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
                >
                  {formState === "submitting" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : formState === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 animate-bounce" />
                      Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
