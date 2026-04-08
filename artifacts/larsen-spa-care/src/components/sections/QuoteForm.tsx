import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Phone, Send, MessageSquare, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function QuoteForm() {
  const [state, handleSubmit] = useForm("xgopqvze");
  const [showForm, setShowForm] = useState(true);

  const InputClass =
    "w-full px-4 py-3.5 rounded-xl bg-background border-2 border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200";

  if (state.succeeded && showForm) {
    return (
      <section id="quote" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-black/5 border border-border/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 bg-gradient-to-br from-primary to-accent p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h2 className="text-3xl font-bold font-display mb-4">
                    Thank you
                  </h2>

                  <p className="text-white/80 leading-relaxed mb-4">
                    Your quote request was sent successfully. We’ll get back to you during business hours.
                  </p>

                  <p className="text-sm text-white/80 mb-8">
                    Mon–Sat, 8:00 AM – 6:00 PM
                  </p>
                </div>

                <div className="relative z-10 space-y-4">
                  <a
                    href="tel:8016616107"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 font-medium">Call Now</div>
                      <div className="text-lg font-bold">801-661-6107</div>
                    </div>
                  </a>

                  <a
                    href="sms:8016616107?body=Hi%2C%20I%20just%20submitted%20a%20quote%20request."
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 font-medium">Text Us</div>
                      <div className="text-lg font-bold">Rapid Response</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="md:col-span-3 p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold font-display text-foreground mb-4">
                  We received your request
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  We’ll review your information and follow up with the next step, pricing, or any questions needed to get your service scheduled.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a
                    href="tel:8016616107"
                    className="flex items-center justify-center gap-3 rounded-xl bg-primary text-white px-6 py-4 font-semibold hover:opacity-95 transition"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>

                  <a
                    href="sms:8016616107?body=Hi%2C%20I%20just%20submitted%20a%20quote%20request."
                    className="flex items-center justify-center gap-3 rounded-xl border-2 border-primary text-primary px-6 py-4 font-semibold hover:bg-primary/5 transition"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Text Us
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go back to the site
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* CTA Banner */}
      <section className="bg-primary py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <strong className="text-2xl font-display">Need service fast?</strong>
            <p className="text-lg opacity-90 flex items-center gap-2">
              Call{" "}
              <a
                href="tel:8016616107"
                className="font-bold underline underline-offset-4 hover:text-accent transition-colors"
              >
                801-661-6107
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-black/5 border border-border/50 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* Left Side - Info */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary to-accent p-10 text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <h2 className="text-3xl font-bold font-display mb-4">
                    Request A Quote
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-4">
                    Online form, call, or text — whichever is easiest for you. Fill out your details and we’ll get back to you during business hours.
                  </p>

                  <p className="text-base text-white/80 mb-8">
                    Mon–Sat, 8:00 AM – 6:00 PM
                  </p>
                </div>

                <div className="relative z-10 space-y-4">
                  <a
                    href="tel:8016616107"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 font-medium">Call Now</div>
                      <div className="text-lg font-bold">801-661-6107</div>
                    </div>
                  </a>

                  <a
                    href="sms:8016616107?body=Hi%2C%20I%27d%20like%20a%20quote."
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm group border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-white/70 font-medium">Text Us</div>
                      <div className="text-lg font-bold">Rapid Response</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="md:col-span-3 p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="Your name"
                        className={InputClass}
                        required
                      />
                      <ValidationError
                        prefix="Name"
                        field="firstname"
                        errors={state.errors}
                        className="text-destructive text-sm mt-1 ml-1"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone number"
                        className={InputClass}
                        required
                      />
                      <ValidationError
                        prefix="Phone"
                        field="phone"
                        errors={state.errors}
                        className="text-destructive text-sm mt-1 ml-1"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email address"
                      className={InputClass}
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                      className="text-destructive text-sm mt-1 ml-1"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="address"
                      placeholder="Property address"
                      className={InputClass}
                      required
                    />
                    <ValidationError
                      prefix="Address"
                      field="address"
                      errors={state.errors}
                      className="text-destructive text-sm mt-1 ml-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <select
                        name="propertyType"
                        className={InputClass}
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Property type
                        </option>
                        <option value="Home">Home</option>
                        <option value="Vacation Rental">Vacation Rental</option>
                      </select>
                      <ValidationError
                        prefix="Property Type"
                        field="propertyType"
                        errors={state.errors}
                        className="text-destructive text-sm mt-1 ml-1"
                      />
                    </div>

                    <div>
                      <select
                        name="serviceNeeded"
                        className={InputClass}
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Service needed
                        </option>
                        <option value="Twice a Week Service">
                          Twice a Week Service
                        </option>
                        <option value="Monthly Service">Monthly Service</option>
                        <option value="Drain & Refill">Drain & Refill</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                      <ValidationError
                        prefix="Service Needed"
                        field="serviceNeeded"
                        errors={state.errors}
                        className="text-destructive text-sm mt-1 ml-1"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="Tell us about your hot tub, current condition, or preferred timing"
                      rows={4}
                      className={InputClass}
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                      className="text-destructive text-sm mt-1 ml-1"
                    />
                  </div>

                  <input
                    type="hidden"
                    name="_subject"
                    value="Quote Request - Larsen Spa Care"
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-4 text-lg"
                    disabled={state.submitting}
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {state.submitting ? "Sending Request..." : "Get My Quote"}
                  </Button>

                  <ValidationError
                    errors={state.errors}
                    className="text-center text-sm text-destructive mt-2"
                  />

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Your request is sent directly through the website.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}