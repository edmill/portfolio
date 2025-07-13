import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react';

interface Metric {
  id: string;
  icon: React.ComponentType<any>;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  animationDelay: number;
}

const InteractiveMetrics: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({});

  const metrics: Metric[] = [
    {
      id: 'experience',
      icon: Zap,
      value: 15,
      suffix: '+',
      label: 'Years at Microsoft',
      description: 'Progressive experience in product design and AI integration',
      color: 'primary-accent',
      animationDelay: 0
    },
    {
      id: 'users',
      icon: Users,
      value: 9000000,
      suffix: '+',
      label: 'Monthly Active Users',
      description: 'Reached through SSMS and Microsoft Copilot integration',
      color: 'indigo-800',
      animationDelay: 0.2
    },
    {
      id: 'efficiency',
      icon: Clock,
      value: 60,
      suffix: '%',
      label: 'Faster Analysis',
      description: 'Achieved through AI integration and UX optimization',
      color: 'primary',
      animationDelay: 0.4
    },
    {
      id: 'satisfaction',
      icon: TrendingUp,
      value: 4.8,
      suffix: '/5',
      label: 'User Rating',
      description: 'Average satisfaction score across major projects',
      color: 'primary-accent',
      animationDelay: 0.6
    },
    {
      id: 'patent',
      icon: Award,
      value: 1,
      suffix: '',
      label: 'Patent Filed',
      description: 'Techniques for Ingesting time-series based real time event data',
      color: 'indigo-800',
      animationDelay: 0.8
    },
    {
      id: 'awards',
      icon: Target,
      value: 3,
      suffix: '',
      label: 'Awards & Recognition',
      description: 'Earned 3 delight the customer awards',
      color: 'primary',
      animationDelay: 1.0
    }
  ];

  useEffect(() => {
    if (inView) {
      metrics.forEach((metric) => {
        setTimeout(() => {
          animateValue(metric.id, 0, metric.value, 2000);
        }, metric.animationDelay * 1000);
      });
    }
  }, [inView]);

  const animateValue = (id: string, start: number, end: number, duration: number) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = start + (end - start) * easeOutCubic;
      
      setAnimatedValues(prev => ({
        ...prev,
        [id]: currentValue
      }));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  const formatValue = (metric: Metric): string => {
    const animatedValue = animatedValues[metric.id] || 0;
    
    if (metric.id === 'users') {
      // Format as 9M+ for users
      const millions = Math.floor(animatedValue / 1000000);
      return `${millions}M`;
    } else if (metric.id === 'satisfaction') {
      return animatedValue.toFixed(1);
    } else {
      return Math.floor(animatedValue).toString();
    }
  };

  const getColorClasses = (color: string) => {
    const colorMap = {
      'primary-accent': {
        bg: 'bg-white',
        border: 'border-primary-accent/30',
        text: 'text-primary-accent',
        iconBg: 'bg-primary-accent/10',
        shadow: 'shadow-lg hover:shadow-xl'
      },
      'indigo-800': {
        bg: 'bg-white',
        border: 'border-indigo-800/30',
        text: 'text-indigo-800',
        iconBg: 'bg-indigo-800/10',
        shadow: 'shadow-lg hover:shadow-xl'
      },
      'primary': {
        bg: 'bg-white',
        border: 'border-primary/30',
        text: 'text-primary',
        iconBg: 'bg-primary/10',
        shadow: 'shadow-lg hover:shadow-xl'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['primary-accent'];
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-vibe-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">
            <span className="bg-gradient-to-r from-primary-accent via-indigo-800 to-primary bg-clip-text text-transparent">
              Impact by Numbers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Measurable results from past projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric) => {
            const colors = getColorClasses(metric.color);
            return (
              <motion.div
                key={metric.id}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: metric.animationDelay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={`relative p-8 ${colors.bg} rounded-3xl border-2 ${colors.border} hover:border-opacity-60 transition-all duration-500 h-full ${colors.shadow}`}>
                  {/* Icon */}
                  <div className="flex items-center justify-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} border-2 ${colors.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <metric.icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Value */}
                  <div className="text-center mb-4">
                    <motion.div 
                      className={`text-4xl lg:text-5xl font-black ${colors.text} mb-2`}
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: metric.animationDelay + 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {formatValue(metric)}
                      <span className="text-2xl">{metric.suffix}</span>
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      {metric.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-center leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMetrics;