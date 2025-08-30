import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div className="relative z-0 ml-20">
            {/* Purple background circle */}
            <div className="absolute -top-10 -left-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-full opacity-20 z-[-2]"></div>
            
            {/* Blue border frame */}
            <div className="absolute -top-20 -left-20 w-[400px] h-[500px] border-2 border-blue rounded-t-[400px] z-[-1]"></div>
            
            <img
              alt="Shahid Shaikh profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-[400px] h-[500px] object-cover object-top rounded-t-[400px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <div className="relative">
            {/* Purple background circle for mobile */}
            <div className="absolute -top-5 -left-5 w-[350px] h-[450px] bg-gradient-to-br from-purple-600 to-purple-800 rounded-full opacity-20 z-[-1]"></div>
            
            <img
              alt="Shahid Shaikh profile"
              className="z-10 w-[300px] h-[400px] object-cover object-top rounded-t-[200px]"
              src="assets/profile-image.png"
            />
          </div>
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Shahid {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Shaikh
            </span>
          </p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Full Stack Developer & Property Consultant in Goa. Passionate about creating 
            digital solutions for property markets, events, and local businesses. Bridging 
            technology with personalized service across North and South Goa.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
