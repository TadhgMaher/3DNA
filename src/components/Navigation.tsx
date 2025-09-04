import React from "react";

interface NavigationProps {
  scrollToSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ scrollToSection }) => {
  const navItems = [
    { label: "About", section: "about" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Testimonials", section: "testimonials" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.section}
              onClick={() => scrollToSection(item.section)}
              className="text-white font-medium hover:text-gray-300 transition-colors duration-300 text-lg"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="w-20 h-20">
          <img
            src="./Logo.png"
            alt="3DNA Logo"
            className="w-full h-full object-contain"
            onLoad={() => console.log("Logo loaded successfully")}
            onError={() => console.log("Logo failed to load")}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
