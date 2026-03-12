import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Request service",
    description: "Call, text, or fill out the quick form with your property details and service needs."
  },
  {
    number: "2",
    title: "Choose your plan",
    description: "We'll help you choose the right option for your spa, property type, and usage level."
  },
  {
    number: "3",
    title: "Enjoy a cleaner spa",
    description: "Your water stays balanced, clear, and ready to use with reliable ongoing care."
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background relative border-y border-border/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">How it works</h2>
          <p className="text-lg text-muted-foreground">Getting started is simple and stress-free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border/80 z-0 border-t-2 border-dashed border-primary/30" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-primary/10 border-4 border-background flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-display font-bold text-2xl">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
