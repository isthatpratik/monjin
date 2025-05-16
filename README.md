# Monjin - Job Platform

A modern job platform built with Next.js, TypeScript, and Prisma.

## 🚀 Project Overview

Monjin is a comprehensive job platform that connects candidates with companies through an intuitive interface. The platform includes features for job listings, candidate management, interviewer tools, and company showcase.

## 🛠️ Tech Stack

- **Framework**: Next.js 15.2.3 (TypeScript)
- **Database**: Prisma ORM
- **Styling**: Tailwind CSS with shadcn/ui
- **State Management**: TanStack Query
- **UI Components**: 
  - shadcn/ui
  - Radix UI
  - Material Tailwind
  - Ant Design Icons
- **Form Handling**: React Hook Form
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📋 Project Structure

```
monjin/
├── app/              # Next.js App Router pages and routes
│   ├── api/         # API routes
│   ├── candidate/   # Candidate-related pages
│   ├── casestudy/   # Case study pages
│   ├── company/     # Company showcase
│   ├── products/    # Product pages
│   └── ...          # Other routes
├── components/      # Reusable React components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and shared code
├── prisma/         # Database schema and migrations
├── styles/         # Global styles
└── types/          # TypeScript type definitions
```

## 🔧 Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/isthatpratik/monjin.git
cd monjin
```

2. **Install Dependencies**
```bash
npm install
```

3. **Environment Variables**
Create a `.env` file in the root directory with the following variables:
```
# Database
DATABASE_URL="postgresql://..."

# Email Configuration
DATABASE_URL=
NEXT_PUBLIC_BASE_URL=
MONJIN_AUTH_URL=
MONJIN_CLIENT_ID=
MONJIN_CLIENT_SECRET=
MONJIN_SCOPE=
MONJIN_GRANT_TYPE=
GMAIL_SMTP_HOST=
GMAIL_SMTP_PORT=
GMAIL_SMTP_USER=
GMAIL_SMTP_PASS=
```

4. **Run the Development Server**
```bash
npm run dev
```

## 🛠️ Development Tools

- **TypeScript**: For type safety
- **ESLint**: For code linting
- **Prettier**: For code formatting
- **Tailwind CSS**: For styling
- **Prisma**: For database ORM

## 📦 Key Features

1. **Job Platform Features**
   - Candidate management
   - Interviewer tools
   - Company showcase
   - Job listings
   - Case studies

2. **Technical Features**
   - Server-side rendering (SSR)
   - API routes
   - Middleware
   - Form handling with validation
   - Responsive design
   - SEO optimization
   - Performance optimization

## 🚀 Deployment

The project is deployed on Vercel. To deploy:

1. Push changes to the main branch
2. Vercel will automatically deploy the changes
3. Verify deployment in the Vercel dashboard

## 🔐 Security Considerations

- All middleware authorization checks are properly enforced (fixed in Next.js 15.2.3)
- Input validation is implemented
- Rate limiting is configured
- Secure headers are set
- Environment variables are properly managed

## 📝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Documentation

- [Next.js Documentation](https://next.js.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/react/overview)

## 🤝 Support

For support, please:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
