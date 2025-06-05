"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Logo } from "@/components/ui/logo";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Why Us", href: "#why-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      setMobileMenuOpen(false);
      // Add a small delay to ensure the mobile menu closes smoothly before scrolling
      setTimeout(() => {
        const navHeight = 80; // Approximate navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }, 300);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <Link href="#hero" className="z-50 flex items-center space-x-2">
          <Logo className="w-8 h-8" />
          <span className="font-bold text-xl tracking-tight">GigBIM Labs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          
          <Button 
            onClick={() => scrollToSection("#cta")}
            variant="default" 
            className="rounded-full px-6"
          >
            Join Beta
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="relative z-50"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-[9999] md:hidden transition-all duration-300",
            mobileMenuOpen 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 -translate-x-full pointer-events-none"
          )}
        >
          <div className="flex flex-col h-screen pt-24 px-6">
            <nav className="flex flex-col space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto pb-12">
              <Button 
                onClick={() => scrollToSection("#cta")}
                size="lg"
                className="w-full rounded-full py-6 text-lg"
              >
                Join Beta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}