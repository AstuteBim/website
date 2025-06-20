"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  BrainCircuit, 
  Building2, 
  Database, 
  Factory,
  Users
} from "lucide-react";

const advantages = [
  {
    title: "Real-World Construction Data",
    description: "Trained on actual construction projects and standards",
    icon: Database
  },
  {
    title: "Ready to use",
    description: "Ready to use Revit family",
    icon: Users
  },
  {
    title: "Spatial Reasoning Engine",
    description: "Advanced AI that understands construction and spaces",
    icon: Building2
  },
  {
    title: "Multimodal Input",
    description: "Accepts text, images, and CAD files as input",
    icon: BrainCircuit
  },
  {
    title: "AEC Industry Focus",
    description: "Built exclusively for architecture and construction",
    icon: Factory
  }
];

const disadvantages = [
  {
    title: "Generic Use",
    description: "Generic templates with limited real-world validation",
    icon: Database
  },
  {
    title: "No contextual",
    description: "No spatial intelligence, requires explicit modelling",
    icon: Users
  },
  {
    title: "Not built for you",
    description: "The give general-purpose tools adapted not specific to AEC",
    icon: Building2
  },
  {
    title: "Input Limitation",
    description: "Limited input options, primarily manual modeling.",
    icon: BrainCircuit
  }
];

export default function WhyUs() {
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
    <section id="why-us" className="pt-20 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">It's REAC . It's Usable . It's Different</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            GigBIM Labs offers a revolutionary approach to BIM that outperforms other AI-powered CAD solutions
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-center">Agentic AI</h3>
            <div className="space-y-6 flex-1">
              {advantages.map((advantage, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  variants={item}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <advantage.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{advantage.title}</h4>
                      <CheckCircle2 className="w-4 h-4 text-chart-2" />
                    </div>
                    <p className="text-sm text-foreground/70 mt-1">{advantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border/50 p-6 flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-center">Other AI for CAD</h3>
            <div className="space-y-6 flex-1">
              {disadvantages.map((disadvantage, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-4"
                  variants={item}
                >
                  <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center shrink-0">
                    <disadvantage.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-muted-foreground">{disadvantage.title}</h4>
                      <XCircle className="w-4 h-4 text-destructive/70" />
                    </div>
                    <p className="text-sm text-foreground/50 mt-1">{disadvantage.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}