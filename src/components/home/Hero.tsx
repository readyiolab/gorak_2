import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Flash Banner */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-r from-primary via-primary/90 to-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
            <span className="text-sm md:text-base font-bold">
               Limited Time Offer: Starting Price ₹99 | Visiting Charge ₹99
            </span>
            <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://media.istockphoto.com/id/1365382448/photo/smilling-young-indian-engineer-or-repairman-showing-thumbs-up-sign-or-hand-gesture-while.webp?a=1&b=1&s=612x612&w=0&k=20&c=f6jdpvziBSdCKmRqmgsTqCNNG_TtMy11NEi_6rKsXwM="
          alt="Professional home services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-12">
        <div className="max-w-2xl">
          <span className="inline-block bg-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/30">
            #1 Trusted Home Services in Gorakhpur
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
            Fast & Reliable{" "}
            <span className="text-primary">Home Services</span>{" "}
            at Your Doorstep
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 leading-relaxed">
            Professional technicians for AC repair, plumbing, electrical work, 
            appliance repair, cleaning & more. Book trusted home services in 
            Gorakhpur within 60 minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <a href="tel:9820995910" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <a 
                href="https://wa.me/919820995910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild className="text-base">
              <Link to="/contact" className="flex items-center gap-2">
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-10 text-secondary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Same-Day Service
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Verified Technicians
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              Service Warranty
            </div>
          </div>

          {/* Offer Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 bg-secondary-foreground/5 p-6 rounded-xl border border-secondary-foreground/10">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">₹99</div>
              <div className="text-xs md:text-sm text-secondary-foreground/70">Starting Price</div>
            </div>
            <div className="text-center border-l border-r border-secondary-foreground/20">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">₹99</div>
              <div className="text-xs md:text-sm text-secondary-foreground/70">Visiting Charge</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">60 min</div>
              <div className="text-xs md:text-sm text-secondary-foreground/70">Quick Booking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;