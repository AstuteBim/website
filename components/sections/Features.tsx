"use client";

import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Image, 
  Package, 
  GitFork, 
  FileOutput, 
  Users,
  Settings
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Interface",
    description: "Describe your design in plain language to generate complex BIM models."
  },
  {
    icon: Image,
    title: "Image + File Input Support",
    description: "Upload sketches, photos, or existing CAD files as starting points."
  },
  {
    icon: Package,
    title: "LOD 350 Output",
    description: "Generate highly detailed models suitable for construction documentation."
  },
  {
    icon: GitFork,
    title: "Version Control",
    description: "Track changes, revert to previous versions, and manage iterations."
  },
  {
    icon: FileOutput,
    title: "Revit/IFC Export",
    description: "Seamlessly export to industry-standard formats for compatibility."
  },
  {
    icon: Users,
    title: "Collaboration Tools",
    description: "Work together with your team in real-time on shared projects."
  },
  {
    icon: Settings,
    title: "Parameter Editing",
    description: "Fine-tune models based on real-world feedback and requirements."
  }
];

export default function Features() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="pt-20 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Built for Architects, Engineers, and Designers</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Powerful features designed specifically for AEC professionals to streamline BIM creation.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              variants={item}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}