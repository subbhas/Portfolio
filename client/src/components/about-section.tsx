import { motion } from "framer-motion";

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
          
          <blockquote className="my-12 p-8 rounded-lg bg-white shadow-sm !border-l-4 !border-[#103137]">
            <p className="text-xl italic leading-relaxed text-gray-800 not-italic">
              I concentrate on building sustainable wealth that endures across generations. This philosophy shaped everything I built.
            </p>
          </blockquote>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I founded WealthX Financial Solutions with a clear mission: to revolutionize wealth management through integrity, innovation, and genuine client partnership. As Chief Strategy Officer at Westgroup Financial Management, I help clients navigate financial complexity to achieve their goals with clarity and confidence.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My entrepreneurial vision extends beyond traditional finance. When I saw gaps in compassionate care for Canadians, I created home care services that prioritize dignity and excellence. Through Vanquity Investments, I lead strategic acquisitions focused on creating meaningful value for all stakeholders involved.
          </p>
          
          <blockquote className="my-12 p-8 rounded-lg bg-white shadow-sm !border-l-4 !border-[#103137]">
            <p className="text-xl italic leading-relaxed text-gray-800 not-italic">
              Each venture reflects the same core belief: business should be a powerful force for good.
            </p>
          </blockquote>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Every relationship I build, every strategy I craft, and every decision I make centers on one fundamental truth: that wealth creation and positive impact aren't separate objectives. When aligned properly, they become the foundation for something truly meaningful.
          </p>
        </div>
      </div>
    </section>
  );
}
