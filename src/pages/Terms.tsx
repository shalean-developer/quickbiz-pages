import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms & Conditions - BizBudLink</title>
        <meta name="description" content="Terms and conditions for using BizBudLink services" />
      </Helmet>

      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-ZA', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using BizBudLink's services, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Use of Service</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  BizBudLink provides a platform for businesses to create online presence and connect with customers. 
                  You agree to use the service only for lawful purposes and in accordance with these Terms.
                </p>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use the service in any way that violates any applicable national or international law or regulation</li>
                  <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
                  <li>Attempt to gain unauthorized access to any portion of the service</li>
                  <li>Impersonate or attempt to impersonate BizBudLink, another user, or any other person or entity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Business Listings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  When creating a business listing, you represent and warrant that:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All information provided is accurate, current, and complete</li>
                  <li>You have the legal right to represent the business</li>
                  <li>Your content does not violate any third-party rights</li>
                  <li>You will maintain and update your information to keep it accurate</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  BizBudLink offers various subscription plans. Payment terms include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>All fees are in South African Rand (ZAR) unless otherwise stated</li>
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>Payments are processed securely through our payment provider Paystack</li>
                  <li>Refunds are handled on a case-by-case basis at our discretion</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The service and its original content, features, and functionality are owned by BizBudLink and are 
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p>
                  You retain all rights to the content you upload to your business listing. By uploading content, you 
                  grant BizBudLink a license to use, display, and distribute that content as part of the service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may terminate or suspend your account and access to the service immediately, without prior notice 
                  or liability, for any reason, including without limitation if you breach the Terms.
                </p>
                <p>
                  Upon termination, your right to use the service will cease immediately. If you wish to terminate your 
                  account, you may do so by contacting us or through your account settings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  In no event shall BizBudLink, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                  be liable for any indirect, incidental, special, consequential or punitive damages, including without 
                  limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Your use of the service is at your sole risk. The service is provided on an "AS IS" and "AS AVAILABLE" 
                  basis. BizBudLink makes no warranties or representations about the accuracy or completeness of the 
                  service's content.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These Terms shall be governed and construed in accordance with the laws of South Africa, without 
                  regard to its conflict of law provisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
                  provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p>
                  By continuing to access or use our service after revisions become effective, you agree to be bound by 
                  the revised terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="space-y-1">
                  <p>Email: legal@bizbudlink.co.za</p>
                  <p>Address: South Africa</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
