import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Trophy } from 'lucide-react';

const TimelineSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const experiences = [
    {
      year: "May 2022 - May 2025",
      company: "Microsoft Corporation",
      role: "Principal Product Designer",
      location: "Redmond, WA",
      achievements: [
        "Product Design Lead for SQL Server Management Studio (SSMS) & Data Activator",
        "Led AI integration design for SQL Server Management Studio, bringing Microsoft Copilot capabilities to 9+ million monthly active users",
        "Designed comprehensive Data Activator creation experience for real-time data processing and analytics",
        "Applied growth-oriented design thinking to complex technical workflows, using data insights to drive design decisions and measure impact on user adoption and satisfaction"
      ],
      color: "primary-accent",
      showBullets: true
    },
    {
      year: "January 2020 - May 2022",
      company: "Microsoft Corporation", 
      role: "Principal Product Designer",
      location: "Redmond, WA",
      achievements: [
        "Design Leader for Microsoft Viva Insights & Workplace Analytics | Focus: Data-Driven Employee Experience",
        "Led user-driven design strategy for Viva Insights across Microsoft 365 ecosystem",
        "Designed 'Discover, Try and Buy' experience for Viva Workplace Analytics, leveraging user behavior data to optimize conversion funnel and achieve 25% increase in enterprise adoption",
        "Created comprehensive data visualization solutions for workplace intelligence, enabling organizations to make better decisions through intuitive presentation of complex employee engagement and productivity data"
      ],
      color: "indigo-800",
      showBullets: true
    },
    {
      year: "January 2015 - January 2020",
      company: "Microsoft Corporation",
      role: "Senior Design Developer",
      location: "Redmond, WA", 
      achievements: [
        "Lead Designer for Office 365 Admin Portal & Analytics Platform",
        "Led UX design and development for Office 365 Admin portal, creating data rich dashboards and analytics interfaces",
        "Established design system cohesion using Fluent Design Language across Microsoft Information Architecture solutions",
        "Applied design consistency metrics and user experience scores to inform design decisions"
      ],
      color: "primary",
      showBullets: true
    },
    {
      year: "April 2012 - December 2014",
      company: "Microsoft Corporation",
      role: "UX Designer & Developer",
      location: "Redmond, WA",
      achievements: [
        "Spearheaded user experience and design for Microsoft Next Generation Volume Licensing platform, using customer data and design analytics to optimize licensing workflows and improve completion rates",
        "Led design system development for enterprise analytics workflows, establishing data driven design patterns and interaction standards measured through user task success rates",
        "Created detailed wireframes and polished design prototypes for complex data scenarios, showcased to executive leadership with solutions validated through user research and usage metrics",
        "Received 3 consecutive Microsoft 'Delight the Customer' awards for innovative data driven user experience design that directly improved customer satisfaction scores"
      ],
      color: "primary-accent",
      showBullets: true
    },
    {
      year: "November 2011 - April 2012",
      company: "Microsoft Corporation",
      role: "Senior UX Designer",
      location: "Redmond, WA",
      achievements: [
        "MSIT - Microsoft Volume Licensing platform. Developed interactive prototypes for next generation licensing platform."
      ],
      color: "indigo-800",
      showBullets: false
    },
    {
      year: "May 2010 - October 2011",
      company: "Pharmacy OneSource (Wolters Kluwer)",
      role: "UX Designer",
      location: "Factoria, WA",
      achievements: [
        "Led user experience design for healthcare pharmacy management software solutions, designing intuitive interfaces for complex pharmaceutical workflow management systems."
      ],
      color: "primary-accent",
      showBullets: false
    },
    {
      year: "September 2006 - May 2010",
      company: "Microsoft Corporation",
      role: "SDET/Technical Lead",
      location: "Redmond, WA",
      achievements: [
        "Led test automation and quality assurance for Microsoft enterprise software solutions, developing comprehensive testing frameworks and ensuring product reliability across multiple release cycles."
      ],
      color: "primary-accent",
      showBullets: false
    }
  ];

  return (
    <section ref={ref} className="py-16 px-3 sm:px-6 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-primary">
            <span className="bg-gradient-to-r from-primary-accent to-indigo-800 bg-clip-text text-transparent">
              Work History
            </span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            15+ years of progressive experience specializing in AI-powered design solutions and data visualization.
          </p>
        </motion.div>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-accent via-indigo-800 to-primary rounded-full" />
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.year}`}
              className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 sm:mb-16 last:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="relative flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${getGradientClasses(exp.color)} flex items-center justify-center shadow-lg border-4 border-white`}>
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 pb-4 sm:pb-8">
                <motion.div
                  className="bg-white rounded-2xl p-4 sm:p-8 border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">
                        {exp.role}
                      </h3>
                      <h4 className={`text-lg sm:text-xl font-semibold ${getTextColorClass(exp.color)}`}>
                        {exp.company}
                      </h4>
                    </div>
                    <div className="mt-2 sm:mt-4 sm:mt-0 sm:text-right">
                      <div className="flex items-center gap-2 text-gray-600 mb-1 sm:mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.year}
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  {exp.showBullets ? (
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          className="flex items-start gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full ${getBgColorClass(exp.color)} flex-shrink-0 mt-1 sm:mt-2`} />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-2 sm:space-y-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.p
                          key={achievementIndex}
                          className="text-gray-600 text-sm sm:text-base leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.2 + achievementIndex * 0.1 }}
                        >
                          {achievement}
                        </motion.p>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getGradientClasses(color: string): string {
  switch (color) {
    case 'primary-accent':
      return 'bg-gradient-to-br from-primary-accent to-primary';
    case 'indigo-800':
      return 'bg-gradient-to-br from-indigo-800 to-primary-accent';
    case 'primary':
      return 'bg-gradient-to-br from-primary to-indigo-800';
    default:
      return 'bg-gradient-to-br from-primary-accent to-primary';
  }
}

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

function getBgColorClass(color: string): string {
  switch (color) {
    case 'primary-accent':
      return 'bg-primary-accent';
    case 'indigo-800':
      return 'bg-indigo-800';
    case 'primary':
      return 'bg-primary';
    default:
      return 'bg-primary-accent';
  }
}

export default TimelineSection;