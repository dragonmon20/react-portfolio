import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Get section elements
      const homeSection = document.getElementById('home');
      const skillsSection = document.getElementById('skills');
      const projectsSection = document.getElementById('projects');
      const testimonialsSection = document.getElementById('testimonials');
      const contactSection = document.getElementById('contact');

      // Calculate section positions
      const sections = [
        { name: 'home', element: homeSection },
        { name: 'skills', element: skillsSection },
        { name: 'projects', element: projectsSection },
        { name: 'testimonials', element: testimonialsSection },
        { name: 'contact', element: contactSection }
      ];

      // Check if we're at the very bottom of the page
      if (scrollY + windowHeight >= documentHeight - 10) {
        setSelectedPage('contact');
        return;
      }

      // Find current section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = scrollY + rect.top;
          
          if (scrollY >= sectionTop - 300) {
            setSelectedPage(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={selectedPage === "home"} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      {isAboveMediumScreens && (
        <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      )}
      <div className="w-5/6 mx-auto md:h-full">
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <MySkills />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto">
        <Projects />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Testimonials />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
