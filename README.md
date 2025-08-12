# Pankaj's Portfolio Website

A modern, dark-themed portfolio website built with Next.js, Tailwind CSS, and Framer Motion. The design is inspired by the clean, minimal style of Aconite.io with purple, neon, white, and black accents.

## 🚀 Features

- **Modern Dark Theme**: Clean, minimal design with dark background (#0B0C10)
- **Responsive Navigation**: Sticky navbar with smooth animations
- **Mobile-First Design**: Hamburger menu for mobile devices
- **Smooth Scrolling**: React-scroll integration for seamless navigation
- **Framer Motion Animations**: Beautiful fade-in and slide animations
- **Custom Logo**: Purple gear with lightning bolt design
- **Inter Font**: Modern, clean typography

## 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Design Features

### Navigation
- **Desktop**: Horizontal navigation with logo and name on the left
- **Mobile**: Hamburger menu with slide-down animation
- **Sticky**: Navbar stays at top with background opacity change on scroll
- **Hover Effects**: Purple underline animation (#5A3BB2)

### Color Scheme
- Background: `#0B0C10` (Dark)
- Border: `#1F2833` (Subtle separation)
- Primary Purple: `#5A3BB2` (Hover effects)
- Text: `#FFFFFF` (White)

### Animations
- Navbar fade-in on page load
- Mobile menu slide-down with staggered link animations
- Smooth scroll transitions
- Hover underline animations

## 📱 Responsive Design

- **Desktop**: Full horizontal navigation
- **Tablet**: Responsive spacing and typography
- **Mobile**: Hamburger menu with vertical link stack

## 🔧 Customization

### Adding New Sections
1. Add section ID to the `navLinks` array in `src/components/Navbar.tsx`
2. Create corresponding section in `src/app/page.tsx`
3. Add content and styling as needed

### Modifying Colors
Update the color values in `tailwind.config.js`:
```javascript
colors: {
  dark: {
    bg: '#0B0C10',
    border: '#1F2833',
  },
  purple: {
    primary: '#5A3BB2',
  },
}
```

### Changing Logo
Replace `public/logo.svg` with your custom logo.

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Sections

The portfolio includes the following sections:
- Home
- Services
- Case Studies
- Tools
- About
- Skills
- Projects
- Blogs
- Testimonials
- Contact

## 📝 License

This project is open source and available under the [ISC License](LICENSE).

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
