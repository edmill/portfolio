import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Eye, Users, Zap } from 'lucide-react';

interface CaseStudyPreviewProps {
  onNavigate: (page: string) => void;
}

const CaseStudyPreview: React.FC<CaseStudyPreviewProps> = ({ onNavigate }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const caseStudies = [
    {
      id: 'copilot-case-study',
      title: "Microsoft Copilot Integration",
      subtitle: "AI-Powered SQL Server Management Studio",
      description: "Led UX integration design bringing Microsoft Copilot capabilities to 9+ million monthly active users, resulting in significant productivity improvements.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Case Study", "AI Integration", "Microsoft Copilot", "SSMS"],
      metrics: [
        { icon: Users, value: "9M+", label: "Monthly Users" },
        { icon: Zap, value: "40%", label: "Productivity Gain" },
        { icon: Eye, value: "4.8/5", label: "User Rating" }
      ],
      color: "sienna"
    },
    {
      id: 'data-activator-case-study',
      title: "Data Activator Experience",
      subtitle: "Real-Time Data Processing & Analytics",
      description: "Designed comprehensive Data Activator creation experience for real-time data processing and analytics, enabling enterprise-scale data insights.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Case Study", "Data Analytics", "Real-Time Processing", "Enterprise"],
      metrics: [
        { icon: Eye, value: "60%", label: "Faster Insights" },
        { icon: Users, value: "Enterprise", label: "Scale" },
        { icon: Zap, value: "Real-Time", label: "Processing" }
      ],
      color: "blue"
    }
  ];

  return (
    <section ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-vibe-gray">
            <span className="bg-gradient-to-r from-vibe-sienna to-vibe-blue bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Deep dives into AI-powered solutions that transformed user experiences at enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden rounded-3xl bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-lg hover:shadow-xl">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Tags with high contrast */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {study.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full font-semibold transition-all duration-300 ${
                          tag === "Case Study" 
                            ? "bg-white text-vibe-gray shadow-lg" 
                            : "bg-black/70 text-white backdrop-blur-sm"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content with high contrast */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-vibe-gray mb-2 text-center">
                    {study.title}
                  </h3>
                  <h4 className={`text-lg font-semibold mb-4 text-center ${getTextColorClass(study.color)}`}>
                    {study.subtitle}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6 text-center">
                    {study.description}
                  </p>

                  {/* Metrics with improved contrast */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center mb-2">
                          <metric.icon className={`w-5 h-5 ${getTextColorClass(study.color)}`} />
                        </div>
                        <div className="text-xl font-bold text-vibe-gray">
                          {metric.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA with high contrast */}
                  <motion.button
                    onClick={() => onNavigate(study.id)}
                    className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 group/btn text-white shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 ${getButtonClasses(study.color)}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={`View ${study.title} case study`}
                  >
                    View Case Study
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getTextColorClass(color: string): string {
  switch (color) {
    case 'sienna':
      return 'text-vibe-sienna';
    case 'blue':
      return 'text-vibe-blue';
    case 'purple':
      return 'text-vibe-purple';
    default:
      return 'text-vibe-sienna';
  }
}

function getButtonClasses(color: string): string {
  switch (color) {
    case 'sienna':
      return 'bg-vibe-sienna hover:bg-vibe-sienna/90 focus:ring-vibe-sienna/50';
    case 'blue':
      return 'bg-vibe-blue hover:bg-vibe-blue/90 focus:ring-vibe-blue/50';
    case 'purple':
      return 'bg-vibe-purple hover:bg-vibe-purple/90 focus:ring-vibe-purple/50';
    default:
      return 'bg-vibe-sienna hover:bg-vibe-sienna/90 focus:ring-vibe-sienna/50';
  }
}

export default CaseStudyPreview;