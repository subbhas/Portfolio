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
            My approach to wealth management began with a simple realization: true success isn't measured solely in dollars. It's measured in the lives we transform.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Throughout my career, I've been driven by the belief that financial freedom should be accessible to everyone, not just the privileged few. While many advisors focus on short-term gains, I concentrate on building sustainable wealth that endures across generations.
          </p>
          
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative my-12 pl-8 pr-4 py-8 bg-gray-100 rounded-md border-l-[3px] border-gray-300 shadow-sm"
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
            <p className="text-xl sm:text-2xl font-serif italic text-gray-900 leading-relaxed">
              I concentrate on building sustainable wealth that endures across generations. This philosophy shaped everything I built.
            </p>
          </motion.blockquote>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I founded WealthX Financial Solutions with a clear mission: to revolutionize wealth management through integrity, innovation, and genuine client partnership. As Chief Strategy Officer at Westgroup Financial Management, I help clients navigate financial complexity to achieve their goals with clarity and confidence.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My entrepreneurial vision extends beyond traditional finance. When I saw gaps in compassionate care for Canadians, I created home care services that prioritize dignity and excellence. Through Vanquity Investments, I lead strategic acquisitions focused on creating meaningful value for all stakeholders involved.
          </p>
          
          <motion.blockquote
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative my-12 pl-8 pr-4 py-8 bg-gray-100 rounded-md border-l-[3px] border-gray-300 shadow-sm"
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
            <p className="text-xl sm:text-2xl font-serif italic text-gray-900 leading-relaxed">
              Each venture reflects the same core belief: business should be a powerful force for good.
            </p>
          </motion.blockquote>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Every relationship I build, every strategy I craft, and every decision I make centers on one fundamental truth: that wealth creation and positive impact aren't separate objectives. When aligned properly, they become the foundation for something truly meaningful.
          </p>
        </div>
      </div>
    </section>
  );
}
