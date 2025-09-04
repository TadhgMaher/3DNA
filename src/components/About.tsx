import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);

  const slides = [
    {
      title: "What we do",
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            3DNA specializes in architectural design for residential projects,
            focusing on creating innovative and functional homes that meet our
            clients' unique needs. We provide comprehensive design services from
            initial concept through to construction documentation.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our approach combines modern design principles with sustainable
            practices, ensuring that every home we design is not only beautiful
            but also environmentally responsible and energy-efficient.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We work closely with clients throughout the entire design process,
            ensuring their vision is realized while incorporating our expertise
            in space planning, building regulations, and construction methods.
          </p>
        </div>
      ),
    },
    {
      title: "About us",
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            Dylan is a passionate architect who founded 3DNA at the age of 18
            with a vision to create innovative architectural solutions. With
            expertise spanning all stages of architectural design, Dylan brings
            fresh perspectives to every project.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Having worked in numerous architectural firms in County Wexford,
            Dylan combines professional experience with an entrepreneurial
            spirit, focusing on sustainable design principles and understanding
            each client's unique needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            The approach focuses on creating spaces that seamlessly blend
            functionality with aesthetic excellence, ensuring that every design
            serves both the immediate needs of its users and the broader
            community context.
          </p>
        </div>
      ),
    },
    {
      title: "Saulaigh",
      content: (
        <div className="space-y-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            Saulaigh is our sister company that specializes in complementary
            design services, expanding our capabilities to provide comprehensive
            solutions for our clients' projects.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Working in partnership with 3DNA, Saulaigh focuses on specialized
            design elements and consultation services, ensuring that every
            aspect of a project receives expert attention and care.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Together, 3DNA and Saulaigh provide a complete design ecosystem,
            offering clients access to a broader range of expertise and services
            under one collaborative partnership.
          </p>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-5xl font-bold text-gray-900 mb-16 text-center transition-all duration-1000 ${
              titleVisible ? "animate-slide-up" : "animate-hidden"
            }`}
          >
            About 3DNA
          </h2>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-16 items-center min-h-[500px]">
                    {/* Content Section */}
                    <div className="order-2 md:order-1">
                      <h3 className="text-3xl font-bold text-gray-700 mb-8">
                        {slide.title}
                      </h3>
                      <div className="opacity-100">{slide.content}</div>
                    </div>

                    {/* Image Section */}
                    <div className="order-1 md:order-2 relative">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src="/Dylan.jpeg"
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-8 mt-16">
              <button
                onClick={prevSlide}
                className="group relative overflow-hidden px-6 py-3 bg-gray-600 text-white transition-all duration-300 hover:bg-gray-700 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span className="font-medium">Previous</span>
                </div>
              </button>

              {/* Elegant Indicators */}
              <div className="flex items-center space-x-4 px-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "w-8 bg-gray-700"
                        : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="group relative overflow-hidden px-6 py-3 bg-gray-600 text-white transition-all duration-300 hover:bg-gray-700 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium">Next</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
