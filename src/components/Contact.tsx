import React, { useState } from "react";
import { Send, ArrowLeft } from "lucide-react";
import { ContactFormData } from "../types";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [titleRef, titleVisible] = useScrollAnimation(0.3);
  const [formRef, formVisible] = useScrollAnimation(0.2);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const isStepComplete = (step: number) => {
    switch (step) {
      case 1:
        return formData.name.trim() !== "";
      case 2:
        return formData.email.trim() !== "";
      case 3:
        return formData.phone.trim() !== "";
      case 4:
        return formData.message.trim() !== "";
      default:
        return false;
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-lg">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Thank You!
              </h3>
              <p className="text-gray-600 text-lg">
                Your message has been received. We'll get back to you within 24
                hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "animate-slide-up" : "animate-hidden"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your architectural vision to life? Let's start a
            conversation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            ref={formRef}
            className={`bg-white p-12 shadow-xl transition-all duration-1000 ${
              formVisible ? "animate-scale-in" : "animate-hidden"
            }`}
          >
            <div className="mb-8">
              <div className="flex justify-center space-x-2 mb-8">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      step <= currentStep ? "bg-gray-700" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  What's your name?
                </h3>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && isStepComplete(1) && handleNext()
                  }
                  placeholder="Enter your full name"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-gray-700 focus:outline-none transition-colors duration-300 text-lg"
                  autoFocus
                />
                {isStepComplete(1) && (
                  <button
                    onClick={handleNext}
                    className="mt-6 bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                  >
                    Continue
                  </button>
                )}
              </div>
            )}

            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  What's your email?
                </h3>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && isStepComplete(2) && handleNext()
                  }
                  placeholder="Enter your email address"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-gray-700 focus:outline-none transition-colors duration-300 text-lg"
                  autoFocus
                />
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handleBack}
                    className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                  {isStepComplete(2) && (
                    <button
                      onClick={handleNext}
                      className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  What's your phone number?
                </h3>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && isStepComplete(3) && handleNext()
                  }
                  placeholder="Enter your phone number"
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-gray-700 focus:outline-none transition-colors duration-300 text-lg"
                  autoFocus
                />
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handleBack}
                    className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                  {isStepComplete(3) && (
                    <button
                      onClick={handleNext}
                      className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  How can we help?
                </h3>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-gray-700 focus:outline-none transition-colors duration-300 text-lg resize-none"
                  autoFocus
                />
                <div className="flex justify-between mt-6">
                  <button
                    onClick={handleBack}
                    className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Back</span>
                  </button>
                  {isStepComplete(4) && (
                    <button
                      onClick={handleSubmit}
                      className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
