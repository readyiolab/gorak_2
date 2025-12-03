import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    title: "Appliance Repair Services",
    services: [
      { name: "AC Repair, Gas Filling & Installation", slug: "ac-repair" },
      { name: "Microwave Repair", slug: "microwave-repair" },
      { name: "RO Water Purifier Service", slug: "ro-service" },
      { name: "Water Cooler & Air Cooler Service", slug: "cooler-service" },
      { name: "Inverter Repair", slug: "inverter-repair" },
      { name: "TV Repair", slug: "tv-repair" },
      { name: "Water Dispenser Repair", slug: "water-dispenser" },
    ],
  },
  {
    title: "Home Repair & Maintenance",
    services: [
      { name: "Electrician", slug: "electrician" },
      { name: "Plumber", slug: "plumber" },
      { name: "Carpenter", slug: "carpenter" },
      { name: "Home Painter", slug: "painter" },
      { name: "Gardening Services", slug: "gardening" },
    ],
  },
  {
    title: "Cleaning & Hygiene",
    services: [
      { name: "Home Deep Cleaning", slug: "home-cleaning" },
      { name: "Kitchen Cleaning", slug: "kitchen-cleaning" },
      { name: "Sofa Cleaning", slug: "sofa-cleaning" },
      { name: "Mattress Cleaning", slug: "mattress-cleaning" },
      { name: "Pest Control", slug: "pest-control" },
      { name: "Sanitization Service", slug: "sanitization" },
      { name: "Glass Cleaning", slug: "glass-cleaning" },
    ],
  },
  {
    title: "Lifestyle & Personal Services",
    services: [
      { name: "Makeup Artist", slug: "makeup-artist" },
      { name: "Bridal Makeup", slug: "bridal-makeup" },
      { name: "Mehndi Artist", slug: "mehndi-artist" },
      { name: "Security Guard Service", slug: "security-guard" },
    ],
  },
  {
    title: "Movers & Packers",
    services: [
      { name: "Local Shifting", slug: "local-shifting" },
      { name: "Domestic Shifting", slug: "domestic-shifting" },
      { name: "Packing Materials", slug: "packing-materials" },
      { name: "Labour Services", slug: "labour-services" },
    ],
  },
  {
    title: "Healthcare at Home",
    services: [
      { name: "Physiotherapy at Home", slug: "physiotherapy" },
    ],
  },
  {
    title: "Event Management",
    services: [
      { name: "Event Management", slug: "event-management" },
      { name: "Marriage Planning", slug: "marriage-planning" },
      { name: "Birthday Party", slug: "birthday-party" },
    ],
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>All Services | LB Services Gorakhpur - Complete Home Services</title>
        <meta 
          name="description" 
          content="Explore all home services offered by LB Services Gorakhpur - AC repair, electrician, plumber, cleaning, pest control, movers & packers, and more." 
        />
      </Helmet>
      
      <Layout>
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                All Services
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose from our comprehensive range of home services. 
                All services come with verified technicians and service warranty.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                    {category.title}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        className="flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
                      >
                        <span className="text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
