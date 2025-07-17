# EduBot - Dynamic Real-Time Information Retrieval Chatbot

![EduBot Logo](https://img.shields.io/badge/EduBot-AI%20Powered-blue?style=for-the-badge&logo=robot)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.11-38B2AC?style=for-the-badge&logo=tailwindcss)

## 🚀 Overview

EduBot is a revolutionary AI-powered chatbot designed specifically for educational institutions. Unlike traditional chatbots that rely on pre-trained models or static FAQs, EduBot dynamically scrapes and parses live information directly from college websites to provide real-time, accurate answers to user queries.

## ✨ Key Features

- **🔄 Real-Time Information Retrieval**: Directly scrapes and parses live data from college websites
- **🧠 AI-Powered Summarization**: Uses advanced LLMs like GEMINI 1.5 FLASH for intelligent content processing
- **🛡️ No Pre-trained Dependencies**: Eliminates the need for static FAQs or outdated pre-trained data
- **🌐 Universal Compatibility**: Adapts to diverse college website structures
- **⚡ Always Up-to-Date**: Automatically reflects website updates without manual maintenance

## 🏗️ Architecture

### Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | React + TypeScript | User interface |
| **Styling** | Tailwind CSS + shadcn/ui | Modern, responsive design |
| **Build Tool** | Vite | Fast development and build |
| **Backend** | Flask | Server-side logic |
| **Database** | PostgreSQL | Data storage |
| **Web Scraping** | BeautifulSoup | Content extraction |
| **Semantic Search** | BERT | Intelligent query matching |
| **LLM** | GEMINI 1.5 FLASH | Content summarization |
| **API** | REST API | Communication layer |

### System Components

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend UI   │ ── │   Flask API     │ ── │   PostgreSQL    │
│   (React/TS)    │    │   (Python)      │    │   (Database)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                │
                                │
                       ┌─────────────────┐
                       │  Web Scraping   │
                       │  (BeautifulSoup)│
                       └─────────────────┘
                                │
                                │
                       ┌─────────────────┐
                       │   LLM & BERT    │
                       │  (AI Processing)│
                       └─────────────────┘
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/CognicAI/EduBot_Landing_Page.git
   cd EduBot_Landing_Page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview production build |

## 🎯 Use Cases

### Educational Institutions
- **Student Queries**: Course information, schedules, admission requirements
- **Faculty Support**: Academic policies, research opportunities, administrative procedures
- **Staff Assistance**: HR policies, campus facilities, event information

### Information Portals
- **Real-time Updates**: Dynamic content that changes frequently
- **Automated Support**: Reduce manual customer service workload
- **Scalable Solutions**: Handle multiple queries simultaneously

### Customer Support
- **Live Information**: Always current product information
- **Reduced Maintenance**: No need to manually update knowledge bases
- **Improved Accuracy**: Direct source information reduces errors

## 🌟 Advantages

- ✅ **Consistently Up-to-Date**: Information is always current and accurate
- ✅ **Reduced Manual Effort**: No need to maintain static knowledge bases
- ✅ **Scalable Solution**: Works across different website structures
- ✅ **Wide Query Coverage**: Handles diverse user questions effectively
- ✅ **Enhanced User Experience**: Provides timely and relevant answers

## 📁 Project Structure

```
EduBot_Landing_Page/
├── public/
│   ├── favicon.svg
│   ├── placeholder.svg
│   ├── robots.txt
│   └── videos/
│       └── edubot-demo.mp4
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── mode-toggle.tsx  # Theme toggle
│   │   └── theme-provider.tsx
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── pages/               # Route components
│   │   ├── Index.tsx        # Homepage
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   └── NotFound.tsx     # 404 page
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── components.json          # shadcn/ui configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## 🎨 Features Showcase

### Modern UI Components
- **Dark/Light Mode**: Seamless theme switching
- **Responsive Design**: Works on all device sizes
- **Accessibility**: WCAG compliant components
- **Animations**: Smooth transitions and interactions

### Interactive Elements
- **Demo Video**: Watch EduBot in action
- **Contact Forms**: Easy communication with inventors
- **Navigation**: Smooth scrolling and routing

## 👥 Team

**Inventors:**
- P. Harsha Vardhan - AI Engineer
- K. Abhishek - AI Engineer
- A. Sai Prashanth - Media Manager
## 📄 License

This project is part of an invention in the field of Artificial Intelligence and Educational Technology.

## 🤝 Contributing

We welcome contributions! Please feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Contact

For inquiries about EduBot or collaboration opportunities, please visit our [Contact Page](./src/pages/Contact.tsx).

---

<div align="center">
  <p>Made with ❤️ by the EduBot Team</p>
  <p>© 2025 CognicAI. All rights reserved.</p>
</div>