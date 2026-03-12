import { motion } from "framer-motion";
import { CheckCircle2, Phone, MessageSquare, ArrowRight, ShieldCheck, Droplets, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
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
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Premium spa background" 
          className="w-full h-full object-cover opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20 shadow-sm">
              <MapPinIcon className="w-4 h-4" />
              Professional Hot Tub Maintenance in Desert Color
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] text-foreground mb-6">
              Keep your hot tub clean, balanced, and <span className="text-primary relative whitespace-nowrap">
                always ready
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 10 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
                </svg>
              </span> to enjoy
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground/80 font-medium mb-4 max-w-2xl">
              Reliable spa care for Desert Color Resort homes, rentals, and second properties.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Larsen Spa Care takes the stress out of hot tub ownership. We handle the chemicals, cleaning, and balancing so your water stays crystal clear, safe, and inviting for you or your guests.
            </p>
            
            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <Button size="lg" variant="accent" onClick={() => scrollTo("quote")} className="w-full sm:w-auto group">
                Request a Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a href="tel:8016616107" className="inline-flex items-center justify-center h-14 rounded-xl px-8 text-lg font-semibold border-2 border-primary text-primary bg-white/50 backdrop-blur-sm hover:bg-white transition-all duration-200 w-full sm:w-auto">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
              <a href="sms:8016616107" className="inline-flex items-center justify-center h-14 rounded-xl px-8 text-lg font-semibold hover:bg-primary/5 hover:text-primary transition-all duration-200 w-full sm:w-auto">
                <MessageSquare className="mr-2 w-5 h-5 text-primary" />
                Text Us
              </a>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-6 mt-12 pt-8 border-t border-border/60">
              <TrustChip icon={<Droplets className="w-4 h-4" />} text="Bi-weekly service" />
              <TrustChip icon={<ShieldCheck className="w-4 h-4" />} text="Satisfaction guaranteed" />
              <TrustChip icon={<Home className="w-4 h-4" />} text="Vacation rental friendly" />
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            className="lg:col-span-4 lg:col-start-9"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-primary/5 border border-primary/10 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              
              <h3 className="text-2xl font-bold font-display mb-6 relative z-10">Why owners choose<br/><span className="text-primary">Larsen Spa Care</span></h3>
              
              <ul className="space-y-5 relative z-10">
                {[
                  "Specialized in Desert Color properties",
                  "Consistent, reliable schedule",
                  "Guest-ready standards for rentals",
                  "Detailed water chemistry balancing",
                  "Proactive communication and updates",
                  "Locally owned and operated"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-foreground/80 font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function TrustChip({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 text-foreground/70 font-medium text-sm">
      <div className="text-primary">{icon}</div>
      {text}
    </div>
  );
}

function MapPinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
