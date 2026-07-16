import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-secondary/50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your usage. No hidden fees, just crystal clear water.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

          {/* Monthly */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-border/50 h-fit"
          >
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Monthly</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-foreground">$110</span>
              <span className="text-muted-foreground font-medium">/mo</span>
            </div>
            <p className="text-sm font-medium text-primary mb-6">1 visit per month · same day each visit</p>
            <p className="text-muted-foreground mb-8 min-h-[48px]">Perfect for lower-use personal spas that just need an expert touch.</p>
            <Button variant="outline" className="w-full bg-transparent" onClick={() => scrollTo("quote")}>Choose Monthly</Button>
          </motion.div>

          {/* Weekly (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-8 shadow-2xl shadow-primary/20 border border-primary relative transform md:-translate-y-4"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-sm whitespace-nowrap">
              Most Popular
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">Weekly</h3>
            <div className="flex items-baseline gap-1 mb-2 text-white">
              <span className="text-5xl font-bold">$130</span>
              <span className="text-white/80 font-medium">/mo</span>
            </div>
            <p className="text-sm font-medium text-white/90 mb-6">4 visits per month · same day each week</p>
            <p className="text-white/90 mb-8 min-h-[48px]">The most consistent water quality — ideal for high-use spas and vacation rentals. Just $20 more than Monthly.</p>
            <ul className="space-y-4 mb-8">
              {[
                "Priority scheduling",
                "Consistent water clarity",
                "Prevents chemical imbalance",
                "Includes light cleaning"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <div className="bg-white/20 rounded-full p-1">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="accent" className="w-full bg-white text-primary hover:bg-white/90" size="lg" onClick={() => scrollTo("quote")}>
              Choose Weekly
            </Button>
          </motion.div>

          {/* Twice a Month */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-border/50 h-fit"
          >
            <h3 className="text-xl font-bold font-display text-foreground mb-2">Twice a Month</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-bold text-foreground">$120</span>
              <span className="text-muted-foreground font-medium">/mo</span>
            </div>
            <p className="text-sm font-medium text-primary mb-6">2 visits per month · same day each visit</p>
            <p className="text-muted-foreground mb-8 min-h-[48px]">Steady care for regularly used spas that want more than a monthly check.</p>
            <Button variant="outline" className="w-full bg-transparent" onClick={() => scrollTo("quote")}>Choose Twice a Month</Button>
          </motion.div>

        </div>

        {/* One-time service */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-8 bg-white rounded-3xl p-8 shadow-lg border border-border/50 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="flex-grow">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">One-time service</div>
            <h3 className="text-xl font-bold font-display text-foreground mb-1">Drain &amp; Refill</h3>
            <p className="text-muted-foreground">Complete water reset recommended every 2–3 months.</p>
          </div>
          <div className="flex items-baseline gap-1 shrink-0">
            <span className="text-lg font-bold text-muted-foreground mr-1">Starting at</span>
            <span className="text-4xl font-bold text-foreground">$130</span>
          </div>
          <Button variant="outline" className="bg-transparent shrink-0" onClick={() => scrollTo("quote")}>Schedule Reset</Button>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
          *Pricing may vary for unusually large tubs, severe neglect, or special access conditions. We will always confirm final pricing before beginning service.
        </p>
        <p className="text-center text-base font-medium text-foreground mt-4 max-w-2xl mx-auto">
          Manage 5 or more properties? Volume rates available —{" "}
          <a href="tel:8016616107" className="text-primary font-semibold hover:underline">call</a> or{" "}
          <a href="sms:8016616107" className="text-primary font-semibold hover:underline">text</a> 801-661-6107.
        </p>
      </div>
    </section>
  );
}
