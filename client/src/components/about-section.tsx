import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6">About Me</h2>
        </motion.div>
        
        <div className="prose prose-lg prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            An entrepreneur and wealth advisor committed to empowering individuals and businesses to build enduring wealth and create transformative impact. The journey begins with a fundamental understanding: true success transcends financial metrics—it's measured in lives transformed and communities strengthened.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            WealthX Financial Solutions was founded with a revolutionary mission: to transform wealth management through unwavering integrity, cutting-edge innovation, and authentic client partnership. The approach goes beyond traditional financial services, creating personalized strategies that align with each client's unique vision and values.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Recognizing critical gaps in compassionate care led to the development of premium home care services that prioritize dignity, excellence, and genuine human connection. Through Vanquity Investments, strategic acquisitions are orchestrated with precision, delivering meaningful, long-term value for all stakeholders.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every venture shares a core belief: business should be a powerful catalyst for positive change. Each relationship, strategy, and decision stems from the conviction that wealth creation and social impact are not competing forces—when properly aligned, they become the foundation for something truly transformative.
          </p>
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative my-12 pl-8 pr-4 py-8 bg-gray-100 rounded-md border-l-[3px] border-gray-300 shadow-sm text-center"
            style={{ fontFamily: '"New York", Georgia, Times, serif' }}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 0.15, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute left-2 top-4 text-[5rem] leading-none text-gray-300 select-none pointer-events-none"
              aria-hidden="true"
            >
              “
            </motion.span>
            <span className="block text-2xl sm:text-3xl font-light" style={{ color: '#507368' }}>
              This is wealth management reimagined. This is impact investing realized.<br />This is the future of generational wealth.
            </span>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
