import { Candy, Sparkles, Palette, Code2, MonitorSmartphone, GraduationCap, BookOpen, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import DonationBox from '../components/DonationBox';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          {/* Hero content from previous update */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
                <span className="gradient-text">TYDOMET</span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start mb-8 space-x-4">
                <div className="flex -space-x-2">
                  <img 
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Client" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Client" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
                    alt="Client" 
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-gray-300">
                  <span className="font-bold text-white">100+ reviews</span>
                  <span className="ml-2">(4.96 of 5)</span>
                </p>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Hi, I'm a passionate UX Designer and Software Engineering student at IBM, 
                dedicated to creating user-friendly digital experiences that delight and inspire.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link 
                  to="/contact" 
                  className="wonka-button px-8 py-4 rounded-full text-white font-semibold inline-flex items-center"
                >
                  Get in touch
                </Link>
                <Link 
                  to="/portfolio" 
                  className="px-8 py-4 rounded-full border-2 border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-1 relative">
              <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/src/assets/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="wonka-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Palette className="h-10 w-10 text-purple-500 animate-float" />
              <h3 className="text-2xl font-bold ml-3 gradient-text">Design</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>UI/UX Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>Responsive Web Design</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>Brand Identity</span>
              </li>
            </ul>
          </div>

          <div className="wonka-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <Code2 className="h-10 w-10 text-purple-500 animate-float" />
              <h3 className="text-2xl font-bold ml-3 gradient-text">Development</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>React & Next.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>Node.js & Express</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>TypeScript</span>
              </li>
            </ul>
          </div>

          <div className="wonka-card p-8 rounded-2xl">
            <div className="flex items-center mb-6">
              <MonitorSmartphone className="h-10 w-10 text-purple-500 animate-float" />
              <h3 className="text-2xl font-bold ml-3 gradient-text">Tools</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>Figma & Adobe XD</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>Git & GitHub</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-500 mr-3">•</span>
                <span>VS Code & DevTools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Educational Journey Section */}
      <div className="py-16 bg-gradient-to-br from-purple-800/30 via-pink-800/30 to-red-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">My Educational Journey</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="wonka-card p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-10 w-10 text-purple-500 animate-float" />
                <h3 className="text-2xl font-bold ml-3 gradient-text">Current Progress</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <BookOpen className="h-6 w-6 text-pink-500 mr-3 mt-1" />
                  <span>Completed 60% of IBM Software Engineering Program</span>
                </li>
                <li className="flex items-start">
                  <Coffee className="h-6 w-6 text-pink-500 mr-3 mt-1" />
                  <span>Mastered core programming concepts and web technologies</span>
                </li>
                <li className="flex items-start">
                  <Code2 className="h-6 w-6 text-pink-500 mr-3 mt-1" />
                  <span>Building real-world projects with modern frameworks</span>
                </li>
              </ul>
            </div>

            <div className="wonka-card p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Sparkles className="h-10 w-10 text-purple-500 animate-float" />
                <h3 className="text-2xl font-bold ml-3 gradient-text">Challenges</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  <span>Balancing full-time study with freelance work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  <span>Meeting educational expenses and resource costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-3">•</span>
                  <span>Keeping up with rapidly evolving technologies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Donation Box */}
          <div className="max-w-lg mx-auto">
            <DonationBox />
          </div>
        </div>
      </div>
    </div>
  );
}