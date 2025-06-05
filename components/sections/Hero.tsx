"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollToCTA = () => {
    const element = document.querySelector("#cta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 border border-primary/30 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 border border-primary/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-primary/20 rounded-full" />
        
        {/* Architectural Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-full max-h-6xl w-[1px] bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Create BIM models from text, images, or samples
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
              Turn ideas into BIM — Generate parametric models (LOD 350) with text, images, or existing CAD files.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <Button 
              onClick={handleScrollToCTA}
              size="lg" 
              className="rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Join Beta
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-primary/40 flex justify-center pt-3">
          <div className="w-1 h-3 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
}