"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CTA() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: "",
    isSubmitting: false,
    isSubmitted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    setFormState({ ...formState, isSubmitting: true });
    
    // Simulate API call
    setTimeout(() => {
      setFormState({ 
        ...formState, 
        isSubmitting: false,
        isSubmitted: true,
        name: "",
        email: "",
        role: "" 
      });
    }, 1500);
  };

  return (
    <section id="cta" className="pt-20 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border/50 rounded-xl p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute -z-10 opacity-30 top-0 right-0 w-full h-full pointer-events-none">
              <div className="absolute -top-24 -right-24 w-64 h-64 border border-primary/10 rounded-full" />
              <div className="absolute bottom-12 -left-16 w-48 h-48 border border-primary/10 rounded-full" />
            </div>
            
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold">Join the exclusive access to experience the world of AI in BIM</h2>
              <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                Join our early adopters and shape the future of BIM design
              </p>
            </div>

            {formState.isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-chart-2/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-chart-2">
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Thank You for Joining!</h3>
                <p className="text-foreground/70">
                  We've received your request for beta access. We'll be in touch soon with more information.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Your Role</Label>
                  <Select
                    value={formState.role}
                    onValueChange={(value) => setFormState({ ...formState, role: value })}
                    required
                  >
                    <SelectTrigger id="role">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="architect">Architect</SelectItem>
                      <SelectItem value="engineer">Engineer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="contractor">Contractor</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full rounded-full py-6"
                    disabled={formState.isSubmitting}
                  >
                    {formState.isSubmitting ? "Processing..." : "Join Beta"}
                  </Button>
                  <p className="text-sm text-foreground/50 text-center mt-4">
                    We'll only use your email for beta access updates.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}