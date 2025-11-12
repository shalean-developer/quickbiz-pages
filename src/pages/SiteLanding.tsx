import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { sites } from "@/data/sites";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { PreviewModal } from "@/components/PreviewModal";
import { ExternalLink, Mail, ArrowLeft, Monitor } from "lucide-react";
import { Helmet } from "react-helmet";

const SiteLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const [previewOpen, setPreviewOpen] = useState(false);
  
  const site = sites.find((s) => s.slug === slug);

  if (!site) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Site Not Found</h1>
          <p className="text-muted-foreground mb-8">The site you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/sites">Back to Sites</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{site.title} - BizBudLink Portfolio</title>
        <meta name="description" content={site.description} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.heroImage} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/sites">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sites
              </Link>
            </Button>

            {/* Hero Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="order-2 lg:order-1">
                <img
                  src={site.heroImage}
                  alt={`${site.title} website screenshot`}
                  className="w-full rounded-2xl shadow-lg"
                  loading="eager"
                />
              </div>
              
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">
                  {site.category}
                </Badge>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {site.title}
                </h1>
                
                <p className="text-xl text-muted-foreground mb-6">
                  {site.heroBlurb}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <Button asChild size="lg">
                    <a 
                      href={site.domain} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Live Site
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setPreviewOpen(true)}
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    Open Preview
                  </Button>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: site.primaryColor }}
                    aria-label="Brand color"
                  />
                  <span className="font-mono">{site.primaryColor}</span>
                </div>
              </div>
            </div>

            {/* Overview Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                    <CardDescription>{site.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Domain:</span>
                        <a 
                          href={site.domain} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-mono text-primary hover:underline"
                        >
                          {site.domain.replace(/^https?:\/\//, '')}
                        </a>
                      </div>
                      {site.launchDate && (
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground">Launched:</span>
                          <span>{site.launchDate}</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Category:</span>
                        <Badge variant="outline">{site.category}</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a href={`mailto:${site.contact}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        {site.contact}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Tags */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Features & Tags</h2>
              <div className="flex flex-wrap gap-2">
                {site.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm px-4 py-2">
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Screenshots */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Visuals</h2>
              <ScreenshotCarousel 
                screenshots={site.screenshots} 
                alt={site.title}
              />
            </section>
          </div>
        </main>
        
        <Footer />
      </div>

      <PreviewModal
        isOpen={previewOpen}
        onClose={() => setPreviewOpen(false)}
        domain={site.domain}
        title={site.title}
      />
    </>
  );
};

export default SiteLanding;
