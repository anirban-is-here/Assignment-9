import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content rounded-b-2xl shadow-inner">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-3">
            Skill<span className="text-secondary">Swap</span>
          </h2>
          <p className="text-sm opacity-80">
            Empowering communities by connecting people who want to learn and share skills.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-base-content/90">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/skills" className="hover:text-primary transition-colors">Browse Skills</a></li>
            <li><a href="/providers" className="hover:text-primary transition-colors">Top Providers</a></li>
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-base-content/90">Support</h3>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-base-content/90">Connect</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">
              <i className="text-xl"><Facebook /></i>
            </a>
            <a href="#" className="hover:text-primary">
              <i className=" text-xl"><Twitter/></i>
            </a>
            <a href="#" className="hover:text-primary">
              <i className=" text-xl"><Instagram/></i>
            </a>
            <a href="#" className="hover:text-primary">
              <i className=" text-xl"><Linkedin/></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-base-300 text-center py-4 text-sm opacity-70">
        © {new Date().getFullYear()} SkillSwap. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
