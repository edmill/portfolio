import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Zap, 
  Eye, 
  Target, 
  Brain, 
  Database, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Lightbulb,
  Code,
  Search,
  MessageSquare,
  Sparkles,
  Calendar,
  UserCheck,
  Building,
  Workflow
} from 'lucide-react';
import Lightbox from './Lightbox';

interface CopilotCaseStudyProps {
  onNavigate?: (page: string) => void;
}

const CopilotCaseStudy: React.FC<CopilotCaseStudyProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });
  
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (src: string, alt: string) => {
    setLightboxImage({ src, alt });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage({ src: '', alt: '' });
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'process', label: 'Design Process', icon: Target },
    { id: 'solution', label: 'Solution', icon: Lightbulb },
    { id: 'results', label: 'Results', icon: TrendingUp }
  ];

  const keyMetrics = [
    { icon: Users, value: "73%", label: "User Adoption", description: "Of eligible users actively using AI features" },
    { icon: Zap, value: "94%", label: "Query Accuracy", description: "Of AI-generated queries execute successfully" },
    { icon: Clock, value: "35%", label: "Time Savings", description: "Reduction in routine query writing time" },
    { icon: Eye, value: "4.2/5", label: "User Satisfaction", description: "Average rating in post-integration surveys" }
  ];

  const challenges = [
    {
      title: "Complex Technical Environment",
      description: "SSMS is a sophisticated tool used by database professionals with varying skill levels and workflows, requiring careful integration that doesn't disrupt existing patterns."
    },
    {
      title: "AI Integration Complexity",
      description: "Seamlessly integrating Copilot capabilities without overwhelming users or creating cognitive overload in an already feature-rich environment."
    },
    {
      title: "Scale & Performance",
      description: "Ensuring the solution works efficiently for 9+ million monthly active users while maintaining SSMS's performance standards."
    },
    {
      title: "User Adoption & Trust",
      description: "Building confidence in AI suggestions among database professionals who require high accuracy and reliability in their work."
    }
  ];

  const designPrinciples = [
    {
      icon: Brain,
      title: "AI-First Thinking",
      description: "Designed interactions that feel natural and enhance human capabilities, making AI suggestions contextually relevant and actionable."
    },
    {
      icon: Database,
      title: "Context Awareness",
      description: "Leveraged database schema, query history, and current workspace context to provide highly relevant AI suggestions."
    },
    {
      icon: Users,
      title: "Progressive Disclosure",
      description: "Introduced AI features gradually through discoverable entry points that don't overwhelm existing workflows."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Ensured AI features enhance rather than hinder database management workflows with minimal latency."
    }
  ];

  const solutionFeatures = [
    {
      title: "Intelligent Query Assistance",
      description: "AI-powered suggestions for SQL query optimization, completion, and error detection with contextual explanations.",
      impact: "94% query accuracy"
    },
    {
      title: "Natural Language to SQL",
      description: "Convert plain English descriptions into SQL queries, making database operations accessible to broader audiences.",
      impact: "73% user adoption"
    },
    {
      title: "Smart Query Optimization",
      description: "AI-driven analysis of query performance with specific optimization recommendations and execution plan insights.",
      impact: "35% time savings"
    },
    {
      title: "Contextual Help & Learning",
      description: "Dynamic help system that adapts to user's current database context, skill level, and task progression.",
      impact: "4.2/5 satisfaction"
    },
    {
      title: "Proactive Error Prevention",
      description: "Real-time detection of potential issues with suggested fixes before query execution, preventing costly mistakes.",
      impact: "94% success rate"
    }
  ];

  const researchInsights = [
    {
      title: "User Interviews & Observations",
      description: "Conducted 15 interviews with database administrators, developers, and analysts across enterprise and SMB environments.",
      findings: [
        "Users spend 40% of time debugging and optimizing queries",
        "Context switching between documentation and SSMS breaks flow",
        "Fear of AI making incorrect suggestions in production environments",
        "Strong preference for understanding 'why' behind AI recommendations"
      ]
    },
    {
      title: "Usage Analytics & Behavioral Data",
      description: "Analyzed SSMS usage patterns across 9M+ users to identify optimization opportunities and feature gaps.",
      findings: [
        "Most common queries follow predictable patterns",
        "Users frequently repeat similar query structures",
        "Error rates highest during complex join operations",
        "Help documentation accessed most during query writing"
      ]
    },
    {
      title: "Competitive Analysis & Market Research",
      description: "Evaluated AI integration approaches in developer tools and database management platforms.",
      findings: [
        "Most AI tools lack database-specific context",
        "Generic code completion doesn't address SQL nuances",
        "Users prefer inline suggestions over separate AI panels",
        "Trust built through transparency and explainability"
      ]
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Project Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-primary-accent/10 to-primary-accent/5 rounded-3xl border-2 border-primary-accent/20">
                <div className="flex items-center gap-3 mb-3">
                  <UserCheck className="w-6 h-6 text-primary-accent" />
                  <h4 className="font-semibold text-gray-700">My Role</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Principal Product Designer</strong> - Solo designer leading UX strategy, design direction, and cross-functional collaboration for Microsoft Copilot integration into SSMS
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-indigo-50/10 to-indigo-50/5 rounded-3xl border-2 border-indigo-200">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-6 h-6 text-indigo-600" />
                  <h4 className="font-semibold text-gray-700">Team Collaboration</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cross-functional team of <strong>12 members</strong>: 1 UX designer (me), 6 engineers, 2 product managers, 2 data scientists, 1 user researcher
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-purple-50/10 to-purple-50/5 rounded-3xl border-2 border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-gray-700">Project Duration</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>18 months</strong><br />
                  November 2023 - May 2025
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As the sole Principal Product Designer, I led the UX integration of Microsoft Copilot capabilities 
                  into SQL Server Management Studio (SSMS), Microsoft's flagship product for database professionals. 
                  This project aimed to bring AI-powered assistance to database professionals while maintaining 
                  the robust functionality and performance they depend on.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The challenge was to seamlessly integrate advanced AI capabilities into a mature, feature-rich 
                  application used by millions of database professionals worldwide, without disrupting existing 
                  workflows or overwhelming users with new complexity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Led design strategy as the sole UX designer on a cross-functional team of 12</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Conducted extensive user research with 15 database professionals</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Delivered solution reaching 9+ million monthly active users</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-accent mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Achieved 73% adoption rate among eligible users</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Key Challenges</h3>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.title}
                      className="p-4 bg-gray-50 rounded-3xl border-2 border-gray-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-gray-700 mb-2">{challenge.title}</h4>
                      <p className="text-sm text-gray-600">{challenge.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Design Process & Methodology</h3>
            
            {/* Design Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="p-6 bg-white rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-accent/20 to-indigo-200 rounded-3xl flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-primary-accent" />
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-3">{principle.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Research & Discovery */}
            <div>
              <h4 className="text-xl font-bold text-gray-700 mb-6">Research & Discovery</h4>
              <div className="space-y-6">
                {researchInsights.map((insight, index) => (
                  <motion.div
                    key={insight.title}
                    className="p-6 bg-gray-50 rounded-3xl border-2 border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    <h5 className="font-semibold text-primary-accent mb-3">{insight.title}</h5>
                    <p className="text-gray-600 text-sm mb-4">{insight.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {insight.findings.map((finding, findingIndex) => (
                        <div key={findingIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary-accent flex-shrink-0 mt-2" />
                          <span className="text-sm text-gray-600">{finding}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Solution Architecture</h3>
            
            {/* Solution Features */}
            <div className="space-y-6 mb-12">
              {solutionFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 bg-white rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-700 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-bold text-primary-accent">{feature.impact}</div>
                      <div className="text-sm text-gray-600">Impact</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* User Flow & Visual Design Section */}
            <motion.div
              className="p-8 bg-gradient-to-br from-primary-accent/5 to-indigo-50 rounded-3xl border-2 border-primary-accent/20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-accent/20 to-indigo-200 rounded-3xl flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-primary-accent" />
                </div>
                <h4 className="text-2xl font-bold text-gray-700">SSMS Copilot Integration</h4>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                The complete integration of Microsoft Copilot into SQL Server Management Studio, showcasing how AI capabilities 
                are seamlessly woven into existing database management workflows. This design demonstrates contextual AI assistance 
                that enhances productivity without disrupting familiar user patterns.
              </p>

              {/* Clickable Image Section */}
              <div 
                className="relative group cursor-pointer"
                onClick={() => openLightbox(
                  import.meta.env.BASE_URL + 'ssms.jpg', 
                  'Microsoft Copilot integration in SQL Server Management Studio - showing AI-powered query assistance, contextual suggestions, and natural language to SQL conversion capabilities seamlessly integrated into the SSMS interface'
                )}
              >
                <div className="bg-white rounded-3xl border-2 border-gray-200 p-4 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img 
                    src={import.meta.env.BASE_URL + 'ssms.jpg'} 
                    alt="Microsoft Copilot integration in SQL Server Management Studio - showing AI-powered query assistance, contextual suggestions, and natural language to SQL conversion capabilities seamlessly integrated into the SSMS interface"
                    className="w-full h-auto rounded-3xl border-2 border-primary-accent/20 hover:border-primary-accent/40 transition-all duration-300"
                  />
                </div>
                
                {/* Click to zoom overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-accent/5 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-primary-accent/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                    Click to zoom
                  </div>
                </div>
              </div>

              {/* Integration Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-white rounded-3xl border-2 border-gray-200">
                  <h6 className="font-semibold text-primary-accent mb-2">Contextual Integration</h6>
                  <p className="text-sm text-gray-600">AI features appear naturally within existing SSMS workflows, maintaining familiar interaction patterns</p>
                </div>
                <div className="p-4 bg-white rounded-3xl border-2 border-gray-200">
                  <h6 className="font-semibold text-primary-accent mb-2">Smart Assistance</h6>
                  <p className="text-sm text-gray-600">Context-aware suggestions based on database schema, query history, and current workspace</p>
                </div>
                <div className="p-4 bg-white rounded-3xl border-2 border-gray-200">
                  <h6 className="font-semibold text-primary-accent mb-2">Performance Focus</h6>
                  <p className="text-sm text-gray-600">Optimized for enterprise-scale usage with minimal impact on SSMS performance</p>
                </div>
              </div>
            </motion.div>

            <div className="mt-12 p-8 bg-gradient-to-br from-primary-accent/10 to-indigo-100 rounded-3xl border-2 border-primary-accent/20">
              <h4 className="text-xl font-bold text-gray-700 mb-4">Design Innovation</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                The key innovation was creating a contextual AI assistant that understands not just the SQL being written, 
                but the entire database environment, user's role, and current task. This allowed us to provide highly 
                relevant suggestions that feel like having an expert colleague looking over your shoulder, rather than 
                a generic AI tool.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We implemented a progressive disclosure model where AI features are introduced through natural entry points 
                in existing workflows, building user confidence and trust over time. The system learns from user interactions 
                to provide increasingly personalized and accurate suggestions.
              </p>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Impact & Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center p-6 bg-white rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-accent/20 to-indigo-200 rounded-3xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-primary-accent" />
                  </div>
                  <div className="text-3xl font-black text-primary-accent mb-2">{metric.value}</div>
                  <div className="font-semibold text-gray-700 mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="p-6 bg-gray-50 rounded-3xl border-2 border-gray-200 mt-12">
              <h4 className="text-xl font-bold text-gray-700 mb-4">Business Impact</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  The integration exceeded adoption goals while maintaining user trust
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  73% of eligible users actively using AI features within 6 months of launch
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  94% query accuracy rate demonstrates high reliability and user confidence
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  35% reduction in routine query writing time improves developer productivity
                </li>
                <li className="flex items-start gap-2">
                  <TrendingUp className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  4.2/5 user satisfaction rating indicates strong positive reception
                </li>
              </ul>
            </div>

            {/* Customer Testimonials */}
            <div className="space-y-6 mt-12">
              <h4 className="text-xl font-bold text-gray-700 mb-6">Customer Feedback</h4>
              
              {/* First Testimonial */}
              <div className="p-6 bg-gradient-to-r from-primary-accent/10 to-indigo-100 rounded-3xl border-2 border-primary-accent/20">
                <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                  "So glad to see this come to fruition like this. Such a huge milestone for the future of database management. :)"
                </blockquote>
                <cite className="text-sm text-primary-accent font-medium">
                  — LinkedIn Community Response to Copilot Integration Announcement
                </cite>
              </div>

              {/* Second Testimonial */}
              <div className="p-6 bg-gradient-to-r from-indigo-50/10 to-purple-50/10 rounded-3xl border-2 border-indigo-200">
                <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                  "The real power would be within the SSMS, with access to table definitions, SP's etc. I could see this saving me hours of dev time."
                </blockquote>
                <cite className="text-sm text-indigo-600 font-medium">
                  — Database Developer, Enterprise Customer Feedback
                </cite>
              </div>

              {/* Third Testimonial */}
              <div className="p-6 bg-gradient-to-r from-purple-50/10 to-primary-accent/10 rounded-3xl border-2 border-purple-200">
                <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                  "The ability to generate schema-specific queries through natural language could revolutionize how junior developers interact with complex databases."
                </blockquote>
                <cite className="text-sm text-purple-600 font-medium">
                  — Senior Database Developer, User Research Participant
                </cite>
              </div>

              {/* Additional Context */}
              <div className="p-6 bg-white rounded-3xl border-2 border-gray-200">
                <p className="text-gray-600 text-sm leading-relaxed">
                  These comments highlight the community excitement around future possibilities rather than current functionality. 
                  Users particularly praised the concept of context-aware SQL generation, with Microsoft's documentation 
                  emphasizing this potential through scenarios like multi-turn query refinement and environment exploration.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-32 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-800/80 rounded-full text-white font-medium mb-6 border-2 border-indigo-800/40">
                <Brain className="w-4 h-4" />
                AI Integration Case Study
              </div>
              <h1 className="text-4xl lg:text-6xl font-black mb-6 text-gray-700">
                <span className="bg-gradient-to-r from-primary-accent to-indigo-600 bg-clip-text text-transparent">
                  Microsoft Copilot
                </span>
                <br />
                <span className="text-gray-700">Integration for SSMS</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" style={{ paddingLeft: '20px' }}>
                Bringing AI-powered assistance to 9+ million database professionals through thoughtful UX design 
                and seamless integration with existing workflows.
              </p>
            </motion.div>

            {/* Key Metrics Overview */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {keyMetrics.map((metric, index) => (
                <div key={metric.label} className="text-center p-6 bg-white rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <metric.icon className="w-8 h-8 text-primary-accent mx-auto mb-3" />
                  <div className="text-2xl lg:text-3xl font-black text-primary-accent mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-gray-700">{metric.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section ref={ref} className="py-16 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-accent to-indigo-600 text-white shadow-lg focus:ring-primary-accent/50'
                      : 'bg-gray-100 text-gray-600 hover:text-gray-700 border-2 border-gray-200 hover:border-gray-300 focus:ring-gray-300'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderTabContent()}
            </motion.div>
          </div>
        </section>

        {/* Next Steps / CTA */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-700 mb-6">
                Interested in Learning More?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                This case study represents just one aspect of my work in AI-powered design solutions. 
                I'd love to discuss how similar approaches could benefit your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => onNavigate?.('data-activator-case-study')}
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center focus:outline-none focus:ring-4 focus:ring-indigo-600/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Data Activator Case Study
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-primary-accent text-primary-accent rounded-full font-semibold hover:bg-primary-accent hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-accent/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        imageSrc={lightboxImage.src}
        imageAlt={lightboxImage.alt}
        onClose={closeLightbox}
      />
    </>
  );
};

export default CopilotCaseStudy;