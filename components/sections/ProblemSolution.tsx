"use client";

import { motion } from "framer-motion";
import { 
  Clock, 
  DollarSign, 
  UserX, 
  BrainCircuit, 
  CircleDollarSign, 
  Zap, 
  Paintbrush
} from "lucide-react";

const problems = [
  {
    title: "Time-Consuming Process",
    description: "BIM modeling can take weeks or months to complete",
    icon: Clock
  },
  {
    title: "High Costs",
    description: "Expensive software licenses and specialist staff",
    icon: DollarSign
  },
  {
    title: "Requires Expert Knowledge",
    description: "Steep learning curve for effective BIM implementation",
    icon: UserX
  }
];

const solutions = [
  {
    title: "AI-Powered Automation",
    description: "Generate models in minutes or hours, not weeks",
    icon: BrainCircuit
  },
  {
    title: "Reduced Expenses",
    description: "Lower total cost of BIM implementation",
    icon: CircleDollarSign
  },
  {
    title: "Faster Iteration",
    description: "Quick generation of alternatives and variations",
    icon: Zap
  },
  {
    title: "Creative Freedom",
    description: "Focus on design, not technical modeling constraints",
    icon: Paintbrush
  }
];

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="pt-20 py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Solving Real Problems in BIM</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We're addressing the fundamental challenges that make BIM adoption difficult
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">The Problem</h3>
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{problem.title}</h4>
                      <p className="text-foreground/70 mt-1">{problem.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Our Solution</h3>
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <motion.div 
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <solution.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{solution.title}</h4>
                      <p className="text-foreground/70 mt-1">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}