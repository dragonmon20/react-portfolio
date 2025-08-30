import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, technologies, bgColor, icon }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-12 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-xl font-playfair">{title}</p>
        <p className="mt-5 text-xs">
          {description}
        </p>
        <p className="mt-3 text-xs font-semibold">
          {technologies}
        </p>
      </div>
      <div className={`w-full h-[320px] ${bgColor} flex flex-col items-center justify-center shadow-lg`}>
        <div className="text-6xl mb-3">{icon}</div>
        <p className="text-white text-lg font-playfair font-semibold text-center px-4">
          {title}
        </p>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          A showcase of my work spanning property consultation platforms, web development, 
          event management systems, and digital marketing solutions across Goa's diverse markets.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-8 bg-gradient-to-br from-pink-500 via-red-400 to-yellow-300
              max-w-[350px] max-h-[320px] text-xl font-playfair font-semibold text-white rounded-lg shadow-lg"
          >
            PROPERTY SOLUTIONS FOR GOA
          </div>
          
          <Project 
            title="Goa Property Listings" 
            description="Comprehensive property platform featuring luxury homes, villas, and commercial spaces across North and South Goa with virtual tours and client engagement tools."
            technologies="React, Node.js, MongoDB, Digital Marketing Integration"
            bgColor="bg-gradient-to-br from-cyan-400 via-green-300 to-emerald-400 rounded-lg"
            icon="🏡"
          />
          
          <Project 
            title="Real Estate Analytics" 
            description="Custom analytics platform for tracking property market trends, price fluctuations, and investment opportunities across different Goan localities."
            technologies="Data Analytics, Chart.js, Real Estate APIs, Market Intelligence"
            bgColor="bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-300 rounded-lg"
            icon="📊"
          />

          {/* ROW 2 */}
          <Project 
            title="Serendipity Festival Portal" 
            description="Complete event coordination system managing 40+ volunteers across 5 venues for Goa's premier arts festival with real-time communication."
            technologies="React, Real-time Updates, Team Management, Communication Tools"
            bgColor="bg-gradient-to-br from-purple-500 via-fuchsia-500 to-pink-400 rounded-lg"
            icon="🎭"
          />
          
          <Project 
            title="Fitness Progress Tracker" 
            description="Client fitness journey app for Norbert's Fitness Studio featuring workout plans, progress photos, measurement tracking, and goal setting."
            technologies="Mobile App Development, Progress Tracking, Health Metrics, UI/UX"
            bgColor="bg-gradient-to-br from-lime-400 via-green-400 to-emerald-500 rounded-lg"
            icon="💪"
          />
          
          <Project 
            title="Investment Calculator" 
            description="Advanced ROI calculator helping Goan property investors analyze rental yields, capital appreciation, and market timing for smart decisions."
            technologies="Financial Modeling, JavaScript Calculations, Market Data Integration"
            bgColor="bg-gradient-to-br from-amber-400 via-yellow-300 to-orange-300 rounded-lg"
            icon="💰"
          />

          {/* ROW 3 */}
          <Project 
            title="Business Directory" 
            description="Comprehensive local business platform supporting English, Hindi, Konkani, and Portuguese with location-based search and reviews."
            technologies="Multi-language Support, Geolocation, Review System, Local SEO"
            bgColor="bg-gradient-to-br from-red-400 via-pink-400 to-rose-300 rounded-lg"
            icon="🌍"
          />
          
          <Project 
            title="BGMI Tournament Platform" 
            description="Gaming tournament management system for local competitions featuring team registration, bracket generation, live scoring, and prizes."
            technologies="Gaming APIs, Tournament Logic, Live Streaming, Payment Gateway"
            bgColor="bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-400 rounded-lg"
            icon="🎮"
          />
          
          <div
            className="flex justify-center text-center items-center p-8 bg-gradient-to-br from-teal-400 via-blue-400 to-indigo-500
              max-w-[350px] max-h-[320px] text-xl font-playfair font-semibold text-white rounded-lg shadow-lg"
          >
            GOAN TECH INNOVATION
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
