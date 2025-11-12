# BizBudLink

> Launch your business online in minutes — get found, get clients, get growing.

**URL**: https://lovable.dev/projects/97c82bad-3b4a-4556-9a98-7af18e1c54a5

BizBudLink is a complete platform where small business owners can create and publish landing pages for their businesses. Built with modern web technologies and integrated payment processing through Paystack.

## 🚀 Features

### Core Features
- **Business Listings** - Create and manage professional business pages
- **User Authentication** - Secure signup/login with Supabase Auth
- **Directory** - Browse local businesses with search and category filters
- **Sites Gallery** - Portfolio showcase of live client websites with interactive previews
- **Lead Tracking** - Capture and manage customer inquiries
- **Analytics Dashboard** - Track page views and contact clicks
- **Payment Integration** - Paystack integration for premium upgrades
- **Admin Panel** - Comprehensive admin dashboard for platform management

### Plans & Pricing
- **Free Plan** - Basic business page with contact information
- **Featured Plan** (₦49) - Enhanced visibility in directory
- **Premium Plan** (₦99) - Full features with priority placement
- **Setup Service** (₦299) - Professional setup assistance

### Technical Features
- 🎨 Beautiful, responsive design with shadcn-ui components
- 🔒 Secure authentication and role-based access control
- 📊 Real-time analytics and lead management
- 💳 Integrated Paystack payment processing
- 🔍 SEO-optimized pages with dynamic meta tags
- 📱 Mobile-first, fully responsive design
- ⚡ Fast loading with Vite and React
- 🖼️ Image upload for logos and galleries

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **TanStack Query** - Data fetching & caching
- **React Helmet** - SEO meta tags
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Backend (Lovable Cloud)
- **Supabase** - Database, Auth, Storage
- **Edge Functions** - Serverless backend logic
- **PostgreSQL** - Database with RLS policies
- **Paystack API** - Payment processing

## 📦 Database Schema

### Tables
- **businesses** - Business profiles and details
  - id, owner_id, name, slug, category, description
  - contact info (phone, email, whatsapp, location)
  - social links (facebook, instagram, twitter)
  - media (logo_url, gallery_images)
  - status flags (is_featured, is_premium)
  - analytics (view_count, click_count)

- **profiles** - User profiles linked to auth
  - id, user_id, full_name, created_at

- **payments** - Payment transaction records
  - id, business_id, user_id, plan, amount, status, payment_reference

- **leads** - Customer contact form submissions
  - id, business_id, name, email, phone, message, status

- **user_roles** - Role-based access control
  - id, user_id, role (admin/user)

### Storage Buckets
- **business-images** - Logo and gallery uploads (public)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or bun
- Paystack account

### Environment Setup

The following environment variables are automatically configured by Lovable Cloud:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
VITE_SUPABASE_PROJECT_ID=your_project_id
```

### Paystack Setup

1. Create a Paystack account at [paystack.com](https://paystack.com)
2. Get your API keys from Dashboard > Settings > API Keys & Webhooks
3. Add your secret key to Lovable Cloud secrets as `PAYSTACK_SECRET_KEY`
4. Configure webhook URL in Paystack dashboard:
   ```
   https://rhxxxmleojvavsapwdic.supabase.co/functions/v1/paystack-webhook
   ```

### Installation

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start development server
npm run dev
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn components (button, card, etc.)
│   ├── Navbar.tsx       # Main navigation
│   ├── Footer.tsx       # Site footer
│   ├── Hero.tsx         # Landing page hero
│   ├── BusinessCard.tsx # Business listing card
│   ├── ContactForm.tsx  # Lead capture form
│   ├── SiteCard.tsx     # Site gallery card
│   ├── SiteGrid.tsx     # Site gallery grid
│   ├── ScreenshotCarousel.tsx  # Image carousel
│   ├── PreviewModal.tsx # Site preview modal
│   └── ...
├── pages/               # Route pages
│   ├── Index.tsx        # Landing page
│   ├── Auth.tsx         # Login/Signup
│   ├── Dashboard.tsx    # Business management
│   ├── Directory.tsx    # Business listings
│   ├── Sites.tsx        # Sites gallery listing
│   ├── SiteLanding.tsx  # Individual site showcase
│   ├── Admin.tsx        # Admin panel
│   ├── BusinessPage.tsx # Public business page
│   └── templates/       # Plan templates
│       ├── FreeTemplate.tsx
│       ├── FeaturedTemplate.tsx
│       └── PremiumTemplate.tsx
├── data/                # Static data
│   └── sites.ts         # Sites gallery configuration
├── integrations/        # Supabase client
│   └── supabase/
│       ├── client.ts
│       └── types.ts
└── lib/                 # Utilities
    └── utils.ts

supabase/
├── functions/           # Edge functions
│   ├── paystack-initialize/
│   ├── paystack-verify/
│   └── paystack-webhook/
└── config.toml          # Supabase configuration
```

## 🔐 Security

### Row Level Security (RLS)
All database tables have RLS policies enforcing:
- Users can only manage their own businesses
- Business owners see their own leads
- Admins have full access with role checking via security definer functions
- Public read access where appropriate

### Payment Security
- Payment processing through Paystack's secure API
- Webhook signature verification using SHA-512 HMAC
- Server-side payment validation
- No sensitive payment data stored in frontend
- Payment status tracking in database

### Authentication
- Secure authentication via Supabase Auth
- JWT token-based sessions with auto-refresh
- Role-based access control (RBAC)
- Protected routes and API endpoints
- Proper session management

### Input Validation
- Client-side validation using Zod schemas
- Server-side validation in edge functions
- SQL injection prevention via Supabase client
- XSS protection through React's built-in escaping

## 🔧 Admin Features

Access the admin dashboard at `/admin` (admin role required):
- **Dashboard Overview**
  - Total businesses, revenue, payments, leads
  - Real-time statistics
- **Business Management**
  - View all businesses
  - Monitor status (free/featured/premium)
  - Track analytics (views, clicks)
- **Payment Tracking**
  - Transaction history
  - Payment status monitoring
  - Revenue analytics
- **Lead Management**
  - View all customer inquiries
  - Track lead status
  - Business-wise lead breakdown

To create an admin user, insert into `user_roles` table:
```sql
INSERT INTO user_roles (user_id, role)
VALUES ('user-uuid-here', 'admin');
```

## 🎨 Customization

### Design System
The design system is defined in:
- `src/index.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

Colors use HSL format with semantic tokens:
```css
--primary: 221 83% 53%;        /* Main brand color */
--secondary: 217 91% 60%;      /* Secondary accent */
--accent: 43 96% 56%;          /* Highlights */
--destructive: 0 84% 60%;      /* Error states */
--muted: 217 33% 17%;          /* Muted text */
```

### Templates
Three business page templates available in `src/pages/templates/`:
- **FreeTemplate.tsx** - Basic layout with essentials
- **FeaturedTemplate.tsx** - Enhanced features and styling
- **PremiumTemplate.tsx** - Premium design with all features

Customize templates to match your brand or add new ones.

## 📱 API Endpoints

### Edge Functions

#### POST /functions/v1/paystack-initialize
Initialize a payment transaction
```typescript
Request: {
  businessId: string;
  plan: 'featured' | 'premium' | 'setup_service';
  email: string;
}
Response: {
  authorization_url: string;
  access_code: string;
  reference: string;
}
```

#### POST /functions/v1/paystack-verify
Verify a payment transaction (called after redirect)
```typescript
Request: {
  reference: string;
}
Response: {
  status: 'success' | 'failed';
  payment: Payment;
  message: string;
}
```

#### POST /functions/v1/paystack-webhook
Paystack webhook endpoint (public, signature-verified)
- Handles `charge.success` events
- Updates payment status
- Upgrades business plan automatically

## 🖼️ Sites Gallery Management

The Sites Gallery feature showcases your portfolio of live client websites at `/sites`.

### Adding New Sites

1. **Update the data file** (`src/data/sites.ts`):
```typescript
{
  slug: 'your-site-slug',
  title: 'Your Site Title',
  domain: 'https://yoursite.com',
  description: 'Short description of the site',
  category: 'Category (e.g., Spa, Agency)',
  heroImage: '/images/sites/your-site-slug/hero.png',
  screenshots: [
    '/images/sites/your-site-slug/hero.png',
    '/images/sites/your-site-slug/screenshot-2.png'
  ],
  contact: 'contact@yoursite.com',
  primaryColor: '#HEXCOLOR',
  tags: ['tag1', 'tag2', 'tag3'],
  heroBlurb: 'Detailed description (2-3 sentences)',
  launchDate: '2024'
}
```

2. **Add screenshots**:
   - Create directory: `public/images/sites/your-site-slug/`
   - Add `hero.png` (main screenshot)
   - Add `screenshot-2.png` (additional view)
   - Recommended: 1920x1080px, optimized to <500KB

3. The site will automatically appear in the gallery!

### Screenshot Guidelines
- Use 16:9 aspect ratio (1920x1080px recommended)
- Optimize images (use TinyPNG or similar)
- Capture full page or hero sections
- Include multiple views of key features
- See `public/images/sites/README.md` for details

## 🚀 Deployment

### Deploy on Lovable
1. Open your [Lovable Project](https://lovable.dev/projects/97c82bad-3b4a-4556-9a98-7af18e1c54a5)
2. Click Share → Publish
3. Your app is live!

### Push to GitHub
1. **Connect GitHub** (if not connected):
   - Click GitHub icon in top-right of Lovable
   - Authorize Lovable to access your GitHub
   
2. **Push to Repository**:
   - Click the GitHub icon → "Push to GitHub"
   - Select repository: `https://github.com/shalean-developer/quickbiz-pages.git`
   - Branch: `main` or create `feature/sites-gallery-add-3`
   - Commit message: "Add sites gallery with 3 portfolio sites"
   
3. **Create Pull Request**:
   - Go to GitHub repository
   - Click "Pull requests" → "New pull request"
   - Select your branch → `main`
   - Add description and screenshots
   - Submit PR for review

### Custom Domain
1. Navigate to Project > Settings > Domains
2. Click "Connect Domain"
3. Follow DNS configuration steps
4. Update Paystack webhook URL with new domain

### Environment Configuration
- All Supabase credentials auto-configured
- Add `PAYSTACK_SECRET_KEY` in Cloud secrets
- Configure Paystack webhook URL
- Enable auto-confirm email in Supabase auth settings

## 🧪 Testing

### Payment Testing
Use Paystack test credentials:
- Test Card: `4084084084084081`
- CVV: Any 3 digits
- Expiry: Any future date
- PIN: `0000`
- OTP: `123456`

### Admin Testing
1. Create user account
2. Insert admin role manually
3. Access `/admin` route
4. Verify all admin features

## 🤝 Contributing

This is a Lovable-generated project. For modifications:
1. Use the Lovable editor for rapid development
2. Test changes in preview mode  
3. Review and commit changes
4. Deploy when ready

## 📊 Monitoring

### Analytics Available
- Business page views
- Contact button clicks
- Lead conversion tracking
- Payment success rates
- User growth metrics

### Logging
- Edge function logs available in Lovable Cloud
- Payment transaction logs
- Error tracking and debugging

## 🆘 Support & Resources

- [Lovable Documentation](https://docs.lovable.dev)
- [Lovable Discord Community](https://discord.com/channels/1119885301872070706)
- [Supabase Documentation](https://supabase.com/docs)
- [Paystack API Documentation](https://paystack.com/docs/api)
- [shadcn/ui Components](https://ui.shadcn.com)

## 🎯 Roadmap

### Planned Features
- [ ] Email notifications for leads (using Resend)
- [ ] Advanced analytics dashboard with charts
- [ ] Custom domain per business page
- [ ] Social media auto-posting integration
- [ ] WhatsApp Business API integration
- [ ] Multi-location support for chains
- [ ] Review and rating system
- [ ] Appointment booking system
- [ ] Subscription billing (recurring)
- [ ] Export leads to CSV
- [ ] Business verification badges
- [ ] SEO tools and sitemap generation

### Technical Improvements
- [ ] PWA support
- [ ] Dark mode toggle
- [ ] Image optimization and CDN
- [ ] Caching strategies
- [ ] Performance monitoring
- [ ] A/B testing framework

## 📄 License

Proprietary - All rights reserved

---

Built with ❤️ using [Lovable](https://lovable.dev) | Powered by Supabase & Paystack
