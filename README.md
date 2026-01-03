# Madurai Taekwondo Academy

Welcome to the official repository for the **Madurai Taekwondo Academy** website. This modern, responsive, and visually engaging single-page application showcases our academy's discipline, training programs, and community.

![Taekwondo Madurai](public/images/logo.png)

## 🚀 Project Overview

This website serves as the digital front door for our academy, providing visitors with information about:
*   **Our Mission**: Instilling discipline, strength, and confidence.
*   **Programs**: Training for all ages, from kids to adults.
*   **Coaches & Grandmasters**: Meet our experienced leadership.
*   **Events & Gallery**: Highlights from competitions and training sessions.
*   **Contact & Admissions**: Easy ways to join or get in touch.

## 🛠️ Technology Stack

*   **Frontend Library**: [React](https://react.dev/) (v19)
*   **Build Tool**: [Vite](https://vitejs.dev/) - For lightning-fast development and building.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) - For smooth reveal-on-scroll effects.
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Language**: TypeScript

## ⚙️ Installation & Local Development

Follow these steps to get the project running on your local machine:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/madurai-taekwondo-academy.git
    cd madurai-taekwondo-academy
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Start Development Server**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:3000` (or `3001` if 3000 is busy).

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 🌐 Deployment on Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/).

### Option 1: Vercel Dashboard (Recommended)
1.  Push your code to a Git repository (GitHub, GitLab, or Bitbucket).
2.  Log in to Vercel and click **Add New > Project**.
3.  Import your repository.
4.  Vercel will automatically detect `Vite` and configure the settings:
    *   **Framework Preset**: Vite
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  Click **Deploy**.

### Option 2: Vercel CLI
1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in the project root.
3.  Follow the prompts.

## 📁 Project Structure

```
madurai-taekwondo-academy/
├── src/
│   ├── components/      # React components (Hero, About, Gallery, etc.)
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles & Tailwind directives
├── public/              # Static assets (images, logos)
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🤝 Contribution

We welcome contributions! Please feel free to help us improve the site.
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/NewFeature`).
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.

---
**Created by SKOLA TECH IT SERVICES & ZSOS IT SOLUTIONS**
&copy; 2025 Taekwondo Madurai. All Rights Reserved.
