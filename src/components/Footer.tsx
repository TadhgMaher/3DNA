import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const legalLinks = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Refund Policy", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16">
                <img
                  src="./Logo.png"
                  alt="3DNA Logo"
                  className="w-full h-full object-contain"
                  onLoad={() => console.log("Footer logo loaded successfully")}
                  onError={() => console.log("Footer logo failed to load")}
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating innovative architectural solutions that inspire and
              endure for communities across Ireland.
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-blue-900 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 flex items-center justify-center hover:bg-blue-900 transition-colors duration-300"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525 5.6V3.65c0-.775-.025-1.55-.025-2.325 0-.775 0-1.275 0-1.275h3.45c0 0 .05 1.975.525 3.075.475 1.1 1.35 2.05 2.575 2.525v3.45c-1.425-.075-2.725-.5-3.875-1.225v5.85c0 2.575-2.1 4.675-4.675 4.675S5.85 15.8 5.85 13.225s2.1-4.675 4.675-4.675c.275 0 .525.025.775.075v3.55c-.25-.075-.5-.125-.775-.125-1.275 0-2.325 1.05-2.325 2.325s1.05 2.325 2.325 2.325 2.325-1.05 2.325-2.325V5.6h1.675z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <div className="space-y-2">
              {legalLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 3DNA Architectural Design Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
