import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full text-center py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ed Miller</h1>
        <h2 className="text-lg md:text-xl text-gray-700 font-medium mb-8">
          Experience Designer — Seattle, WA
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
          I’m an experience designer with a background spanning user interface development, immersive 3D design, and AI-integrated UX for enterprise tools. My focus is on AI innovation, storytelling through interaction, and solving complex challenges for real users. I believe in building as a path to learning and thrive on collaboration across disciplines.
        </p>
        <div className="flex flex-col items-center gap-2">
          <a
            href="mailto:edmill@outlook.com"
            className="text-primary-accent underline font-medium hover:text-primary transition-colors duration-150"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;