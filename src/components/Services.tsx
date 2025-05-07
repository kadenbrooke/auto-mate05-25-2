import { useState } from 'react';
import { 
  FileSpreadsheet, 
  MessagesSquare, 
  Users, 
  Calendar, 
  Mail, 
  PieChart,
  ShieldCheck,
  Clipboard,
  ArrowRight
} from 'lucide-react';
import { useForm } from '../context/FormContext';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const Services = () => {
  const { setMessage } = useForm();
  const servicesList: Service[] = [
    {
      id: 1,
      title: 'Data Entry & Processing',
      description: 'Automate repetitive data entry tasks and streamline your workflow with intelligent data processing.',
      icon: <FileSpreadsheet className="h-8 w-8 text-blue-500 dark:text-blue-400" />
    },
    {
      id: 2,
      title: 'Customer Support',
      description: 'Provide 24/7 customer service with AI chatbots that can handle inquiries, troubleshoot issues, and escalate when needed.',
      icon: <MessagesSquare className="h-8 w-8 text-teal-500 dark:text-teal-400" />
    },
    {
      id: 3,
      title: 'Lead Qualification',
      description: 'Automatically qualify leads based on your criteria and route them to the right sales representatives.',
      icon: <Users className="h-8 w-8 text-orange-500 dark:text-orange-400" />
    },
    {
      id: 4,
      title: 'Scheduling & Calendar Management',
      description: 'Eliminate the back-and-forth of scheduling by automating your calendar management and appointment setting.',
      icon: <Calendar className="h-8 w-8 text-purple-500 dark:text-purple-400" />
    },
    {
      id: 5,
      title: 'Email Management',
      description: 'Sort, prioritize, and respond to emails automatically based on content and importance.',
      icon: <Mail className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />
    },
    {
      id: 6,
      title: 'Business Analytics',
      description: 'Generate automated reports and gain insights from your business data without manual data processing.',
      icon: <PieChart className="h-8 w-8 text-red-500 dark:text-red-400" />
    },
    {
      id: 7,
      title: 'Compliance Monitoring',
      description: 'Stay compliant with regulatory requirements through automated monitoring and reporting systems.',
      icon: <ShieldCheck className="h-8 w-8 text-green-500 dark:text-green-400" />
    },
    {
      id: 8,
      title: 'Document Management',
      description: 'Organize, categorize, and retrieve documents automatically with intelligent document processing.',
      icon: <Clipboard className="h-8 w-8 text-yellow-500 dark:text-yellow-400" />
    }
  ];

  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setActiveService(service);
    const message = `I'm interested in your ${service.title} service. Specifically, I'd like to learn more about how you can help with ${service.description.toLowerCase()}`;
    setMessage(message);
    
    // Smooth scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Automation Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We create custom digital workforce solutions that handle your business operations so you can focus on growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:shadow-lg ${
                activeService?.id === service.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => handleServiceClick(service)}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>

        {activeService && (
          <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="flex items-start">
              <div className="mr-6">{activeService.icon}</div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{activeService.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{activeService.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300"
                  onClick={() => handleServiceClick(activeService)}
                >
                  Learn how we can implement this for your business
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;