import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, ArrowRight, CheckCircle } from 'lucide-react';

interface SkillsSummaryProps {
  onNavigate?: (page: string) => void;
}

const SkillsSummary: React.FC<SkillsSummaryProps> = ({ onNavigate }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

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
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-vibe-sienna via-vibe-blue to-vibe-purple bg-clip-text text-transparent">
              Ed Miller
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-2xl lg:text-3xl font-semibold text-vibe-blue mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Principal Product Designer
          </motion.h2>

          {/* Improved text layout with better contrast */}
          <motion.div 
            className="max-w-5xl mx-auto text-lg lg:text-xl text-vibe-text leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="max-w-4xl mx-auto">
              Data-driven Principal Product Designer with 15+ years of progressive experience at Microsoft, 
              specializing in AI-powered user experiences, data visualization, and growth-oriented design solutions.
            </p>
            <p className="max-w-4xl mx-auto">
              Proven expertise in leveraging data insights to create innovative experiences across Microsoft 365 
              ecosystem, with deep experience in Generative AI, Large Language Models (LLM), and machine learning 
              integration. Adept at collaborating with cross-functional teams including Data Science, AI/ML, 
              Product Management, Engineering, and Research teams to deliver exceptional solutions that drive user 
              engagement, satisfaction, and business growth through data-informed design decisions and rapid 
              prototyping experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Case Study Buttons - Improved accessibility */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              onClick={() => handleNavigate('copilot-case-study')}
              className="group flex items-center gap-4 px-8 py-6 bg-vibe-sienna text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[280px] focus:outline-none focus:ring-4 focus:ring-vibe-sienna/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View Microsoft Copilot AI Integration Case Study"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold">Microsoft Copilot</div>
                <div className="text-sm opacity-90">AI Integration Case Study</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => handleNavigate('data-activator-case-study')}
              className="group flex items-center gap-4 px-8 py-6 bg-vibe-blue text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 min-w-[280px] focus:outline-none focus:ring-4 focus:ring-vibe-blue/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="View Data Activator 0-1 Product Case Study"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Database className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-bold">Data Activator</div>
                <div className="text-sm opacity-90">0-1 Product Case Study</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>

        {/* Core Competencies - Better formatted with category/details structure */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-vibe-text">
            Core Competencies
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreCompetencies.map((competency, index) => (
                <motion.div
                  key={competency.category}
                  className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <CheckCircle className="w-6 h-6 text-vibe-sienna mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="text-vibe-text font-semibold text-lg mb-1">
                      {competency.category}
                    </h4>
                    <p className="text-vibe-text-dim text-sm leading-relaxed">
                      {competency.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action - Improved accessibility */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          <motion.button
            className="px-12 py-6 bg-gradient-to-r from-vibe-blue to-vibe-purple rounded-full font-bold text-xl text-white shadow-2xl hover:shadow-3xl transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-vibe-blue/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('case-studies');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            aria-label="Explore my work and case studies"
          >
            Explore My Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSummary;