import React from 'react';
import { Star, Award } from 'lucide-react';
import { testimonials, awards } from '../data/portfolioData';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with 3DNA.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-4xl font-bold mb-4">Awards & Recognition</h3>
            <p className="text-blue-100 text-lg">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="text-center">
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors duration-300">
                  <h4 className="font-bold text-lg mb-2">{award.title}</h4>
                  <p className="text-blue-200 text-sm mb-1">{award.organization}</p>
                  <p className="text-yellow-400 font-semibold">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;