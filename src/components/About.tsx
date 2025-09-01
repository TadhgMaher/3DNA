import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Creating spaces that inspire and endure
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                With over a decade of experience in architectural design, I specialize in creating 
                innovative, sustainable spaces that seamlessly blend functionality with aesthetic excellence. 
                My approach focuses on understanding the unique needs of each client while respecting 
                the environment and community context.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From residential complexes to commercial developments, each project is an opportunity 
                to push boundaries and create meaningful architecture that stands the test of time.
              </p>
              <div className="flex space-x-12">
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">50+</h3>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">12+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-900 mb-2">8</h3>
                  <p className="text-gray-600">Awards Won</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Architect portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-900 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">3DNA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;