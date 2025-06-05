"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="w-8 h-8" />
              <span className="font-bold text-xl tracking-tight">GigBIM Labs</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Transforming the future of Building Information Modeling with AI.
            </p>
            <p className="text-sm text-foreground/50">
              Registered Company: U43299MH2025PTC447936
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-foreground/70 hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-foreground/70 hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-foreground/70 hover:text-foreground transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#cta" className="text-foreground/70 hover:text-foreground transition-colors">
                  Join Beta
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:astuteaecbuild@gmail.com" className="text-foreground/70 hover:text-foreground transition-colors">
                  astuteaecbuild@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a href="tel:+917305593579" className="text-foreground/70 hover:text-foreground transition-colors">
                  +91 7305593579
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-foreground/70">
                  UNIT NO 407, FENKIN 9, THANE, Maharashtra
                </span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5 text-foreground/70" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Linkedin className="w-5 h-5 text-foreground/70" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                <Github className="w-5 h-5 text-foreground/70" />
              </a>
            </div>
            <div className="text-sm text-foreground/50">
              <p>© {currentYear} GigBIM Labs. All rights reserved.</p>
              <div className="mt-2 space-x-4">
                <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}