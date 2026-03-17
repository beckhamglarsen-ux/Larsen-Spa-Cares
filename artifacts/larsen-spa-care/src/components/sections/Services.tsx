import { motion } from "framer-motion";
import { Droplets, CalendarDays, RefreshCw, Key } from "lucide-react";

const services = [
  {
    title: "Twice a Week Maintenance",
    price: "$20/visit",
    icon: <Droplets className="w-8 h-8" />,
    description: "A high-frequency service option for spas that need more consistent cleaning and balancing.",
    features: [
      "Water testing and balancing",
      "Sanitizer level adjustment",
      "Filter inspection and light cleaning",
      "Surface wipe-down",
      "Debris removal"
    ]
  },
  {
    title: "Monthly Maintenance",
    price: "$110/visit",
    icon: <CalendarDays className="w-8 h-8" />,
    description: "Perfect for lower-use personal spas that need an expert check.",
    features: [
      "Comprehensive water chemistry check",
      "Deep shock treatment",
      "Filter deep clean",
      "Equipment visual inspection",
      "Cover cleaning"
    ]
  },
  {
    title: "Drain & Refill",
    price: "Starting at $130",
    icon: <RefreshCw className="w-8 h-8" />,
    description: "Recommended every 2-3 months to reset your water quality.",
    features: [
      "Complete water drain",
      "Shell deep clean and polish",
      "Fresh water refill",
      "Initial chemical startup balance",
      "System air-lock check"
    ]
  },
  {
    title: "Vacation Rental Care",
    price: "Custom",
    icon: <Key className="w-8 h-8" />,
    description: "Turn-key service aligned with your guest check-ins.",
    features: [
      "Between-guest sanitation",
      "Heavy-use chemical balancing",
      "Photo documentation",
      "Emergency issue reporting",
      "Automated scheduling"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Complete Spa Maintenance</h2>
          <p className="text-lg text-muted-foreground">
            We offer tailored service plans designed for the unique demands of Desert Color properties, ensuring your hot tub is pristine year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-black/5 border border-border/50 hover:shadow-xl hover:border-primary/20 transition-all duration-300 flex flex-col h-full group"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold font-display text-foreground mb-2">{service.title}</h3>
              <div className="text-primary font-bold mb-4">{service.price}</div>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              
              <ul className="space-y-3 pt-6 border-t border-border/50">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
