import { useInView } from '../hooks/useInView';
import { Bot, ArrowRight } from 'lucide-react';

const CTA = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 text-white transition-all duration-1000 ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Bot className="h-16 w-16 mx-auto mb-6 text-blue-200 dark:text-blue-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Build a custom digital workforce that handles admin, customer service, and sales - so you can focus on scaling.
          </h2>
          <p className="text-xl text-blue-100 dark:text-blue-200 mb-8">
            Join the businesses that are saving 20+ hours per week with our automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 dark:text-blue-900 bg-white dark:bg-blue-100 hover:bg-blue-50 dark:hover:bg-blue-200 transition-colors shadow-lg transform hover:-translate-y-1"
            >
              Schedule a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;