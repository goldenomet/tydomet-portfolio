import { Github, Twitter, Linkedin, MessageSquare, ExternalLink, AlertTriangle } from 'lucide-react';
import DonationBox from '../components/DonationBox';

const projects = [
  {
    title: "ReliabilityIQ",
    description: "A comprehensive reliability engineering platform featuring equipment health monitoring, maintenance scheduling, and predictive analytics. Built with modern cloud architecture and real-time data processing capabilities.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: [
      "React", 
      "Node.js", 
      "PostgreSQL", 
      "Machine Learning",
      "IoT Integration",
      "WebSocket",
      "Redis",
      "Docker",
      "AWS",
      "TensorFlow"
    ],
    features: [
      "Real-time equipment monitoring with WebSocket connections",
      "Advanced predictive maintenance using machine learning algorithms",
      "Interactive 3D visualization of equipment status",
      "Automated maintenance scheduling with smart prioritization",
      "Performance analytics with customizable metrics",
      "Multi-tenant architecture with role-based access control",
      "Integration with IoT sensors and industrial equipment",
      "Automated report generation and export",
      "Mobile-responsive dashboard with PWA support",
      "API integration with common CMMS systems"
    ],
    techStack: {
      frontend: [
        "React with TypeScript",
        "Redux Toolkit for state management",
        "WebSocket for real-time updates",
        "Three.js for 3D visualizations",
        "TailwindCSS for styling"
      ],
      backend: [
        "Node.js with Express",
        "PostgreSQL for data persistence",
        "Redis for caching",
        "Docker containerization",
        "AWS services (ECS, RDS, S3)"
      ],
      ml: [
        "TensorFlow for predictive models",
        "Python data processing pipeline",
        "Scikit-learn for statistical analysis",
        "Custom anomaly detection algorithms"
      ]
    },
    github: "https://github.com/yourusername/reliabilityiq",
    demo: "https://reliabilityiq.com"
  },
  {
    title: "Food Identification App",
    description: "An AI-powered mobile application that identifies food items and provides nutritional information through advanced image recognition. Features real-time analysis and personalized dietary recommendations.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: [
      "React Native",
      "TensorFlow",
      "Computer Vision",
      "API Integration",
      "Firebase",
      "GraphQL",
      "Node.js",
      "MongoDB",
      "AWS Lambda",
      "CloudFront"
    ],
    features: [
      "Real-time food recognition with 95% accuracy",
      "Detailed nutritional information and analysis",
      "Personalized meal tracking and recommendations",
      "Barcode scanning for packaged foods",
      "Restaurant menu item recognition",
      "Dietary restrictions and allergen alerts",
      "Meal planning and recipe suggestions",
      "Social sharing and community features",
      "Offline mode with sync capabilities",
      "Integration with fitness tracking apps"
    ],
    techStack: {
      mobile: [
        "React Native with TypeScript",
        "Redux Saga for state management",
        "Native camera integration",
        "Custom ML model integration",
        "Offline-first architecture"
      ],
      backend: [
        "Node.js with GraphQL API",
        "MongoDB for flexible data storage",
        "AWS Lambda for serverless functions",
        "Firebase for real-time features",
        "CloudFront for global CDN"
      ],
      ml: [
        "Custom TensorFlow model for food recognition",
        "Transfer learning with MobileNetV3",
        "Real-time image processing pipeline",
        "Nutritional database integration"
      ]
    },
    status: "beta",
    github: "https://github.com/yourusername/food-identification",
    demo: "https://food-id-beta.example.com"
  }
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6" />,
    url: "https://github.com/yourusername",
    color: "hover:text-gray-800"
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-6 w-6" />,
    url: "https://x.com/yourusername",
    color: "hover:text-blue-400"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-600"
  },
  {
    name: "Discord",
    icon: <MessageSquare className="h-6 w-6" />,
    url: "https://discord.gg/yourusername",
    color: "hover:text-indigo-500"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-16">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white transition-all duration-300 transform hover:scale-110 ${link.color}`}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Projects Grid */}
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="wonka-card overflow-hidden rounded-xl">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                {project.status === 'beta' && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Beta Testing
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Technology Stack</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.techStack.frontend && (
                      <div className="space-y-2">
                        <h5 className="font-medium text-purple-600">Frontend</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.techStack.frontend.map((tech, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.techStack.backend && (
                      <div className="space-y-2">
                        <h5 className="font-medium text-pink-600">Backend</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.techStack.backend.map((tech, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {project.techStack.ml && (
                      <div className="space-y-2">
                        <h5 className="font-medium text-blue-600">Machine Learning</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {project.techStack.ml.map((tech, i) => (
                            <li key={i} className="flex items-center">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-3">Key Features</h4>
                  <div className="grid md:grid-cols-2 gap-x-4 gap-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-1" />
                    {project.status === 'beta' ? 'Try Beta' : 'Live Demo'}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Donation Section */}
        <div className="max-w-lg mx-auto mb-16">
          <DonationBox />
        </div>
      </div>
    </div>
  );
}