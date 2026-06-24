/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Strengths from "./components/Strengths";
import EducationCertifications from "./components/EducationCertifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#050505] text-[#e0e0e0] min-h-screen selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* About Background Narrative Section */}
        <About />

        {/* Grid of Capabilities / Skills Section */}
        <Skills />

        {/* Featured Projects Cards Section */}
        <Projects />

        {/* Core Values / Strengths Cards Section */}
        <Strengths />

        {/* Education Timeline and Certifications Grid Section */}
        <EducationCertifications />

        {/* Glassmorphic Connection Contact Form Section */}
        <Contact />
      </main>

      {/* Footer Branding & Social Linkage */}
      <Footer />
    </div>
  );
}
