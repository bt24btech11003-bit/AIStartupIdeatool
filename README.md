<img width="1424" height="834" alt="image" src="https://github.com/user-attachments/assets/106f08f6-3bee-42ad-b810-2f38570e0966" />
<img width="1424" height="834" alt="image" src="https://github.com/user-attachments/assets/0cf17d32-eaae-4002-8529-2a7e0c3c9344" />
<img width="1424" height="834" alt="image" src="https://github.com/user-attachments/assets/d643774b-7911-47f9-8d18-9f6cbc854134" />
# 🚀 AI Startup Validator

An AI-powered web application that helps entrepreneurs evaluate, refine, and validate startup ideas using multiple AI agents. The platform provides detailed insights from investor, customer, and competitor perspectives, generates an actionable startup roadmap, maintains validation history, and supports downloadable PDF reports.

---

## 📌 Overview

Starting a startup is challenging, and validating an idea before investing time and resources is crucial.

**AI Startup Validator** leverages Large Language Models (LLMs) through the **Groq API** to simulate real-world business analysis from multiple viewpoints. Users can enhance their startup ideas, receive comprehensive AI feedback, track previous validations, and export reports.

---

## ✨ Features

### 🔐 Authentication
- Secure User Signup & Login
- JWT-based Authentication
- Password Hashing using bcrypt
- Protected Routes

### 💡 AI Startup Idea Enhancement
- Enhance raw startup ideas using AI
- Improve clarity, business model, and scalability
- Generate structured startup descriptions

### 🤖 Multi-Agent Startup Validation
Analyze startup ideas using three specialized AI agents:

- 📈 **Investor Agent**
  - Investment potential
  - Revenue model
  - Scalability
  - Risks

- 👤 **Customer Agent**
  - Customer pain points
  - Product-market fit
  - User adoption
  - Customer value proposition

- 🏢 **Competitor Agent**
  - Existing competitors
  - Market differentiation
  - Competitive advantages
  - Business positioning

### 📊 AI Verdict
Generate a comprehensive startup summary including:
- Overall feasibility
- Key strengths
- Potential risks
- Improvement suggestions

### 🗺 Startup Roadmap
Generate an actionable roadmap covering:
- MVP Development
- Market Validation
- Customer Acquisition
- Growth Strategy
- Scaling Plan

### 📜 Validation History
- View previous startup validations
- Download PDF reports
- Delete previous reports
- Track validation timestamps

### 📄 PDF Report Generation
Generate professional downloadable reports containing:
- Startup Idea
- AI Agent Analysis
- Final Verdict
- Startup Roadmap

### 📈 Daily Validation Limit
- Maximum **5 validations per day**
- Remaining validations displayed dynamically
- Daily counter resets automatically

### 📱 Responsive Design
- Desktop
- Tablet
- Mobile Friendly

---

# 🛠 Tech Stack

## Frontend
- React.js
- React Router DOM
- Axios
- CSS3

## Backend
- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

## Database
- MongoDB
- Mongoose

## AI Integration
- Groq API
- Llama 3.3

## PDF Generation
- PDFKit

---

# 📂 Project Structure

```text
AIStartupIdeatool
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controller
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── package.json
│   └── index.js
│
├── .gitignore
└── README.md
```

---

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/bt24btech11003-bit/AIStartupIdeatool.git
```

```bash
cd AIStartupIdeatool
```

---

## Backend Setup

```bash
cd server
npm install
```

Create a `.env` file inside the `server` folder:

```env
PORT=8000

MONGO_URL=YOUR_MONGODB_CONNECTION_STRING

JWT_SECRET=YOUR_SECRET_KEY

GROQ_API_KEY=YOUR_GROQ_API_KEY
```

Start the backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# 🧠 Workflow

1. Sign up or log in.
2. Enter a startup idea.
3. Enhance the idea using AI.
4. Validate the enhanced idea.
5. Receive:
   - Investor Analysis
   - Customer Analysis
   - Competitor Analysis
   - Overall Verdict
   - Startup Roadmap
6. Download the report as a PDF.
7. Access previous validations from the History page.

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing with bcrypt
- Protected Backend Routes
- Environment Variable Configuration
- Daily Validation Rate Limiting

---

# 📸 Screenshots

> Add screenshots after deployment.

| Dashboard | Validation Result |
|-----------|-------------------|
| ![Dashboard](screenshots/dashboard.png) | ![Result](screenshots/result.png) |

| Login | History |
|--------|---------|
| ![Login](screenshots/login.png) | ![History](screenshots/history.png) |

---

# 🌟 Future Enhancements

- AI Pitch Deck Generator
- Startup Score Visualization
- Investor Matching
- Market Size Estimation
- Team Recommendation System
- Email Verification
- Forgot Password
- Google Authentication
- Dark / Light Theme
- Admin Dashboard

---

# 👨‍💻 Author

**Anshul Kumar**

B.Tech, Biotechnology & Bioinformatics  
**Indian Institute of Technology Hyderabad (IIT Hyderabad)**

### GitHub

https://github.com/bt24btech11003-bit

### LinkedIn

*Add your LinkedIn profile here.*

---

# 📄 License

This project is licensed under the MIT License.

---

⭐ If you found this project useful, consider giving it a star!
