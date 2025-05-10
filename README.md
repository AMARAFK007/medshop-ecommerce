# MedShop E-commerce Platform

A comprehensive e-commerce website for a medicine shop with both customer-facing features and admin panel.

## Features

### Customer Features
- Responsive design using Tailwind CSS
- Product browsing and filtering
- Product catalog with categories
- Shopping cart and checkout system
- User accounts and authentication
- Product reviews and ratings

### Admin Features
- Dashboard with sales statistics and charts
- Order management
- Inventory management
- Customer management
- Analytics and reporting

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **UI Components**: Custom components with responsive design
- **Icons**: Heroicons
- **Charts**: Chart.js with React-ChartJS-2

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/medshop-ecommerce.git
cd medshop-ecommerce
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

```
medshop-ecommerce/
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── admin/        # Admin panel pages
│   │   ├── products/     # Product pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   └── components/       # React components
│       ├── admin/        # Admin-specific components
│       ├── home/         # Home page components
│       ├── layout/       # Layout components (Header, Footer)
│       └── products/     # Product-related components
├── .github/              # GitHub Actions workflows
├── .gitignore
├── package.json
├── netlify.toml          # Netlify configuration
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Deployment

### GitHub Deployment

1. Create a new GitHub repository
2. Push your local repository to GitHub:
```bash
git remote add origin https://github.com/yourusername/medshop-ecommerce.git
git branch -M main
git push -u origin main
```

### Netlify Deployment

There are two ways to deploy this project to Netlify:

#### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Log in to Netlify and click "New site from Git"
3. Choose your GitHub repository
4. Set build command to `npm run build`
5. Set publish directory to `.next`
6. Add environment variables if needed
7. Click "Deploy site"

#### Option 2: Deploy via GitHub Actions

1. Add the following secrets to your GitHub repository:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID

2. Push to the main branch, and GitHub Actions will automatically deploy to Netlify

## License

This project is licensed under the MIT License. 