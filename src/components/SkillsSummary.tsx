import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, ArrowRight, CheckCircle } from 'lucide-react';

interface SkillsSummaryProps {
  onNavigate?: (page: string) => void;
}

const SkillsSummary: React.FC<SkillsSummaryProps> = ({ onNavigate }) => {
  const coreCompetencies = [
    {
      category: "AI Integration and Prototyping",
      details: "Microsoft Copilot • LLM • Generative AI"
    },
    {
      category: "Data Visualization", 
      details: "SQL Server • Analytics • Real-time Processing"
    },
    {
      category: "Enterprise Scale",
      details: "Microsoft 365 ecosystem"
    },
    {
      category: "Design Leadership",
      details: "Team mentoring • Best practices"
    },
    {
      category: "Technical Collaboration",
      details: "Engineering • Product teams"
    },
    {
      category: "Innovation Focus",
      details: "Generative AI • LLM integration"
    }
  ];

  const handleNavigate = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <section>
      {/* Full-width, full-height hero section */}
      <div className="h-10 w-full" />
      <div className="w-full h-[calc(100vh-40px)] flex flex-col md:flex-row items-stretch m-0 p-0 overflow-hidden relative" style={{ background: 'linear-gradient(90deg, #232323 60%, #2d2d2d 100%)' }}>
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0" />
        {/* Left: Full-height profile image */}
        <div
          className="hidden md:block md:w-5/12 h-full z-10 bg-cover bg-left-top min-w-0"
          style={{ backgroundImage: "url('profile.jpg')" }}
        />
        {/* Right: Greeting and content */}
        <div className="w-full md:w-7/12 flex flex-col justify-center items-stretch px-8 py-16 md:py-0 md:pr-32 md:pl-16 gap-6 z-10 min-w-0">
          <h3 className="text-lg md:text-xl text-white/70 mb-2">Experience Designer — Seattle, WA</h3>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-2 w-full">
            <motion.span
              style={{ display: 'inline-block', originX: 0.7, originY: 0.7 }}
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, -5, 0] }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              aria-label="waving hand"
              role="img"
            >
              👋
            </motion.span>{' '}
            Hi, I’m Ed Miller
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-4">
            A data-driven Experience Designer with 15+ years of progressive experience at Microsoft, specializing in AI-powered user experiences, prototyping, and innovative design solutions.
          </p>
          <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
            With a background spanning user interface development, immersive 3D design, and AI-integrated UX for enterprise tools. My focus is on AI innovation, storytelling through interaction, and solving complex challenges for real users. I'm a huge believer in building as a path to learning and thrive on collaboration across disciplines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 bg-white text-primary-accent font-bold rounded-full shadow-md hover:bg-gray-100 transition-colors duration-150 text-lg"
              onClick={() => {
                const element = document.getElementById('projects');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              aria-label="Explore my work and projects"
            >
              Explore some projects
            </button>
            <a
              href="mailto:edmill@outlook.com"
              className="px-8 py-4 bg-primary-accent text-white font-bold rounded-full shadow-md hover:bg-primary transition-colors duration-150 text-lg flex items-center justify-center"
              aria-label="Send email to Ed Miller"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      {/* Case Study Buttons */}
      {/* Removed case study buttons as requested */}
      {/* Core Competencies */}
      {/*
      <div className="mb-16">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Core Competencies</h3>
        <div className="overflow-x-auto">
          <table className="mx-auto min-w-[500px] max-w-3xl w-full text-left text-white/90 text-lg">
            <tbody>
              {coreCompetencies.map((competency) => (
                <tr key={competency.category} className="align-top">
                  <td className="pr-8 py-2 font-semibold text-white whitespace-nowrap">{competency.category}</td>
                  <td className="py-2 text-white/80 text-base">{competency.details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      */}
    </section>
  );
};

export default SkillsSummary;