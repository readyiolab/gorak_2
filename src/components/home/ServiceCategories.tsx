import { Link } from "react-router-dom";
import {
  Wind,
  Flame,
  Zap,
  Droplets,
  Droplet,
  Hammer,
  Sparkles,
  Bug,
  Truck,
  Heart,
  Shield,
  Activity,
  PartyPopper,
  Glasses,
} from "lucide-react";

const services = [
  { name: "AC Repair & Installation", icon: Wind, slug: "ac-repair" },
  { name: "Geyser Service", icon: Flame, slug: "geyser-service" },
  { name: "Electrician Service", icon: Zap, slug: "electrician" },
  { name: "Plumber in Gorakhpur", icon: Droplets, slug: "plumber" },
  { name: "Water Purifier (RO) Service", icon: Droplet, slug: "ro-service" },
  { name: "Carpenter Service", icon: Hammer, slug: "carpenter" },
  { name: "Home Cleaning", icon: Sparkles, slug: "home-cleaning" },
  { name: "Pest Control Service", icon: Bug, slug: "pest-control" },
  { name: "Movers and Packers", icon: Truck, slug: "movers-packers" },
  { name: "Makeup & Mehndi Artist", icon: Heart, slug: "makeup-artist" },
  { name: "Security Guard Service", icon: Shield, slug: "security-guard" },
  { name: "Physiotherapy at Home", icon: Activity, slug: "physiotherapy" },
  { name: "Event Management", icon: PartyPopper, slug: "event-management" },
  { name: "Glass Cleaning", icon: Glasses, slug: "glass-cleaning" },
];

const ServiceCategories = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Quick Service Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of professional home services. 
            All services come with verified technicians and service warranty.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group flex flex-col items-center p-4 bg-background rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-sm text-foreground text-center font-medium group-hover:text-primary transition-colors">
                {service.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
