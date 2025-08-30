import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's what my clients and colleagues say about my work in property consultation, 
          web development, and event management across Goa.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <img 
              src="../assets/firstfeedback.png" 
              alt="Property Client" 
              className="w-[120px] h-[120px] rounded-full object-cover border-4 border-blue"
            />
          </div>
          
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">
            Shahid helped us find the perfect home in North Goa. His knowledge of the local 
            market and digital platform made the entire process smooth and transparent.
          </p>
          <p className="text-center text-sm mt-4 font-semibold">
            - Property Client, Panaji
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <img 
              src="../assets/thirdfeedback.png" 
              alt="Festival Organizer" 
              className="w-[120px] h-[120px] rounded-full object-cover border-4 border-red"
            />
          </div>
          
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">
            As a supervisor at Serendipity Arts Festival, Shahid managed our team 
            exceptionally well. His leadership skills and attention to detail ensured 
            our events ran flawlessly.
          </p>
          <p className="text-center text-sm mt-4 font-semibold">
            - Festival Organizer, Serendipity Arts
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2">
            <img 
              src="../assets/secondfeedback.png" 
              alt="Real Estate Agency" 
              className="w-[120px] h-[120px] rounded-full object-cover border-4 border-yellow"
            />
          </div>
          
          <p className="font-playfair text-6xl">"</p>
          <p className="text-center text-xl">
            The property listing website Shahid developed for us increased our client 
            engagement significantly. His technical skills combined with real estate 
            knowledge is impressive.
          </p>
          <p className="text-center text-sm mt-4 font-semibold text-deep-blue">
            - Real Estate Agency, Goa
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
