import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Database, 
  Zap, 
  Eye, 
  Target, 
  BarChart3, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Users,
  Award,
  Lightbulb,
  Activity,
  Calendar,
  UserCheck,
  Building,
  Workflow
} from 'lucide-react';
import Lightbox from './Lightbox';

interface DataActivatorCaseStudyProps {
  onNavigate?: (page: string) => void;
}

const DataActivatorCaseStudy: React.FC<DataActivatorCaseStudyProps> = ({ onNavigate }) => {
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
    { icon: Clock, value: "60%", label: "Faster Insights", description: "Time to actionable data insights" },
    { icon: Users, value: "Enterprise", label: "Scale", description: "Built for enterprise-level data" },
    { icon: Activity, value: "Real-Time", label: "Processing", description: "Live data monitoring & alerts" },
    { icon: BarChart3, value: "85%", label: "Adoption Rate", description: "Among beta enterprise customers" }
  ];

  const challenges = [
    {
      title: "0-1 Product Development",
      description: "Building a completely new product category from concept to enterprise deployment, requiring extensive market research and user validation to define the product vision."
    },
    {
      title: "Complex Data Workflows",
      description: "Enterprise users needed to monitor multiple data sources with varying update frequencies and formats, requiring a unified approach to data integration."
    },
    {
      title: "Real-Time Requirements",
      description: "Business-critical decisions required immediate alerts when data thresholds were crossed, demanding low-latency processing and reliable notification systems."
    },
    {
      title: "Non-Technical Users",
      description: "Business analysts needed powerful data monitoring capabilities without requiring SQL knowledge or coding expertise, necessitating intuitive visual interfaces."
    },
    {
      title: "Enterprise Scalability",
      description: "Solution needed to handle enterprise-scale data volumes while maintaining performance and providing role-based access controls for large organizations."
    }
  ];

  const designPrinciples = [
    {
      icon: Database,
      title: "Data-First Design",
      description: "Built interfaces that prioritize data clarity and actionable insights over visual complexity, ensuring users can quickly understand and act on information."
    },
    {
      icon: Zap,
      title: "Progressive Complexity",
      description: "Started with simple monitoring setups that could evolve into sophisticated data pipelines, allowing users to grow their expertise gradually."
    },
    {
      icon: Users,
      title: "Role-Based Experience",
      description: "Tailored interfaces for different user types: business analysts, data engineers, and administrators, each with appropriate tools and permissions."
    },
    {
      icon: Activity,
      title: "Real-Time Feedback",
      description: "Provided immediate visual feedback for data changes, system status updates, and user actions to maintain confidence and awareness."
    }
  ];

  const solutionFeatures = [
    {
      title: "Visual Data Flow Builder",
      description: "Drag-and-drop interface for creating complex data monitoring workflows without code, featuring smart connectors and validation.",
      impact: "70% reduction in setup time"
    },
    {
      title: "Smart Alert System",
      description: "AI-powered alert prioritization that learns from user behavior and reduces noise, with customizable escalation paths.",
      impact: "50% fewer false positives"
    },
    {
      title: "Real-Time Dashboard",
      description: "Live updating visualizations with customizable views for different stakeholder needs and responsive design for mobile access.",
      impact: "40% faster decision making"
    },
    {
      title: "Collaborative Monitoring",
      description: "Team-based data monitoring with role-based permissions, shared alert management, and collaborative annotation features.",
      impact: "60% improvement in team coordination"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Project Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="p-6 bg-gradient-to-br from-vibe-blue/10 to-vibe-blue/5 rounded-xl border-2 border-vibe-blue/20">
                <div className="flex items-center gap-3 mb-3">
                  <UserCheck className="w-6 h-6 text-vibe-blue" />
                  <h4 className="font-semibold text-vibe-gray">My Role</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>Principal Product Designer</strong> - Led end-to-end UX design for Data Activator platform, from concept to enterprise deployment
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-vibe-purple/10 to-vibe-purple/5 rounded-xl border-2 border-vibe-purple/20">
                <div className="flex items-center gap-3 mb-3">
                  <Building className="w-6 h-6 text-vibe-purple" />
                  <h4 className="font-semibold text-vibe-gray">Team Collaboration</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cross-functional team of <strong>15 members</strong>: 4 UX designers, 6 engineers, 2 product managers, 2 data scientists, 1 user researcher
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-vibe-sienna/10 to-vibe-sienna/5 rounded-xl border-2 border-vibe-sienna/20">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-vibe-sienna" />
                  <h4 className="font-semibold text-vibe-gray">Project Duration</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong>9 months</strong><br />
                  May 2022 - January 2023
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-vibe-gray mb-4">Project Overview</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As Principal Product Designer for Data Activator, I led the design of a comprehensive 
                  real-time data processing and analytics platform. This was a <strong>0-1 product development</strong> project, 
                  where we built a completely new product category from concept to enterprise deployment. 
                  The goal was to democratize data monitoring for enterprise users, enabling business analysts 
                  to create sophisticated data workflows without technical expertise.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This project required deep collaboration with data scientists, enterprise customers, and 
                  engineering teams to create a platform that could handle massive data volumes while 
                  remaining intuitive for non-technical users. The challenge was balancing power with simplicity 
                  while establishing an entirely new product category in the market.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vibe-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Led the design for the end-to-end user flow for a 0-1 product</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vibe-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Awarded 1 US Patent for <strong>Techniques for ingesting time-series data</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vibe-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Achieved &gt; 80% user adoption among beta enterprise customers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-vibe-blue mt-1 flex-shrink-0" />
                    <span className="text-gray-600">Reduced operational cost by 20% for early adopters</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-vibe-gray mb-4">Key Challenges</h3>
                <div className="space-y-4">
                  {challenges.map((challenge, index) => (
                    <motion.div
                      key={challenge.title}
                      className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h4 className="font-semibold text-vibe-gray mb-2">{challenge.title}</h4>
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
            <h3 className="text-2xl font-bold text-vibe-gray mb-6">Design Process & Methodology</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-vibe-blue/20 to-vibe-purple/20 rounded-xl flex items-center justify-center mb-4">
                    <principle.icon className="w-6 h-6 text-vibe-blue" />
                  </div>
                  <h4 className="font-semibold text-vibe-gray mb-3">{principle.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12">
              <h4 className="text-xl font-bold text-vibe-gray mb-6">Research & Discovery</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <h5 className="font-semibold text-vibe-blue mb-3">Stakeholder Workshop</h5>
                  <p className="text-gray-600 text-sm mb-4">Facilitated design workshops with key stakeholders including VP, GM, GPM, GEM, Eng, PM, UX, and Research teams to align on product vision and requirements.</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Current tool limitations and workarounds</li>
                    <li>• Critical business metrics and thresholds</li>
                    <li>• Team collaboration patterns</li>
                    <li>• Escalation and notification preferences</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <h5 className="font-semibold text-vibe-purple mb-3">Behavioral Analysis</h5>
                  <p className="text-gray-600 text-sm mb-4">Analyzed existing data tool usage patterns to identify opportunities for workflow optimization and automation.</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Time spent on manual monitoring tasks</li>
                    <li>• Common data source combinations</li>
                    <li>• Alert fatigue and response patterns</li>
                    <li>• Cross-platform workflow inefficiencies</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                  <h5 className="font-semibold text-vibe-sienna mb-3">Private Preview Testing</h5>
                  <p className="text-gray-600 text-sm mb-4">Conducted iterative usability testing with Private Preview customers to validate design decisions and interaction patterns.</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Visual workflow builder usability</li>
                    <li>• Alert configuration complexity</li>
                    <li>• Dashboard customization preferences</li>
                    <li>• Mobile experience requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'solution':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-vibe-gray mb-6">Solution Architecture</h3>
            
            {/* Solution Features */}
            <div className="space-y-6 mb-12">
              {solutionFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-vibe-gray mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">{feature.description}</p>
                    </div>
                    <div className="ml-6 text-right">
                      <div className="text-2xl font-bold text-vibe-blue">{feature.impact}</div>
                      <div className="text-sm text-gray-600">Impact</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sketchy Design Exploration Section */}
            <motion.div
              className="p-8 bg-gradient-to-br from-vibe-purple/5 to-vibe-blue/5 rounded-3xl border-2 border-vibe-purple/20 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-vibe-purple/20 to-vibe-blue/20 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-vibe-purple" />
                </div>
                <h4 className="text-2xl font-bold text-vibe-gray">Design Exploration & Ideation</h4>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Early design exploration focused on understanding complex data relationships and user mental models. 
                Through sketching and rapid prototyping, I explored various approaches to visualizing real-time data flows 
                and making complex analytics accessible to non-technical users.
              </p>

              {/* Clickable Sketchy Image */}
              <div 
                className="relative group cursor-pointer"
                onClick={() => openLightbox(
                  '/sketchy.png', 
                  'Early design sketches and wireframes for Data Activator showing exploration of user interface concepts, data flow visualization, and interaction patterns for real-time analytics platform'
                )}
              >
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img 
                    src="/sketchy.png" 
                    alt="Early design sketches and wireframes for Data Activator showing exploration of user interface concepts, data flow visualization, and interaction patterns for real-time analytics platform"
                    className="w-full h-auto rounded-xl border-2 border-vibe-purple/20 hover:border-vibe-purple/40 transition-all duration-300"
                  />
                </div>
                
                {/* Click to zoom overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-vibe-purple/5 to-vibe-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-vibe-purple/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                    Click to zoom
                  </div>
                </div>
              </div>

              {/* Design Process Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 bg-white rounded-xl border-2 border-gray-200">
                  <h6 className="font-semibold text-vibe-purple mb-2">Rapid Ideation</h6>
                  <p className="text-sm text-gray-600">Explored multiple interface concepts through sketching and low-fidelity prototypes</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-2 border-gray-200">
                  <h6 className="font-semibold text-vibe-purple mb-2">User Mental Models</h6>
                  <p className="text-sm text-gray-600">Mapped how users conceptualize data relationships and monitoring workflows</p>
                </div>
                <div className="p-4 bg-white rounded-xl border-2 border-gray-200">
                  <h6 className="font-semibold text-vibe-purple mb-2">Iterative Refinement</h6>
                  <p className="text-sm text-gray-600">Continuously refined concepts based on stakeholder feedback and usability testing</p>
                </div>
              </div>
            </motion.div>

            {/* User Flow & Visual Design Section */}
            <motion.div
              className="p-8 bg-gradient-to-br from-vibe-blue/5 to-vibe-purple/5 rounded-3xl border-2 border-vibe-blue/20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-vibe-blue/20 to-vibe-purple/20 rounded-xl flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-vibe-blue" />
                </div>
                <h4 className="text-2xl font-bold text-vibe-gray">End-to-End User Flow</h4>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                The complete user journey from data source connection through alert configuration to real-time monitoring, 
                showcasing how Data Activator transforms complex data workflows into intuitive visual experiences 
                accessible to business analysts without technical expertise.
              </p>

              {/* Clickable Image Section */}
              <div 
                className="relative group cursor-pointer"
                onClick={() => openLightbox(
                  '/e2e.png', 
                  'Data Activator End-to-End User Flow - Complete workflow diagram showing the 9-step process from viewing live event hub data through creating objects, defining properties, setting detection criteria, and configuring notifications'
                )}
              >
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-4 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <img 
                    src="/e2e.png" 
                    alt="Data Activator End-to-End User Flow - Complete workflow diagram showing the 9-step process from viewing live event hub data through creating objects, defining properties, setting detection criteria, and configuring notifications"
                    className="w-full h-auto rounded-xl border-2 border-vibe-blue/20 hover:border-vibe-blue/40 transition-all duration-300"
                  />
                </div>
                
                {/* Click to zoom overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-vibe-blue/5 to-vibe-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-vibe-blue/90 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                    Click to zoom
                  </div>
                </div>
              </div>

              {/* Workflow Summary */}
              <div className="mt-8 p-6 bg-white rounded-xl border-2 border-gray-200">
                <h5 className="font-semibold text-vibe-gray mb-3">Complete 9-Step Workflow</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This comprehensive workflow guides users through the entire process of setting up real-time data monitoring: 
                  from initial data discovery and object creation, through defining detection criteria and alert conditions, 
                  to configuring notifications and monitoring live data streams. Each step is designed to be intuitive 
                  for business analysts while maintaining the power needed for enterprise-scale operations.
                </p>
              </div>
            </motion.div>

            <div className="mt-12 p-8 bg-gradient-to-br from-vibe-blue/10 to-vibe-purple/10 rounded-2xl border-2 border-vibe-blue/20">
              <h4 className="text-xl font-bold text-vibe-gray mb-4">Design Innovation</h4>
              <p className="text-gray-600 leading-relaxed mb-4">
                The breakthrough was creating a visual programming interface that abstracts complex data operations 
                into intuitive building blocks. Users can create sophisticated monitoring workflows by connecting 
                visual elements, while the system automatically handles the underlying data processing complexity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This approach reduced the technical barrier while maintaining the power needed for enterprise-scale 
                operations. The interface adapts to user expertise levels, showing advanced options only when needed, 
                and provides real-time validation to prevent configuration errors.
              </p>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-vibe-gray mb-6">Impact & Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-vibe-blue/20 to-vibe-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-vibe-blue" />
                  </div>
                  <div className="text-3xl font-black text-vibe-blue mb-2">{metric.value}</div>
                  <div className="font-semibold text-vibe-gray mb-2">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                <h4 className="text-xl font-bold text-vibe-gray mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-vibe-sienna" />
                  Recognition & Impact
                </h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-vibe-blue mt-1 flex-shrink-0" />
                    <strong>US Patent awarded for "Techniques for ingesting time-series data"</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-vibe-blue mt-1 flex-shrink-0" />
                    Featured in Microsoft Ignite 2024 data analytics showcase
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-vibe-blue mt-1 flex-shrink-0" />
                    Design methodology adopted across Microsoft data products
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-vibe-blue mt-1 flex-shrink-0" />
                    Influenced time-series dataviz across Fabric
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                <h4 className="text-xl font-bold text-vibe-gray mb-4">Business Impact</h4>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-vibe-purple mt-1 flex-shrink-0" />
                    35% increase in enterprise data platform adoption
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-vibe-purple mt-1 flex-shrink-0" />
                    60% reduction in time-to-insight for business analysts
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-vibe-purple mt-1 flex-shrink-0" />
                    Reduced operational cost by 20% for early adopters
                  </li>
                </ul>
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
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-vibe-blue/20 rounded-full text-vibe-blue font-medium mb-6 border-2 border-vibe-blue/25">
                <Database className="w-4 h-4" />
                0-1 Product • Data Analytics Case Study
              </div>
              <h1 className="text-4xl lg:text-6xl font-black mb-6 text-vibe-gray">
                <span className="bg-gradient-to-r from-vibe-blue to-vibe-purple bg-clip-text text-transparent">
                  Data Activator
                </span>
                <br />
                <span className="text-vibe-gray">Experience Design</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Democratizing real-time data monitoring for enterprise users through intuitive visual workflows 
                and intelligent automation. Built from 0-1 with patented time-series data ingestion techniques.
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
                <div key={metric.label} className="text-center p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <metric.icon className="w-8 h-8 text-vibe-blue mx-auto mb-3" />
                  <div className="text-2xl lg:text-3xl font-black text-vibe-blue mb-1">{metric.value}</div>
                  <div className="text-sm font-medium text-vibe-gray">{metric.label}</div>
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
                      ? 'bg-gradient-to-r from-vibe-blue to-vibe-purple text-white shadow-lg focus:ring-vibe-blue/50'
                      : 'bg-gray-100 text-gray-600 hover:text-vibe-gray border-2 border-gray-200 hover:border-gray-300 focus:ring-gray-300'
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
              <h2 className="text-3xl font-bold text-vibe-gray mb-6">
                Ready to Discuss Your Data Challenges?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                This case study demonstrates my approach to complex enterprise data problems. 
                Let's explore how similar design thinking could transform your data workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => onNavigate?.('copilot-case-study')}
                  className="px-8 py-4 bg-gradient-to-r from-vibe-sienna to-vibe-blue rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 justify-center focus:outline-none focus:ring-4 focus:ring-vibe-sienna/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Copilot Case Study
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="px-8 py-4 border-2 border-vibe-blue text-vibe-blue rounded-full font-semibold hover:bg-vibe-blue hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-vibe-blue/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
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

export default DataActivatorCaseStudy;