import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const trustPoints = [
  {
    title: "Reliable service",
    text: "Consistent maintenance for homeowners, rentals, and second homes that need dependable spa care."
  },
  {
    title: "Clean, balanced water",
    text: "Service focused on water clarity, chemical balance, and keeping your spa ready to enjoy."
  },
  {
    title: "Local and responsive",
    text: "Fast communication, simple scheduling, and dependable local support in Desert Color and St. George."
  }
];

export function Reviews() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mx-auto mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Why Owners Choose Larsen Spa Care
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted local service for homeowners, rentals, and second homes in Desert Color.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {trustPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-bold font-display text-foreground mb-3 leading-snug">
                {point.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}