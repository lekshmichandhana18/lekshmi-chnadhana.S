# Lekshmi Chandhana S - Professional Developer Portfolio

A highly polished, responsive, and interactive personal developer portfolio website. Built using **React (v19)**, **Vite**, **Tailwind CSS (v4)**, and **Motion** animations.

This portfolio is configured with a modern dark theme, smooth scrolling, elegant typography pairings ("Space Grotesk" + "Inter"), glassmorphic UI elements, and is fully optimized for mobile, tablet, and desktop viewports.

---

## 🎨 Design & Style Concept
- **Color Palette:** Slate Dark (`#030712`) backdrop paired with soft cybernetic glow accents in **Teal**, **Cyan**, and **Indigo**.
- **Typography:** Display headings in **Space Grotesk** (tech-forward, architectural weight) and body copy in **Inter** (clean, highly legible).
- **Smooth Interaction:** Layout transition and scroll entrances built using lightweight fluid physics from `motion`.
- **Responsive Fluidity:** Adaptable grid structures that collapse cleanly on mobile devices while spreading organically on ultra-wide desktop monitors.

---

## 🚀 Key Modules
1. **Hero Header:** Direct welcome statement with floating action badges, social connection shortcuts (GitHub, LinkedIn, Email), and a premium glowing circular-masked profile photo.
2. **About Me:** Professional summary detailing interests in modern software development, web applications, and problem-solving, coupled with future career aspirations.
3. **Technical Capabilities:** Visual interactive charts displaying proficiency categories across Languages (Python, Java, C, JS), Web Technologies, Databases, and Developer Toolchains (Git/GitHub).
4. **Featured Projects:** Individualized cards representing academic engineering achievements (e.g., Hospital Management System, RISC-V Pipeline Hazard Mitigation) with interactive expand animations and GitHub pointers.
5. **Core Strengths:** Bento-styled grid highlighting interpersonal values such as Leadership, Teamwork, Communication, Continuous Learning, and Impact-Driven Problem Solving.
6. **Credentials:** Clean dual-column timeline presenting academic progress at Bishop Jerome Institute on the left, and verified professional certifications (Machine Learning, NASSCOM) on the right.
7. **Contact Panel:** Glassmorphic secure messaging container enabling visitors to send validated inquiries, with real-time feedback and submit status handlers.

---

## 📦 Tech Stack
- **Library:** [React](https://react.dev)
- **Tooling:** [Vite](https://vite.dev) (Ultra-fast build server)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (Utility-first layout and CSS injection)
- **Animations:** [Motion](https://motion.dev) (Responsive high-performance state-driven transitions)
- **Icons:** [Lucide React](https://lucide.dev)

---

## 💻 Local Development Instructions

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your workstation.

### 2. Installation
Clone or download the project files, navigate to the folder, and run:
```bash
npm install
```

### 3. Start Development Server
Boot up the fast local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live interface.

### 4. Build for Production
Bundle the asset files and build optimized static files in `dist/`:
```bash
npm run build
```

---

## 🐙 Step-by-Step GitHub Setup Instructions

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and sign in.
   - Click the **New** repository button in the top right.
   - Name the repository `lekshmi-portfolio`, set it to **Public**, and click **Create repository** (do not add a README, license, or gitignore since they are already included here).

2. **Initialize Local Git Repository:**
   Open your local terminal in the project directory:
   ```bash
   git init
   git add .
   git commit -m "Initialize professional developer portfolio website"
   ```

3. **Link to GitHub & Push:**
   Replace the placeholder with your actual repository URL:
   ```bash
   git branch -M main
   git remote add origin https://github.com/lekshmichandhana18/lekshmi-portfolio.git
   git push -u origin main
   ```

---

## ⚡ Step-by-Step Vercel Deployment Instructions

Deploying your portfolio to **Vercel** is extremely simple and takes less than 2 minutes.

### Method 1: Using the Vercel Dashboard (Recommended)

1. Go to [Vercel](https://vercel.com) and log in or create a free account using your GitHub credentials.
2. Click the **Add New...** dropdown button and select **Project**.
3. Under "Import Git Repository", authorize your GitHub account if needed, locate your `lekshmi-portfolio` repository, and click **Import**.
4. In the **Configure Project** step:
   - **Framework Preset:** Select **Vite** (Vercel will usually auto-detect this).
   - **Root Directory:** `./`
   - **Build and Output Settings:** Leave defaults (`Build Command: npm run build`, `Output Directory: dist`).
5. Click **Deploy**. Vercel will build your static files and provide a secure public URL (e.g., `lekshmi-portfolio.vercel.app`) with automatic SSL.

### Method 2: Using the Vercel CLI (Command Line)

If you prefer deploying directly from your terminal:

1. Install the global Vercel utility:
   ```bash
   npm install -g vercel
   ```
2. Run the deployment initialization in your root directory:
   ```bash
   vercel
   ```
3. Follow the CLI prompt steps:
   - Log in to your Vercel account.
   - Set project path to `./`.
   - Link to a new project (e.g. `lekshmi-portfolio`).
4. To release a production build:
   ```bash
   vercel --prod
   ```
