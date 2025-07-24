
# 🌐 Website Idea Section Generator

This is a full-stack AI-assisted project that allows users to submit a **website idea** and receive **auto-generated sections** like "Hero", "About", "Contact". Built with:

- 🧠 **Next.js** for the frontend
- ⚙️ **NestJS** for the backend API
- 🗃️ **MongoDB** for persistent data storage
- 🤖 **AI-powered IDE** (GitHub Copilot / Cursor) for faster development

---

## ✨ Features

- ✅ Simple, user-friendly form to submit website ideas
- 🚀 API generates 3 dummy sections per idea
- 💾 Stores and fetches website ideas + sections from MongoDB
- 🔄 Real-time preview of stored ideas and sections
- ⏳ Loading state and error handling
- 🧠 Assisted development with AI code generation

---

## 🖼️ Demo

**Frontend:**  
![Frontend Preview](https://via.placeholder.com/800x400?text=Form+%2B+Preview)

**Backend (API):**  
![Postman Preview](https://via.placeholder.com/800x300?text=NestJS+API+Response)

---

## 🧱 Tech Stack

| Layer        | Tech            | Description                               |
|--------------|------------------|-------------------------------------------|
| Frontend     | [Next.js](https://nextjs.org)       | Form, loading UI, data fetching            |
| Backend      | [NestJS](https://nestjs.com)        | API for generating & saving sections       |
| Database     | [MongoDB](https://mongodb.com)      | Stores ideas and their corresponding sections |
| Styling      | Tailwind CSS (Optional) | Simple utility-first UI                    |
| AI Assistance| GitHub Copilot / Cursor | IDE to generate boilerplate + speed up dev |

---

## 📂 Folder Structure

\`\`\`
website-builder/
├── backend/                  # NestJS API
│   ├── src/
│   │   ├── section/          # Controller, Service, Schema
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── ...
├── frontend/                 # Next.js frontend
│   ├── pages/index.tsx       # Main form + preview UI
│   ├── lib/api.ts (optional) # API wrapper
│   └── ...
\`\`\`

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-username/website-builder.git
cd website-builder
\`\`\`

---

### 2. MongoDB Setup

Ensure MongoDB is running locally:

\`\`\`bash
# Local default instance
mongodb://localhost:27017/website_builder
\`\`\`

> You can also use MongoDB Atlas by replacing the URI in NestJS config.

---

### 3. Backend (NestJS)

\`\`\`bash
cd backend
npm install
npm run start
\`\`\`

> API runs at \`http://localhost:3001\`

---

### 4. Frontend (Next.js)

\`\`\`bash
cd frontend
npm install
npm run dev
\`\`\`

> App runs at \`http://localhost:3000\`

---

## 📬 API Endpoints

| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| POST   | \`/sections\`        | Submit a website idea         |
| GET    | \`/sections\`        | Fetch all ideas + sections    |

**Sample POST body:**

\`\`\`json
{
  "idea": "Landing page for a bakery"
}
\`\`\`

**Sample GET response:**

\`\`\`json
[
  {
    "_id": "abc123",
    "idea": "Landing page for bakery",
    "sections": ["Hero", "About", "Contact"]
  }
]
\`\`\`

---

## 💡 How I Used AI Tools

> Throughout this project, I used **GitHub Copilot** and **Cursor AI** to accelerate development:

- 🚀 Scaffolded NestJS modules, services, and controllers
- 🔧 Generated boilerplate code and Mongo schema faster
- ⚡ Suggested efficient ways to handle async data and error states
- 📦 Auto-completed Axios fetch and API response structures

---

## 🚧 Improvements with More Time

- 🔌 Integrate real AI content generation using OpenAI API
- 👥 Add user authentication to save personal ideas
- 🌍 Deploy frontend (Vercel) and backend (Railway/Render)
- 🛠️ Add unit and E2E tests (Jest + Supertest)
- 💻 Create admin dashboard for managing ideas

---

## 🧠 Challenges & Solutions

| Challenge                  | Solution                                             |
|---------------------------|------------------------------------------------------|
| CORS error during frontend-backend calls | Enabled CORS in NestJS (\`app.enableCors()\`)        |
| MongoDB connection issues | Ensured local instance was running + correct URI    |
| Initial async loading issues | Added proper \`loading\` and \`error\` states in UI        |

---

## 🎥 Loom Walkthrough

🔗 [Watch my 3-minute Loom demo](https://www.loom.com/share/your-loom-link)

In the video, I cover:

- How I used Copilot & Cursor to build features
- Project folder structure and logic
- Backend to frontend flow
- Key decisions & future improvements

---

## 🤝 Contributing

Want to improve this idea or integrate real AI generation? PRs and forks are welcome!

---

## 📄 License

MIT — free to use and modify.

---

## ✉️ Contact

**Mohamed Abdelhady Elshamy**  
[LinkedIn](https://www.linkedin.com/in/your-link) • [GitHub](https://github.com/your-username) • [Email](mailto:your@email.com)
