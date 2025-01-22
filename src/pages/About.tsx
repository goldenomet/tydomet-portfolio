import { GraduationCap, Code, Palette } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="md:flex items-center space-y-6 md:space-y-0 md:space-x-12">
            <img
              src="/src/assets/profile1.jpeg"
              alt="Profile1"
              className="w-48 h-48 rounded-full object-cover mx-auto md:mx-0"
            />
            <div>
              <h1 className="text-3xl font-bold mb-4">About Me</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                I'm a passionate web and graphic designer currently pursuing Software Engineering at IBM. 
                With a keen eye for design and a love for coding, I create digital experiences that are 
                both beautiful and functional. My journey in tech has been driven by a desire to blend 
                creativity with technical expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Software Engineering</h3>
                <p className="text-gray-600">IBM • Current</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Web Design Certification</h3>
                <p className="text-gray-600">Design Institute • 2022</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold">Skills</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Design</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>UI/UX Design</li>
                  <li>Graphic Design</li>
                  <li>Brand Identity</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Technical</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Palette className="h-8 w-8 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold">Interests & Hobbies</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Beyond my professional work, I'm passionate about exploring new design trends, 
            contributing to open-source projects, and staying up-to-date with the latest 
            technologies. I enjoy attending tech meetups and design conferences to connect 
            with like-minded professionals and share knowledge with the community.
          </p>
        </div>
      </div>
    </div>
  );
}
