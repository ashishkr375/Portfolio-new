# Getting Started with Your Portfolio Website

This portfolio website has been customized based on your information. Here are some steps to get it up and running:

## Prerequisites
- Node.js (recommended version 14 or higher)
- npm or pnpm (this project uses pnpm)

## Setup Instructions

1. **Add Your Profile Picture**
   - Add your profile picture as `profile.jpg` in the `/public` folder
   - Alternatively, update the Hero component (`components/ui/Hero/index.jsx`) to point to your image location

2. **Add Your Resume**
   - Add your resume as `Ashish_Kumar_Resume.pdf` in the `/public/assets` folder
   - Alternatively, update the download links in the Hero and Navbar components

3. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:3000](http://localhost:3000) to see your website

## Customizing Your Portfolio

You can further customize your portfolio by editing the following files:

- **Hero Section**: `components/ui/Hero/index.jsx`
- **About Section**: `components/ui/About/index.jsx`
- **Projects Section**: `components/ui/Projects/index.jsx`
- **Experience Section**: `components/ui/Experience/index.jsx`
- **Testimonials Section**: `components/ui/MyTestimonials/index.jsx`
- **Contact Section**: `components/ui/Contact/index.jsx`
- **Layout/Metadata**: `components/Layout.jsx`
- **Navigation**: `components/ui/Navbar/index.jsx`
- **Footer**: `components/ui/Footer/index.jsx`

## Deployment

To deploy your portfolio to Vercel:

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Import your repository
4. Deploy your site

## Notes

- Make sure to replace placeholder images with your actual profile picture
- Update links to your social media profiles and GitHub repositories in the components
- Customize the content to reflect your latest projects and experiences

Happy coding!