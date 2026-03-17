import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  firstname: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Valid email is required"),
  address: z.string().min(1, "Address is required"),
  propertyType: z.string().min(1, "Please select property type"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  message: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

export function QuoteForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyType: "",
      serviceNeeded: ""
    }
  });

  const onSubmit = (data: FormValues) => {
    const subject = encodeURIComponent('Quote Request - Larsen Spa Care');
    const body = encodeURIComponent(
      `Name: ${data.firstname}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email}\n` +
      `Property Address: ${data.address}\n` +
      `Property Type: ${data.propertyType}\n` +
      `Service Needed: ${data.serviceNeeded}\n\n` +
      `Message:\n${data.message || 'No message provided.'}`
    );
    window.location.href = `mailto:beckhamglarsen@gmail.com?subject=${subject}&body=${body}`;
  };

  const InputClass = "w-full px-4 py-3.5 rounded-xl bg-background border-2 border-border/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-200";

  return (
    <>
      {/* CTA Banner */}
      <section className="bg-primary py-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white">
            <strong className="text-2xl font-display">Need service fast?</strong>
            <p className="text-lg opacity-90 flex items-center gap-2">
              Call <a href="tel:8016616107" className="font-bold underline underline-offset-4 hover:text-accent transition-colors">801-661-6107</a>
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
                  <h2 className="text-3xl font-bold font-display mb-4">Request a quote</h2>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Online form, call, or text — whichever is easiest for you. Fill out your details and we’ll get back to you during business hours.
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
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input 
                        {...register("firstname")} 
                        placeholder="Your name" 
                        className={InputClass}
                        aria-invalid={!!errors.firstname}
                      />
                      {errors.firstname && <p className="text-destructive text-sm mt-1 ml-1">{errors.firstname.message}</p>}
                    </div>
                    <div>
                      <input 
                        {...register("phone")} 
                        type="tel"
                        placeholder="Phone number" 
                        className={InputClass}
                      />
                      {errors.phone && <p className="text-destructive text-sm mt-1 ml-1">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <input 
                      {...register("email")} 
                      type="email"
                      placeholder="Email address" 
                      className={InputClass}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1 ml-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <input 
                      {...register("address")} 
                      placeholder="Property address" 
                      className={InputClass}
                    />
                    {errors.address && <p className="text-destructive text-sm mt-1 ml-1">{errors.address.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <select 
                        {...register("propertyType")} 
                        className={InputClass}
                        defaultValue=""
                      >
                        <option value="" disabled>Property type</option>
                        <option value="Home">Home</option>
                        <option value="Vacation Rental">Vacation Rental</option>
                      </select>
                      {errors.propertyType && <p className="text-destructive text-sm mt-1 ml-1">{errors.propertyType.message}</p>}
                    </div>
                    <div>
                      <select 
                        {...register("serviceNeeded")} 
                        className={InputClass}
                        defaultValue=""
                      >
                        <option value="" disabled>Service needed</option>
                        <option value="Bi-Weekly Maintenance">Bi-Weekly Maintenance</option>
                        <option value="Monthly Maintenance">Monthly Maintenance</option>
                        <option value="Drain & Refill">Drain & Refill</option>
                        <option value="Not Sure Yet">Not Sure Yet</option>
                      </select>
                      {errors.serviceNeeded && <p className="text-destructive text-sm mt-1 ml-1">{errors.serviceNeeded.message}</p>}
                    </div>
                  </div>

                  <div>
                    <textarea 
                      {...register("message")} 
                      placeholder="Tell us about your hot tub, current condition, or preferred timing" 
                      rows={4}
                      className={InputClass}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full mt-4 text-lg">
                    <Send className="w-5 h-5 mr-2" />
                    Open in Email App to Send
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    This form opens your email app with your request pre-filled so you can send it instantly.
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
