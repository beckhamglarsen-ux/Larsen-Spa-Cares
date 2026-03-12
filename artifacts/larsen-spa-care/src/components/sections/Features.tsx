import { motion } from "framer-motion";
import { ShieldCheck, MapPin } from "lucide-react";

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/40 rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck className="w-64 h-64 text-primary" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 relative z-10">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 relative z-10">Our Clean Water Guarantee</h3>
            <p className="text-lg text-muted-foreground mb-6 relative z-10 leading-relaxed">
              We stand behind our work. If you're ever unsatisfied with the clarity or balance of your water after a service, we'll return to make it right. Your peace of mind is our priority.
            </p>
            <ul className="space-y-3 relative z-10">
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" /> Professional grade chemicals
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" /> Accurate digital testing
              </li>
              <li className="flex items-center gap-3 text-foreground font-medium">
                <div className="w-2 h-2 rounded-full bg-primary" /> Respect for your property
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-primary text-white rounded-3xl p-10 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <MapPin className="w-64 h-64 text-white" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-8 relative z-10">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-4 relative z-10">Perfect for Desert Color</h3>
            <p className="text-white/80 text-lg mb-6 relative z-10 leading-relaxed">
              We are a local business focused specifically on the St. George and Desert Color area. We understand the local water hardness, extreme temperatures, and high-use rental environments.
            </p>
            <div className="grid grid-cols-2 gap-4 relative z-10 mt-8">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="font-bold text-xl mb-1">Local</div>
                <div className="text-white/70 text-sm">St. George based</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="font-bold text-xl mb-1">Fast</div>
                <div className="text-white/70 text-sm">Rapid response</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
