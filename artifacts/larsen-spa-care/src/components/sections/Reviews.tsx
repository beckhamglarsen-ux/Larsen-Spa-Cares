import { motion } from "framer-motion";
import { MessageSquareQuote } from "lucide-react";

const reviews = [
  {
    title: "Reliable service",
    text: "Real customer reviews will be added here as Larsen Spa Care continues serving Desert Color homeowners and rental properties."
  },
  {
    title: "Clean, balanced water",
    text: "This section is ready for real feedback from homeowners, vacation rental owners, and returning customers."
  },
  {
    title: "Local and responsive",
    text: "Once you begin collecting reviews, replace these cards with short quotes from actual customers."
  }
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary mx-auto mb-6">
            <MessageSquareQuote className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
            Customer Reviews
          </h2>
          <p className="text-lg text-muted-foreground">
            Real feedback from local homeowners and rental owners will be added here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-md transition-shadow"
            >
              <h4 className="text-lg font-bold font-display text-foreground mb-3 leading-snug">
                {review.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}