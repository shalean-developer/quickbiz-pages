import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteGrid } from "@/components/SiteGrid";

const Sites = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Portfolio Sites
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of live websites built for businesses across various industries.
            </p>
          </div>
          
          <SiteGrid />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sites;
