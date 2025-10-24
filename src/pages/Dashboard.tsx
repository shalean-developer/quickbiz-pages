import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Eye, MousePointerClick, Plus, Upload, X, Image as ImageIcon } from "lucide-react";

const CATEGORIES = [
  "Cleaning",
  "Beauty",
  "Auto",
  "Food",
  "Technology",
  "Retail",
  "Health",
  "Education",
  "Other",
];

const Dashboard = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    category: "",
    description: "",
    phone: "",
    email: "",
    whatsapp: "",
    location: "",
    facebook_url: "",
    instagram_url: "",
    twitter_url: "",
    services: "",
    logo_url: "",
    gallery_images: [] as string[],
  });
  
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string>("");
  const [galleryFiles, setGalleryFiles] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);

  const handleUpgrade = async (plan: 'featured' | 'premium' | 'setup_service') => {
    if (!business || !user) return;
    
    setProcessingPayment(true);
    try {
      const { data, error } = await supabase.functions.invoke('paystack-initialize', {
        body: {
          businessId: business.id,
          plan,
          email: user.email,
        },
      });

      if (error) throw error;

      if (data?.authorization_url) {
        // Redirect to Paystack payment page
        window.location.href = data.authorization_url;
      } else {
        throw new Error('Failed to initialize payment');
      }
    } catch (error: any) {
      console.error('Payment initialization error:', error);
      toast.error(error.message || 'Failed to initialize payment');
      setProcessingPayment(false);
    }
  };

  // Handle payment verification on return
  useEffect(() => {
    const verifyPayment = async (reference: string) => {
      try {
        const { data, error } = await supabase.functions.invoke('paystack-verify', {
          body: { reference },
        });

        if (error) throw error;

        if (data?.status === 'success') {
          toast.success('Payment successful! Your business has been upgraded.');
          queryClient.invalidateQueries({ queryKey: ["my-business"] });
        } else {
          toast.error('Payment verification failed');
        }
      } catch (error: any) {
        console.error('Payment verification error:', error);
        toast.error(error.message || 'Failed to verify payment');
      }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const reference = urlParams.get('reference');
    const paymentStatus = urlParams.get('payment');
    
    if (reference && paymentStatus === 'success') {
      verifyPayment(reference);
      // Clean URL
      window.history.replaceState({}, '', '/dashboard');
    }
  }, [queryClient]);


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const { data: business, isLoading } = useQuery({
    queryKey: ["my-business", user?.id],
    queryFn: async () => {
      if (!user) return null;
      const { data, error } = await supabase
        .from("businesses")
        .select("*")
        .eq("owner_id", user.id)
        .maybeSingle();

      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  useEffect(() => {
    if (business) {
      setFormData({
        name: business.name || "",
        slug: business.slug || "",
        category: business.category || "",
        description: business.description || "",
        phone: business.phone || "",
        email: business.email || "",
        whatsapp: business.whatsapp || "",
        location: business.location || "",
        facebook_url: business.facebook_url || "",
        instagram_url: business.instagram_url || "",
        twitter_url: business.twitter_url || "",
        services: business.services?.join(", ") || "",
        logo_url: business.logo_url || "",
        gallery_images: business.gallery_images || [],
      });
      setLogoPreview(business.logo_url || "");
      setGalleryPreviews(business.gallery_images || []);
    }
  }, [business]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGalleryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setGalleryFiles([...galleryFiles, ...files]);
    
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGalleryPreviews((prev) => [...prev, reader.result as string]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeGalleryImage = (index: number) => {
    setGalleryFiles(galleryFiles.filter((_, i) => i !== index));
    setGalleryPreviews(galleryPreviews.filter((_, i) => i !== index));
  };

  const uploadImage = async (file: File, path: string): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${path}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('business-images')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('business-images')
      .getPublicUrl(filePath);

    return publicUrl;
  };

  const saveMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error("Not authenticated");
      
      setUploading(true);
      
      try {
        let logoUrl = formData.logo_url;
        let galleryUrls = [...formData.gallery_images];

        // Upload logo if new file selected
        if (logoFile) {
          logoUrl = await uploadImage(logoFile, `${user.id}/logo`);
        }

        // Upload gallery images if new files selected
        if (galleryFiles.length > 0) {
          const uploadedUrls = await Promise.all(
            galleryFiles.map((file) => uploadImage(file, `${user.id}/gallery`))
          );
          galleryUrls = [...galleryUrls, ...uploadedUrls];
        }

        const businessData = {
          owner_id: user.id,
          name: formData.name,
          slug: formData.slug.toLowerCase().replace(/[^a-z0-9-]/g, "-"),
          category: formData.category,
          description: formData.description,
          phone: formData.phone,
          email: formData.email,
          whatsapp: formData.whatsapp,
          location: formData.location,
          facebook_url: formData.facebook_url,
          instagram_url: formData.instagram_url,
          twitter_url: formData.twitter_url,
          services: formData.services
            ? formData.services.split(",").map((s) => s.trim())
            : [],
          logo_url: logoUrl,
          gallery_images: galleryUrls,
        };

        if (business) {
          const { error } = await supabase
            .from("businesses")
            .update(businessData)
            .eq("id", business.id);
          if (error) throw error;
        } else {
          const { error } = await supabase.from("businesses").insert(businessData);
          if (error) throw error;
        }
        
        // Clear upload states
        setLogoFile(null);
        setGalleryFiles([]);
      } finally {
        setUploading(false);
      }
    },
    onSuccess: () => {
      toast.success(business ? "Business updated!" : "Business created!");
      queryClient.invalidateQueries({ queryKey: ["my-business"] });
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to save business");
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Business Dashboard</h1>

          {business && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Page Views
                  </CardTitle>
                  <Eye className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{business.view_count}</div>
                  <p className="text-xs text-muted-foreground">
                    Total profile visits
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Contact Clicks
                  </CardTitle>
                  <MousePointerClick className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{business.click_count}</div>
                  <p className="text-xs text-muted-foreground">
                    Contact button clicks
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Your Page
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => navigate(`/business/${business.slug}`)}
                  >
                    View Live Page
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {business && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Plan</CardTitle>
                <CardDescription>
                  {business.is_premium
                    ? "You're on the Premium plan with all features unlocked!"
                    : business.is_featured
                    ? "You're on the Featured plan. Upgrade to Premium for more visibility!"
                    : "You're on the Free plan. Upgrade to get more features and visibility!"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {!business.is_featured && (
                    <Button
                      onClick={() => handleUpgrade('featured')}
                      variant="default"
                    >
                      Upgrade to Featured - ₦49
                    </Button>
                  )}
                  {!business.is_premium && (
                    <Button
                      onClick={() => handleUpgrade('premium')}
                      variant="default"
                    >
                      Upgrade to Premium - ₦99
                    </Button>
                  )}
                  {business.is_premium && (
                    <div className="text-sm text-muted-foreground">
                      ✨ You have access to all features!
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle>
                {business ? "Edit Your Business" : "Create Your Business"}
              </CardTitle>
              <CardDescription>
                {business
                  ? "Update your business information"
                  : "Fill in the details to create your business page"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Business Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug">URL Slug *</Label>
                  <Input
                    id="slug"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData({ ...formData, slug: e.target.value })
                    }
                    placeholder="my-business"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    bizlaunch.app/{formData.slug || "your-business"}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) =>
                    setFormData({ ...formData, category: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={4}
                  placeholder="Tell customers about your business..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="services">Services (comma-separated)</Label>
                <Input
                  id="services"
                  value={formData.services}
                  onChange={(e) =>
                    setFormData({ ...formData, services: e.target.value })
                  }
                  placeholder="Consulting, Design, Development"
                />
              </div>

              <div className="space-y-4 border-t pt-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  Business Images
                </h3>
                
                {/* Logo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="logo">Business Logo</Label>
                  <div className="flex items-start gap-4">
                    {logoPreview && (
                      <div className="relative w-32 h-32 rounded-lg border overflow-hidden">
                        <img
                          src={logoPreview}
                          alt="Logo preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <Input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Upload your business logo (PNG, JPG recommended)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Gallery Upload */}
                <div className="space-y-2">
                  <Label htmlFor="gallery">Gallery Images (Featured & Premium)</Label>
                  <Input
                    id="gallery"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryChange}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    Upload multiple images to showcase your work (available in Featured and Premium plans)
                  </p>
                  
                  {galleryPreviews.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      {galleryPreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <div className="relative w-full aspect-square rounded-lg border overflow-hidden">
                            <img
                              src={preview}
                              alt={`Gallery ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeGalleryImage(index)}
                              className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">WhatsApp</Label>
                  <Input
                    id="whatsapp"
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    placeholder="+234..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Social Media (optional)</Label>
                <div className="space-y-2">
                  <Input
                    placeholder="Facebook URL"
                    value={formData.facebook_url}
                    onChange={(e) =>
                      setFormData({ ...formData, facebook_url: e.target.value })
                    }
                  />
                  <Input
                    placeholder="Instagram URL"
                    value={formData.instagram_url}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instagram_url: e.target.value,
                      })
                    }
                  />
                  <Input
                    placeholder="Twitter URL"
                    value={formData.twitter_url}
                    onChange={(e) =>
                      setFormData({ ...formData, twitter_url: e.target.value })
                    }
                  />
                </div>
              </div>

              <Button
                onClick={() => saveMutation.mutate()}
                disabled={saveMutation.isPending || uploading}
                className="w-full gap-2"
              >
                {uploading ? (
                  <>
                    <Upload className="h-4 w-4 animate-pulse" />
                    Uploading Images...
                  </>
                ) : saveMutation.isPending ? (
                  <>
                    <Plus className="h-4 w-4" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Plus className="h-4 w-4" />
                    {business ? "Update Business" : "Create Business"}
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
