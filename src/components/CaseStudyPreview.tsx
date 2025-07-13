import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Eye, Users, Zap, Brain, Database } from 'lucide-react';
import { useEffect } from 'react';

// RotatingCubeWithQuestionMark component

function RotatingCubeWithQuestionMark() {
  // Static 3D cube illusion using CSS, only front face visible
  return (
    <div className="flex items-center justify-center w-full h-48">
      <div className="relative w-24 h-24" style={{ perspective: '600px' }}>
        {/* Front face */}
        <div className="absolute w-full h-full bg-gray-200 flex items-center justify-center text-5xl text-gray-700 font-bold rounded-lg shadow-2xl border-4 border-gray-300"
          style={{
            transform: 'rotateY(0deg) translateZ(32px)',
            boxShadow: '8px 8px 24px 0 rgba(156,163,175,0.25)', // gray-400
          }}
        >
          ?
        </div>
        {/* Top face illusion */}
        <div className="absolute w-full h-full bg-gray-300 rounded-lg"
          style={{
            height: '24px',
            width: '96px',
            top: '-12px',
            left: '0',
            transform: 'skewX(-30deg) scaleY(0.5)',
            zIndex: 0,
            opacity: 0.7,
          }}
        />
        {/* Side face illusion */}
        <div className="absolute w-full h-full bg-gray-400 rounded-lg"
          style={{
            width: '24px',
            height: '96px',
            right: '-12px',
            top: '0',
            transform: 'skewY(-30deg) scaleX(0.5)',
            zIndex: 0,
            opacity: 0.7,
          }}
        />
      </div>
    </div>
  );
}

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
      image: "ssms.jpg",
      tags: ["Project", "AI Integration", "Microsoft Copilot", "SSMS"],
      metrics: [
        { icon: Users, value: "9M+", label: "Monthly Users" },
        { icon: Zap, value: "40%", label: "Productivity Gain" },
        { icon: Eye, value: "4.8/5", label: "User Rating" }
      ],
      color: "primary-accent"
    },
    {
      id: 'data-activator-case-study',
      title: "Data Activator Experience",
      subtitle: "Real-Time Data Processing & Analytics",
      description: "Designed comprehensive Data Activator creation experience for real-time data processing and analytics, enabling enterprise-scale data insights.",
      images: ["drawn.png"],
      tags: ["Project", "Data Analytics", "Real-Time Processing", "Enterprise"],
      metrics: [
        { icon: Eye, value: "60%", label: "Faster Insights" },
        { icon: Users, value: "Enterprise", label: "Scale" },
        { icon: Zap, value: "Real-Time", label: "Processing" }
      ],
      color: "indigo-800"
    },
    {
      id: 'ai-productivity',
      title: "AI Productivity Tools",
      subtitle: "Designing for Next-Gen Efficiency",
      description: "Exploring the intersection of AI and productivity—designing tools that empower users to automate workflows, enhance focus, and achieve more with less effort.",
      image: "ponder.png",
      tags: ["Project", "AI Productivity", "Automation"],
      metrics: [
        { icon: Zap, value: "+25%", label: "Efficiency Boost" },
        { icon: Brain, value: "AI", label: "Smart Automation" }
      ],
      color: "primary-accent"
    },
    {
      id: 'viva-insights',
      title: 'Viva Insights',
      subtitle: 'Empowering Wellbeing & Productivity in Microsoft 365',
      description: 'Lead Product Designer for Microsoft Viva Insights, driving discoverability, trial, and adoption of premium features to support employee wellbeing and productivity across Microsoft 365.',
      images: ['viva.png', 'viva2.png'],
      tags: ['Product Design', 'Viva', 'Wellbeing', 'Microsoft 365'],
      metrics: [
        { icon: Users, value: 'Enterprise', label: 'Scale' },
        { icon: Zap, value: 'Premium', label: 'Features' },
        { icon: Eye, value: 'UX', label: 'Focus' }
      ],
      color: 'primary-accent',
      details: {
        history: 'With the dramatic rise in Microsoft Teams usage over the past few years, the need to support employee wellbeing, focus, and productivity became more critical than ever. As part of the Microsoft Viva suite, Viva Insights was developed to empower organizations and individuals with data-driven, privacy-respecting tools to foster healthy work habits and organizational balance.',
        role: 'Lead Product Designer – Viva Discoverability & Commerce. I led design for Discover, Try, and Buy workflows across the Viva product suite, with a focus on surfacing premium features in a way that added value without disruption. Designed shared components to drive consistency across Viva modules. Partnered with cross-functional teams—including Design, User Research, Program Management, Engineering, and Senior Leadership—to deliver end-to-end solutions. Advocated for user needs while aligning tightly with licensing and monetization strategy.',
        problem: 'Despite strong feature value, many customers were unaware of Viva’s premium capabilities—or weren’t sure how to access and evaluate them. This presented several core challenges: Low visibility of premium features across Microsoft 365 experiences. Complex licensing models made it difficult for users to understand what was available and how to upgrade. Fragmented entry points across products led to inconsistent upgrade paths and trial experiences.',
        businessGoals: 'Increase volume licensing adoption for both individual Viva products and the full Viva suite. Improve conversion rates from trial to paid usage. Build a cohesive design system for in-app offers, upsell surfaces, and premium entry points across the Viva ecosystem.',
        userGoals: 'Understand how my team is working—collaboration patterns, meeting overload, focus time, and more. Access tools to manage my mental health and avoid burnout. Easily explore and try new features without hitting confusing upgrade flows or paywalls. Manage my time and productivity with personalized, actionable insights.'
      }
    },
    {
      id: 'security-vr-demo',
      title: 'Security & Compliance VR Demo',
      subtitle: 'Immersive Enterprise Security Experience',
      description: 'Led end-to-end design and development of a live VR demo for Microsoft Ignite, helping IT professionals visualize and respond to security threats in a virtual environment.',
      images: ['vr1.png', 'vr2.png', 'vr3.png', 'vr4.png'],
      tags: ['Project', 'VR', 'Security', 'Compliance', 'Mixed Reality'],
      metrics: [
        { icon: Users, value: '800+', label: 'Live Demos' },
        { icon: Eye, value: '600+', label: 'Customer Feedback' },
        { icon: Zap, value: '2.0', label: 'Version' }
      ],
      color: 'indigo-800',
      details: {
        history: `This immersive experience was developed as a live, interactive demo for Microsoft’s Ignite Conference in Orlando, FL, showcasing how enterprise-grade security and compliance tools could be visualized and navigated in a virtual environment. Based on feedback from over 600 enterprise customers, we built and launched Version 2.0 to deliver a more targeted and engaging narrative—helping IT professionals better understand threats and take informed action quickly!`,
        role: `Lead Designer – End-to-End Immersive Experience\n\nI was responsible for the full creative and technical vision of the VR demo.\n\nMy role spanned:\n- Storyboarding the customer journey and branching interaction paths.\n- Interaction and 3D environment design, including spatial UI and gesture-based input.\n- Material and motion design to convey urgency, threat levels, and task feedback.\n- Development and deployment in collaboration with the Mixed Reality Engineering team.\n\nI partnered closely with Marketing, Engineering, and Leadership—and personally conducted over 800 live demos, including strategic walkthroughs with four Microsoft Vice Presidents.`,
        problem: `Cyber threats are a persistent concern across IT organizations, and delayed response can lead to severe data breaches, service outages, or compliance violations. Traditional dashboards often lack urgency or clarity—making it difficult for users to:\n- Recognize threats in real time\n- Understand the impact of their decisions\n- Collaborate securely with key stakeholders during a breach\n\nThere was a need to reimagine cybersecurity response as an immersive, intuitive, and empowering experience.`,
        businessGoals: `Drive enterprise adoption of Microsoft 365 Security & Compliance SKUs by showcasing product capabilities in a compelling new format.\nBuild customer trust and confidence in Microsoft’s commitment to data security and privacy.\nPosition Microsoft as a leader in mixed reality innovation for enterprise applications.`,
        userGoals: `Quickly identify and act on security threats through spatial visualization and simplified workflows.\nCreate automated rules to prevent similar attacks in the future—all within an intuitive, hands-on interface.\nCollaborate privately and securely with security admins or legal teams, even in high-stakes scenarios.\nFeel empowered, not overwhelmed, by enterprise security operations.`
      }
    },
    {
      id: 'next-project-wip',
      title: "Project X",
      subtitle: "Coming Soon",
      description: "This project is currently in progress. Check back soon for updates!",
      image: "drawn.png",
      tags: ["WIP", "Upcoming"],
      metrics: [],
      color: "indigo-800"
    },
  ];

  const [dialogProject, setDialogProject] = useState(null);

  // Body scroll lock logic moved here
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (dialogProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [dialogProject]);

  return (
    <section ref={ref} className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            <span className="bg-gradient-to-r from-primary-accent to-indigo-800 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Deep dives into AI-powered solutions that transformed user experiences at enterprise scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <ProjectCard key={study.title} study={study} onNavigate={onNavigate} inView={inView} onShowDetails={setDialogProject} />
          ))}
        </div>
      </div>
      <ProjectDetailDialog open={!!dialogProject} onClose={() => setDialogProject(null)} project={dialogProject} />
    </section>
  );
};

function getTextColorClass(color: string): string {
  switch (color) {
    case 'primary-accent':
      return 'text-primary-accent';
    case 'indigo-800':
      return 'text-indigo-800';
    case 'primary':
      return 'text-primary';
    default:
      return 'text-primary-accent';
  }
}

function getButtonClasses(color: string): string {
  switch (color) {
    case 'primary-accent':
      return 'bg-primary-accent hover:bg-primary-accent/90 focus:ring-primary-accent/50';
    case 'indigo-800':
      return 'bg-indigo-800 hover:bg-indigo-900 focus:ring-indigo-800/50';
    case 'primary':
      return 'bg-primary hover:bg-primary/90 focus:ring-primary/50';
    default:
      return 'bg-primary-accent hover:bg-primary-accent/90 focus:ring-primary-accent/50';
  }
}

function useAutoScrollOnInView(ref: React.RefObject<HTMLDivElement>, inView: boolean) {
  useEffect(() => {
    if (!ref.current || !inView) return;
    const el = ref.current;
    if (el.scrollWidth <= el.clientWidth) return; // No overflow

    let cancelled = false;
    const scrollTo = (target: number, duration: number, callback?: () => void) => {
      const start = el.scrollLeft;
      const change = target - start;
      const startTime = performance.now();
      function animateScroll(now: number) {
        if (cancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        el.scrollLeft = start + change * progress;
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else if (callback) {
          callback();
        }
      }
      requestAnimationFrame(animateScroll);
    };

    // Animate to end, pause, then back, pause
    scrollTo(el.scrollWidth - el.clientWidth, 1200, () => {
      setTimeout(() => {
        scrollTo(0, 1200);
      }, 800);
    });

    return () => { cancelled = true; };
  }, [ref, inView]);
}

// --- ProjectCard component ---

interface ProjectCardProps {
  study: any; // You can define a more specific type if desired
  onNavigate: (id: string) => void;
  inView: boolean;
  onShowDetails: (project: any) => void;
}

function ProjectCard({ study, onNavigate, inView, onShowDetails }: ProjectCardProps) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images: string[] = study.images || (study.image ? [study.image] : []);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((carouselIndex + 1) % images.length);
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCarouselIndex((carouselIndex - 1 + images.length) % images.length);
  };

  // Case study projects: navigate to detail page
  if (study.id === 'copilot-case-study' || study.id === 'data-activator-case-study') {
    return (
      <div className="cursor-pointer" tabIndex={0} role="group" aria-label={`Project card for ${study.title}`}>
        <motion.div
          className="group cursor-pointer"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
        >
          <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-lg hover:shadow-xl w-full h-[420px] flex flex-col">
            {/* Header with tags */}
            {(() => {
              const pillsRef = useRef<HTMLDivElement>(null);
              useAutoScrollOnInView(pillsRef, inView);
              let pillLabel = 'Project';
              if (study.id === 'copilot-case-study' || study.id === 'data-activator-case-study') {
                pillLabel = 'Case Study';
              }
              return (
                <div ref={pillsRef} className="bg-white rounded-t-2xl px-4 py-2 pb-0 flex gap-2 items-center border-b border-gray-100 min-h-[44px] flex-nowrap overflow-x-auto scrollbar-none justify-center" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                  <span className={`px-3 py-1 text-xs rounded-full font-bold transition-all duration-300 whitespace-nowrap ${pillLabel === 'Case Study' ? 'bg-indigo-800 text-white' : 'bg-primary-accent text-white'}`}>
                    {pillLabel}
                  </span>
                </div>
              );
            })()}
            {/* Carousel */}
            <div className="relative h-36 overflow-hidden flex items-center justify-center m-0 p-0">
              {images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-primary-accent hover:text-white transition-colors border border-gray-200">
                    <span className="sr-only">Previous</span>
                    <span className="text-xl">&#8592;</span>
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-primary-accent hover:text-white transition-colors border border-gray-200">
                    <span className="sr-only">Next</span>
                    <span className="text-xl">&#8594;</span>
                  </button>
                </>
              )}
              <img
                src={images[carouselIndex]}
                alt={study.title}
                className="w-full h-36 object-cover object-center transition-transform duration-700 cursor-zoom-in m-0 p-0"
                onClick={() => setLightboxOpen(true)}
              />
            </div>
            {/* Content */}
            <div className="flex flex-col flex-1 p-3 pt-0">
              <h3 className="text-lg font-bold text-primary mb-1 text-center truncate" title={study.title}>
                {study.title}
              </h3>
              <h4 className={`text-base font-semibold mb-2 text-center truncate ${getTextColorClass(study.color)}`} title={study.subtitle}>
                {study.subtitle}
              </h4>
              <p className="text-gray-600 leading-relaxed mb-2 text-center text-sm overflow-hidden text-ellipsis flex-1" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }} title={study.description}>
                {study.description}
              </p>
              <div className="mt-auto">
                <button
                  onClick={() => onNavigate(study.id)}
                  className="w-full px-5 py-2 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-accent text-contrast shadow hover:bg-cta hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`View case study for ${study.title}`}
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          {/* Lightbox Modal */}
          {lightboxOpen && ReactDOM.createPortal(
            <div
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
              onClick={() => setLightboxOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Project image viewer"
            >
              <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                <button className="absolute top-6 right-8 text-white text-4xl font-bold bg-black/60 rounded-full px-4 py-2 shadow-lg hover:bg-black/80 focus:outline-none" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setLightboxOpen(false); }} aria-label="Close image viewer">&times;</button>
                {images.length > 1 && (
                  <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/60 rounded-full px-3 py-2 shadow-lg hover:bg-black/80 focus:outline-none z-10" aria-label="Previous image">&#8592;</button>
                )}
                <img
                  src={images[carouselIndex]}
                  alt={study.title}
                  className="max-w-full max-h-screen object-contain rounded-xl shadow-2xl"
                  style={{ margin: '0 auto' }}
                  onClick={e => e.stopPropagation()}
                />
                {images.length > 1 && (
                  <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/60 rounded-full px-3 py-2 shadow-lg hover:bg-black/80 focus:outline-none z-10" aria-label="Next image">&#8594;</button>
                )}
              </div>
            </div>,
            document.body
          )}
        </motion.div>
      </div>
    );
  }
  // Non-case study projects: open dialog
  return (
    <div className="cursor-pointer" tabIndex={0} role="group" aria-label={`Project card for ${study.title}`}>
      <motion.div
        className="group cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8 }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-lg hover:shadow-xl w-full h-[420px] flex flex-col">
          {/* Header with tags */}
          {(() => {
            const pillsRef = useRef<HTMLDivElement>(null);
            useAutoScrollOnInView(pillsRef, inView);
            let pillLabel = 'Project';
            if (study.id === 'copilot-case-study' || study.id === 'data-activator-case-study') {
              pillLabel = 'Case Study';
            }
            return (
              <div ref={pillsRef} className="bg-white rounded-t-2xl px-4 py-2 pb-0 flex gap-2 items-center border-b border-gray-100 min-h-[44px] flex-nowrap overflow-x-auto scrollbar-none justify-center" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                <span className={`px-3 py-1 text-xs rounded-full font-bold transition-all duration-300 whitespace-nowrap ${pillLabel === 'Case Study' ? 'bg-indigo-800 text-white' : 'bg-primary-accent text-white'}`}>
                  {pillLabel}
                </span>
              </div>
            );
          })()}
          {/* Carousel */}
          <div className="relative h-36 overflow-hidden flex items-center justify-center m-0 p-0">
            {images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-primary-accent hover:text-white transition-colors border border-gray-200">
                  <span className="sr-only">Previous</span>
                  <span className="text-xl">&#8592;</span>
                </button>
                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 rounded-full w-9 h-9 flex items-center justify-center shadow hover:bg-primary-accent hover:text-white transition-colors border border-gray-200">
                  <span className="sr-only">Next</span>
                  <span className="text-xl">&#8594;</span>
                </button>
              </>
            )}
            {study.id === 'next-project-wip' ? (
              <RotatingCubeWithQuestionMark />
            ) : (
              <img
                src={images[carouselIndex]}
                alt={study.title}
                className="w-full h-36 object-cover object-center transition-transform duration-700 cursor-zoom-in m-0 p-0"
                onClick={() => setLightboxOpen(true)}
              />
            )}
          </div>
          {/* Content */}
          <div className="flex flex-col flex-1 p-3 pt-0">
            <h3 className="text-lg font-bold text-primary mb-1 text-center truncate" title={study.title}>
              {study.title}
            </h3>
            <h4 className={`text-base font-semibold mb-2 text-center truncate ${getTextColorClass(study.color)}`} title={study.subtitle}>
              {study.subtitle}
            </h4>
            <p className="text-gray-600 leading-relaxed mb-2 text-center text-sm overflow-hidden text-ellipsis flex-1" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }} title={study.description}>
              {study.description}
            </p>
            <div className="mt-auto">
              <button
                onClick={() => onShowDetails(study)}
                className="w-full px-5 py-2 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-accent text-contrast shadow hover:bg-cta hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View details for ${study.title}`}
              >
                View Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* Lightbox Modal */}
        {lightboxOpen && ReactDOM.createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Project image viewer"
          >
            <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
              <button className="absolute top-6 right-8 text-white text-4xl font-bold bg-black/60 rounded-full px-4 py-2 shadow-lg hover:bg-black/80 focus:outline-none" onClick={(e: React.MouseEvent) => { e.stopPropagation(); setLightboxOpen(false); }} aria-label="Close image viewer">&times;</button>
              {images.length > 1 && (
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/60 rounded-full px-3 py-2 shadow-lg hover:bg-black/80 focus:outline-none z-10" aria-label="Previous image">&#8592;</button>
              )}
              <img
                src={images[carouselIndex]}
                alt={study.title}
                className="max-w-full max-h-screen object-contain rounded-xl shadow-2xl"
                style={{ margin: '0 auto' }}
                onClick={e => e.stopPropagation()}
              />
              {images.length > 1 && (
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl bg-black/60 rounded-full px-3 py-2 shadow-lg hover:bg-black/80 focus:outline-none z-10" aria-label="Next image">&#8594;</button>
              )}
            </div>
          </div>,
          document.body
        )}
      </motion.div>
    </div>
  );
}

// Add ProjectDetailDialog component
interface ProjectDetailDialogProps {
  open: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies?: string[];
    link?: string;
    details?: {
      history?: string;
      role?: string;
      problem?: string;
      businessGoals?: string;
      userGoals?: string;
    };
  } | null;
}

function ProjectDetailDialog({ open, onClose, project }: ProjectDetailDialogProps) {
  if (!open || !project) return null;
  const headingId = 'project-detail-dialog-title';
  const details = (project as any).details || {};

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" role="dialog" aria-modal="true" aria-labelledby={headingId} tabIndex={-1} onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl p-0 max-w-3xl w-full relative overflow-y-auto max-h-[80vh] flex flex-col"
        onClick={e => e.stopPropagation()}
        tabIndex={0}
      >
        {/* Caption Bar */}
        <div className="flex items-center justify-between px-8 py-5 border-b bg-gradient-to-r from-indigo-50 to-white rounded-t-2xl">
          <h2 id={headingId} className="text-2xl font-bold text-indigo-800">{project.title}</h2>
        </div>
        {/* Dialog Content */}
        <div className="px-8 py-6 flex-1 overflow-y-auto">
          <p className="text-gray-700 mb-6 text-lg">{project.description}</p>
          {project.technologies && (
            <div className="mb-6">
              <span className="font-semibold text-gray-600">Technologies:</span>
              <ul className="flex flex-wrap gap-2 mt-1">
                {project.technologies.map((tech: string, i: number) => (
                  <li key={i} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded text-xs font-medium">{tech}</li>
                ))}
              </ul>
            </div>
          )}
          {details.role && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-1">Role</h3>
              <p className="text-gray-700 whitespace-pre-line">{details.role}</p>
            </div>
          )}
          {details.history && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-1">Project Background</h3>
              <p className="text-gray-700 whitespace-pre-line">{details.history}</p>
            </div>
          )}
          {details.problem && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-1">Problem</h3>
              <p className="text-gray-700 whitespace-pre-line">{details.problem}</p>
            </div>
          )}
          {details.businessGoals && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-1">Business Goals</h3>
              <p className="text-gray-700 whitespace-pre-line">{details.businessGoals}</p>
            </div>
          )}
          {details.userGoals && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-1">User Goals</h3>
              <p className="text-gray-700 whitespace-pre-line">{details.userGoals}</p>
            </div>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-primary-accent hover:underline font-semibold">View Project</a>
          )}
        </div>
        {/* Bottom Close Button */}
        <div className="flex justify-end px-8 py-5 border-t bg-gradient-to-r from-white to-indigo-50 rounded-b-2xl">
          <button
            className="px-6 py-3 bg-indigo-800 text-white rounded-full font-semibold shadow hover:bg-indigo-900 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            onClick={onClose}
            aria-label="Close dialog"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyPreview;