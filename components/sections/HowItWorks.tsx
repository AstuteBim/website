"use client";

import { motion } from "framer-motion";
import { FileUp, Cpu, Download } from "lucide-react";

const steps = [
  {
    title: "Upload or Type",
    description: "Describe your design using text or images",
    icon: FileUp,
  },
  {
    title: "AI Generates Model",
    description: "Get BIM models with version control, up to LOD 350",
    icon: Cpu,
  },
  {
    title: "Export & Collaborate",
    description: "Export to Revit/IFC and collaborate seamlessly",
    icon: Download,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-20 py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">From Idea to BIM in Minutes</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Our streamlined process transforms your concepts into detailed BIM models with minimal effort.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex-1 relative"
            >
              {/* Step number */}
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold absolute -top-5 -left-2">
                {index + 1}
              </div>
              
              <div className="bg-card rounded-2xl p-6 h-full border border-border/50 group hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-2rem] transform -translate-y-1/2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary/30">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}