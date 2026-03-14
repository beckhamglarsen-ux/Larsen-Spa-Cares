import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How often should my hot tub be serviced?",
    a: "Most hot tubs do best with routine professional service, especially in warm climates or high-use rental properties. Twice-a-week service is ideal for high-use spas, while monthly service can work well for lighter-use properties."
  },
  {
    q: "Do you service vacation rentals?",
    a: "Yes. Larsen Spa Care works with all rentals and is designed for guest-ready spa care."
  },
  {
    q: "What is included in regular maintenance?",
    a: "Water testing, chemical balancing, light cleaning, filter attention when applicable, and a visual inspection of the spa's condition."
  },
  {
    q: "Do you offer drain and refill service?",
    a: "Yes. We offer drain and refill service starting at $130, including wipe-down, refill, startup, and balancing."
  },
  {
    q: "Can I get service if I do not live in town?",
    a: "Yes. We work with remote owners, second homes, and rental properties that need reliable local support."
  },
  {
    q: "What is the fastest way to get started?",
    a: "Text or call 801-661-6107, or submit the quote form below with your property details."
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mx-auto mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">Frequently asked questions</h2>
          <p className="text-lg text-muted-foreground">Quick answers for homeowners and rental owners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-bold font-display text-foreground mb-3 leading-snug">{faq.q}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
