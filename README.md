# ExamCore - IT Certification Mock Exam System

A comprehensive, responsive web application for practicing IT certification exam questions across multiple core computing domains. Built with **React 18**, **TypeScript**, **Vite**, and **Tailwind CSS**, featuring automatic local storage progress tracking and automated **GitHub Pages** deployment.

---

## 🚀 Key Features

- **320 Practice Questions**: High-quality questions covering real-world IT certification topics.
- **9 Core Domains**:
  - 🐍 **Python Professional** (Syntax, data structures, mutability)
  - 🌐 **CCNA Networking** (OSPF, BGP, TCP/IP, VLANs, subnetting)
  - ☁️ **Cloud Architecture** (AWS, Azure, GCP, IaaS/PaaS/SaaS)
  - 🗄️ **Databases & SQL** (ACID, indexing, JOINs, normalized schema)
  - 🐧 **Linux Sysadmin** (Permissions, systemd, process management, SSH)
  - 🖥️ **Windows Administration** (Active Directory, Group Policy, PowerShell)
  - 💻 **IT Fundamentals** (Hardware, OSI model, BIOS/UEFI, CPU)
  - 🛡️ **Cybersecurity** (CIA triad, PKI, firewall policies, encryption)
  - 💾 **RAID & Storage** (RAID 0, 1, 5, 6, 10, parity calculation)
- **Interactive Mock Exam Experience**:
  - Single-choice option selection with **Keyboard Shortcuts** (`1`, `2`, `3`, `4` or `A`, `B`, `C`, `D`).
  - Flag questions for later review during the test.
  - Live session timer and visual progress bar.
  - Question Map / Grid Drawer to jump quickly between questions.
- **Detailed Exam Review**:
  - Complete accuracy breakdown (Score %, Correct count, Wrong count, Time spent).
  - Color-coded correct/incorrect option highlights.
  - In-depth technical explanations for every question.
  - Instant question filter (All / Right / Wrong) and keyword search bar.
- **Analytics & History**:
  - Personal record tracking saved automatically to `localStorage`.
  - Leaderboard showing highest percentage score per subject.
  - Past exam log history with past review viewing capabilities.

---

## 🛠️ Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (v4)
- **Icons**: Lucide React
- **CI/CD**: GitHub Actions (`gh-pages` branch deployment)

---

## 💻 Local Development Setup

### Prerequisites

Ensure you have **Node.js 18+** installed on your system.

### Steps

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

4. **Lint and type-check**:
   ```bash
   npm run lint
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to GitHub Pages

This repository includes a GitHub Workflow located at `.github/workflows/deploy.yml`.

### How to Activate GitHub Pages Deployment:

1. Push your code to the `main` or `master` branch on GitHub.
2. The **Build and Deploy to GitHub Pages** action will automatically run and build the app into the `gh-pages` branch.
3. In your GitHub Repository settings:
   - Go to **Settings** > **Pages**.
   - Set **Source** to **Deploy from a branch**.
   - Set **Branch** to `gh-pages` and folder to `/ (root)`.
   - Click **Save**.

Your app will be live at `https://<your-username>.github.io/<repository-name>/`.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
