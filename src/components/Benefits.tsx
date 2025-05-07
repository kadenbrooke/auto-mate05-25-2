import { TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Benefits = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1, delay: 200 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1, delay: 400 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.1, delay: 600 });

  return (
    <section id="benefits" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Automate Your Business?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Business automation isn't just about cutting costs—it's about transforming how your business operates and scales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <div 
            ref={ref1} 
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-all duration-700 transform ${
              inView1 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Increased Productivity</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Automation reduces manual tasks, allowing your team to focus on high-value activities that drive business growth.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">✓</span>
                <span>Eliminate repetitive administrative tasks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">✓</span>
                <span>Reduce human error in critical processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 dark:text-blue-400 mr-2">✓</span>
                <span>Enable your team to focus on creative and strategic work</span>
              </li>
            </ul>
          </div>

          <div 
            ref={ref2}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-all duration-700 transform ${
              inView2 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-teal-100 dark:bg-teal-900 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Clock className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Time Savings</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Reclaim hours each day by automating routine tasks that consume your valuable time.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-teal-500 dark:text-teal-400 mr-2">✓</span>
                <span>Automate email responses and follow-ups</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 dark:text-teal-400 mr-2">✓</span>
                <span>Schedule meetings without the back-and-forth</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 dark:text-teal-400 mr-2">✓</span>
                <span>Process data automatically instead of manually</span>
              </li>
            </ul>
          </div>

          <div 
            ref={ref3}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-all duration-700 transform ${
              inView3 ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <DollarSign className="h-8 w-8 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Cost Reduction</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Lower operational costs by automating processes that would otherwise require additional staffing.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 mr-2">✓</span>
                <span>Reduce overhead costs for routine operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 mr-2">✓</span>
                <span>Scale operations without proportional staff increases</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 dark:text-orange-400 mr-2">✓</span>
                <span>Minimize costly errors and rework</span>
              </li>
            </ul>
          </div>

          <div 
            ref={ref4}
            className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 transition-all duration-700 transform ${
              inView4 ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Improved Consistency</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Deliver consistent results and customer experiences through standardized automated processes.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-purple-500 dark:text-purple-400 mr-2">✓</span>
                <span>Ensure all customer interactions follow best practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 dark:text-purple-400 mr-2">✓</span>
                <span>Maintain quality standards across all operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 dark:text-purple-400 mr-2">✓</span>
                <span>Provide reliable 24/7 service without human limitations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;