import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background/80 py-16 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-xl">
                L
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Larsen Spa Care
              </span>
            </div>
            <p className="text-background/70 text-lg max-w-sm mt-2">
              Professional Hot Tub Maintenance in Desert Color. Keeping your spa ready to enjoy.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="font-display font-bold text-xl text-white">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:8016616107" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors text-white">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-lg">801-661-6107</span>
              </a>
              <a href="mailto:beckhamglarsen@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-lg break-all">beckhamglarsen@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors text-white">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-lg">Mon–Sat</div>
              <div className="text-background/60">8:00 AM – 6:00 PM</div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h4 className="font-display font-bold text-xl text-white">Service Area</h4>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white shrink-0 mt-1">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-lg leading-relaxed">
                Desert Color Resort<br />
                St. George, Utah
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-background/50 text-sm">
          <p>© {new Date().getFullYear()} Larsen Spa Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
