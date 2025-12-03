import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Check, ArrowLeft } from "lucide-react";

const serviceData: Record<string, {
  title: string;
  description: string;
  services: string[];
  brands?: string[];
  priceRange: string;
  warranty: string;
}> = {
  "ac-repair": {
    title: "AC Repair Service in Gorakhpur",
    description: "Looking for a reliable AC repair service in Gorakhpur? LB Services provides expert technicians for split AC, window AC, inverter AC, and all AC brands.",
    services: [
      "AC Repair",
      "AC Gas Filling",
      "AC Installation & Uninstallation",
      "AC Cooling Issue Fix",
      "AC Water Leakage Repair",
      "AC Maintenance Service",
    ],
    brands: ["LG", "Samsung", "Voltas", "Daikin", "Hitachi", "Whirlpool", "Blue Star", "Carrier", "Godrej"],
    priceRange: "₹299 - ₹2,999",
    warranty: "30-90 Days",
  },
  "electrician": {
    title: "Electrician Service in Gorakhpur",
    description: "Professional electrician services for all your electrical needs. Our trained electricians handle wiring, switches, MCB, fan installation, and all electrical repairs.",
    services: [
      "Wiring & Rewiring",
      "Switch & Socket Repair",
      "MCB/Fuse Box Repair",
      "Fan Installation & Repair",
      "Light Fitting",
      "Inverter & UPS Installation",
    ],
    priceRange: "₹149 - ₹999",
    warranty: "30 Days",
  },
  "plumber": {
    title: "Plumber Service in Gorakhpur",
    description: "Expert plumbing services for all your water and drainage needs. Our skilled plumbers handle leakages, blockages, tap installation, and complete bathroom fittings.",
    services: [
      "Tap & Faucet Repair",
      "Pipe Leakage Repair",
      "Drainage Cleaning",
      "Toilet Repair",
      "Water Tank Cleaning",
      "Bathroom Fitting",
    ],
    priceRange: "₹149 - ₹1,499",
    warranty: "30 Days",
  },
  "home-cleaning": {
    title: "Home Cleaning Service in Gorakhpur",
    description: "Professional home cleaning services for a spotless home. Our trained cleaners provide deep cleaning, bathroom cleaning, kitchen cleaning, and regular home cleaning.",
    services: [
      "Full Home Deep Cleaning",
      "Bathroom Cleaning",
      "Kitchen Cleaning",
      "Sofa & Carpet Cleaning",
      "Window & Glass Cleaning",
      "Move-in/Move-out Cleaning",
    ],
    priceRange: "₹499 - ₹4,999",
    warranty: "Service Guarantee",
  },
  "ro-service": {
    title: "RO Water Purifier Service in Gorakhpur",
    description: "Complete RO water purifier service including filter change, membrane replacement, and annual maintenance. We service all RO brands.",
    services: [
      "RO Filter Change",
      "Membrane Replacement",
      "RO Repair & Servicing",
      "UV Lamp Replacement",
      "Annual Maintenance Contract",
      "New RO Installation",
    ],
    brands: ["Kent", "Aquaguard", "Livpure", "Pureit", "Blue Star", "Havells"],
    priceRange: "₹299 - ₹2,499",
    warranty: "30-90 Days",
  },
  "pest-control": {
    title: "Pest Control Service in Gorakhpur",
    description: "Professional pest control services to keep your home pest-free. We handle cockroaches, termites, bed bugs, mosquitoes, and all types of pests.",
    services: [
      "Cockroach Control",
      "Termite Treatment",
      "Bed Bug Control",
      "Mosquito Control",
      "Rat Control",
      "General Pest Control",
    ],
    priceRange: "₹399 - ₹3,999",
    warranty: "60-90 Days",
  },
};

const defaultService = {
  title: "Home Service in Gorakhpur",
  description: "Professional home services at your doorstep. LB Services provides expert technicians for all your home maintenance needs.",
  services: [
    "Expert Technicians",
    "Same-Day Service",
    "Affordable Pricing",
    "Quality Guarantee",
    "Post-Service Support",
  ],
  priceRange: "Contact for Quote",
  warranty: "Service Warranty",
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug || ""] || { ...defaultService, title: `${slug?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())} Service in Gorakhpur` };

  return (
    <>
      <Helmet>
        <title>{service.title} | LB Services</title>
        <meta 
          name="description" 
          content={service.description} 
        />
      </Helmet>
      
      <Layout>
        {/* Breadcrumb */}
        <div className="bg-card border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+919876543210" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Services List */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl border border-border p-6 mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Services We Provide
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.services.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {service.brands && (
                  <div className="bg-card rounded-xl border border-border p-6">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      Brands We Service
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {service.brands.map((brand, index) => (
                        <span 
                          key={index}
                          className="px-4 py-2 bg-background rounded-full text-sm font-medium text-foreground border border-border"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Price Card */}
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Service Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Price Range</span>
                      <span className="font-bold text-primary">{service.priceRange}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border">
                      <span className="text-muted-foreground">Warranty</span>
                      <span className="font-semibold text-foreground">{service.warranty}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Service Time</span>
                      <span className="font-semibold text-foreground">Same Day</span>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Same-Day Service",
                      "30–90 Days Warranty",
                      "Trained Technicians",
                      "Affordable Price Range",
                      "Genuine Spare Parts",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="bg-primary rounded-xl p-6 text-center">
                  <h3 className="text-lg font-bold text-primary-foreground mb-2">
                    Book Service Now
                  </h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Get instant booking confirmation
                  </p>
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="w-full"
                    asChild
                  >
                    <Link to="/contact">Get Free Estimate</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ServiceDetail;
