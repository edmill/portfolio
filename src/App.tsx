import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Header, Hero, Offers, OffTheClock, Experience, Contact } from './v4/Sections';
import ProjectBrowser from './v4/ProjectBrowser';
import PastProjects from './v4/PastProjects';
import { MotionConfig } from 'framer-motion';
import { ScrollBar } from './v4/Motion';
import './v4/v4.css';

const SITE = 'https://edmill.github.io/portfolio/';
const FAVICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23F26B3A'/%3E%3Ctext x='16' y='23' font-family='sans-serif' font-weight='800' font-size='18' text-anchor='middle' fill='%230E0F11'%3EE%3C/text%3E%3C/svg%3E";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Ed Miller · Designer who builds things</title>
        <meta name="description" content="Ed Miller designs and builds AI products. Former Microsoft Principal Product Designer, open to full-time and contract roles." />
        <meta property="og:title" content="Ed Miller · Designer who builds things" />
        <meta property="og:description" content="Former Microsoft Principal Product Designer. Now designing and building products with a fleet of AI agents." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SITE + 'apps/shop.png'} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={SITE} />
        <link rel="icon" href={FAVICON} />
      </Helmet>
      <MotionConfig reducedMotion="user">
      <div className="v4">
        <ScrollBar />
        <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 clamp(16px,3vw,40px)' }}>
          <Header />
          <Hero />
          <ProjectBrowser />
          <Offers />
          <PastProjects />
          <OffTheClock />
          <Experience />
          <Contact />
        </div>
      </div>
      </MotionConfig>
    </HelmetProvider>
  );
}
