import React, { useState } from "react";
import { X } from "lucide-react";
import { Project } from "../types";
import { projects } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setTimeout(() => setIsModalVisible(true), 10); // Small delay for animation
  };

  const closeProject = () => {
    setIsModalVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300); // Wait for animation to complete
  };

  return (
    <section id="portfolio" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "animate-fade-scale" : "animate-hidden"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of architectural projects, each telling a
            unique story of innovation and design excellence.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
            gridVisible
              ? "animate-slide-up animate-stagger-1"
              : "animate-hidden"
          }`}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                gridVisible
                  ? `animate-fade-scale animate-stagger-${(index % 4) + 1}`
                  : "animate-hidden"
              }`}
            >
              <div className="bg-white overflow-hidden shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <button
                    onClick={() => openProject(project)}
                    className="bg-gray-700 text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 font-semibold"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Extended Project View */}
        {selectedProject && (
          <div
            className={`fixed inset-0 bg-black/90 z-50 transition-all duration-500 ease-out ${
              isModalVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`w-[90vw] h-[90vh] bg-white mx-auto mt-[5vh] transition-all duration-500 ease-out transform ${
                isModalVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
            >
              {/* Close Button */}
              <button
                onClick={closeProject}
                className="absolute top-6 right-6 z-10 p-3 bg-white/90 hover:bg-white transition-colors shadow-lg"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Scrollable Content */}
              <div className="h-full overflow-y-auto p-12">
                <div className="max-w-6xl mx-auto space-y-16">
                  {/* Header Section */}
                  <div className="text-center space-y-4">
                    <div className="flex justify-center items-center space-x-8 mb-4">
                      <span className="text-gray-700 font-bold text-lg uppercase tracking-wide">
                        {selectedProject.category}
                      </span>
                      <span className="text-gray-600 text-lg font-medium">
                        {selectedProject.year}
                      </span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Photo and Text Sections - Alternating Layout */}
                  {selectedProject.images.map((image, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-2 gap-16 items-center ${
                        index % 2 === 1 ? "direction-rtl" : ""
                      }`}
                    >
                      {/* Photo */}
                      <div
                        className={`${index % 2 === 1 ? "order-2" : "order-1"}`}
                      >
                        <div className="w-full h-80 overflow-hidden shadow-2xl">
                          <img
                            src={image}
                            alt={`${selectedProject.title} - Image ${
                              index + 1
                            }`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div
                        className={`space-y-6 ${
                          index % 2 === 1 ? "order-1" : "order-2"
                        }`}
                      >
                        <div className="h-80 flex flex-col justify-center space-y-6">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {index === 0 && "Project Overview"}
                            {index === 1 && "Design Philosophy"}
                            {index === 2 && "Key Features"}
                            {index >= 3 && `Section ${index + 1}`}
                          </h3>

                          {index === 0 && (
                            <div className="space-y-4">
                              <div className="space-y-3">
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                  <span className="font-medium text-gray-900">
                                    Location:
                                  </span>
                                  <span className="text-gray-600">
                                    {selectedProject.location ||
                                      "Various Locations"}
                                  </span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                  <span className="font-medium text-gray-900">
                                    Year:
                                  </span>
                                  <span className="text-gray-600">
                                    {selectedProject.year}
                                  </span>
                                </div>
                                <div className="flex justify-between border-b border-gray-200 pb-2">
                                  <span className="font-medium text-gray-900">
                                    Category:
                                  </span>
                                  <span className="text-gray-600">
                                    {selectedProject.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                          )}

                          {index === 1 && (
                            <p className="text-gray-600 leading-relaxed text-lg">
                              This project exemplifies our commitment to
                              creating spaces that seamlessly blend
                              functionality with aesthetic excellence, ensuring
                              each design serves both the immediate needs of its
                              users and the broader community context.
                            </p>
                          )}

                          {index === 2 && (
                            <ul className="space-y-3 text-gray-600 text-lg">
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-700 rounded-full mr-3 flex-shrink-0"></span>
                                Innovative architectural design
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-700 rounded-full mr-3 flex-shrink-0"></span>
                                Sustainable construction methods
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-700 rounded-full mr-3 flex-shrink-0"></span>
                                Modern aesthetic integration
                              </li>
                              <li className="flex items-center">
                                <span className="w-2 h-2 bg-gray-700 rounded-full mr-3 flex-shrink-0"></span>
                                Community-focused spaces
                              </li>
                            </ul>
                          )}

                          {index >= 3 && (
                            <p className="text-gray-600 leading-relaxed text-lg">
                              Each architectural element has been carefully
                              considered to create a harmonious balance between
                              form and function, resulting in spaces that
                              inspire and serve their intended purpose with
                              elegance and efficiency.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Footer spacing */}
                  <div className="h-16"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
