import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/portfolioData";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation(0.1);

  const testimonialsPerView = 3;
  const maxIndex = testimonials.length - testimonialsPerView;

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "animate-slide-up" : "animate-hidden"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with 3DNA.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Testimonials Container */}
          <div
            ref={testimonialsRef}
            className={`overflow-hidden transition-all duration-1000 ${
              testimonialsVisible ? "animate-fade-scale" : "animate-hidden"
            }`}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 20}%)`,
                width: `${(testimonials.length * 100) / testimonialsPerView}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-gray-50 p-8 hover:shadow-xl hover:shadow-gray-100 transition-all duration-500 transform hover:-translate-y-2 h-full">
                    <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-700 font-medium">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-8 mt-16">
            <button
              onClick={prevTestimonials}
              className="group relative overflow-hidden px-6 py-3 bg-gray-600 text-white transition-all duration-300 hover:bg-gray-700 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <div className="flex items-center space-x-2">
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-medium">Previous</span>
              </div>
            </button>

            {/* Elegant Indicators */}
            <div className="flex items-center space-x-4 px-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-8 bg-gray-700"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonials}
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
    </section>
  );
};

export default Testimonials;
