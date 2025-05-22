# Astrai 🌐  
Multi-AI Research Assistant

**Astrai** is a full-stack research assistant that empowers users to perform intelligent web searches, summarize information, and compare responses using multiple LLMs like Gemini, Claude, ChatGPT, and DeepSeek. It's designed for researchers, developers, and students who want fast and accurate insights using a single interface.

---

## 🚀 Features

🔍 Perform web searches using Brave Search API  
🧠 Summarize search results using Gemini, ChatGPT, Claude, or DeepSeek  
⚡ Switch between different LLMs for diverse perspectives  
📚 Clean, responsive UI with shadcn/ui and Tailwind CSS  
🧾 Built-in history and session management (coming soon)  
👤 Authentication via Clerk for secure user sessions

---

## 🛠 Tech Stack

| Technology     | Description                                      |
|----------------|--------------------------------------------------|
| Next.js        | Full-stack React framework                       |
| Clerk          | Authentication and user session management       |
| Supabase       | Backend and real-time database                   |
| Tailwind CSS   | Utility-first CSS framework                      |
| shadcn/ui      | Accessible and customizable UI components        |
| Brave API      | Used for performing web searches programmatically|
| Gemini API     | Google’s LLM for intelligent summarization       |
| Claude/ChatGPT/DeepSeek | Integrated via server logic (custom API) |

---

## 📦 Getting Started

### 📦 Project Setup

To run **Astrai** locally, follow these steps:

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/astra-ai.git
cd astra-ai

# 2. Install dependencies
npm install

# 3. Create a `.env.local` file and add the following environment variables:
# Clerk authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/

# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_KEY=

# API Keys
BRAVE_API_KEY=
GEMINI_API_KEY=
NEXT_PUBLIC_GEMINI_API_KEY=


# 4. Start the development server
npm run dev
