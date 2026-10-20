# MERN Portfolio

A personal portfolio website built using the MERN stack to showcase my skills, projects, education, achievements, certificates, and resume.

## Features

- Responsive portfolio interface built with React and Vite
- Interactive skills and projects sections
- Light and dark theme toggle
- Contact form integrated with a Node.js and Express backend
- MongoDB integration for storing contact messages
- Resume downloads in PDF and DOCX formats
- Certificates and achievements section

## Technologies Used

- **Frontend:** React.js, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Tools:** Git, GitHub, VS Code

## Live Demo

- **Frontend:** https://mern-portfolio-eta-seven.vercel.app/
- **Backend:** https://mern-portfolio-sf7s.onrender.com
- **GitHub Repository:** https://github.com/rashiloya2803-ai/MERN-Portfolio

## Project Structure

```text
MERN-Portfolio/
├── client/                 # React frontend
│   ├── public/             # Images, certificates and assets
│   ├── src/                # React components and styles
│   ├── index.html
│   └── package.json
├── server/                 # Express backend
│   ├── files/              # Resume files
│   ├── models/             # MongoDB models
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

## Local Setup

### Prerequisites

- Node.js and npm
- A MongoDB database, such as MongoDB Atlas
- Git

### 1. Clone the repository

```bash
git clone https://github.com/rashiloya2803-ai/MERN-Portfolio.git
cd MERN-Portfolio
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

Open a separate terminal at the project root and run:

```bash
cd server
npm install
```

### 4. Configure environment variables

Create a `.env` file inside the `server/` directory and add the variables required by the backend.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace the example database value with your own MongoDB connection string. Never commit real credentials to GitHub.

### 5. Start the backend

From the `server/` directory, run:

```bash
npm start
```

### 6. Start the frontend

From the `client/` directory, run:

```bash
npm run dev
```

Open the local URL displayed by Vite in your terminal.

If the frontend requires an API URL environment variable, configure it according to the frontend code and Vite environment variable conventions.

## Author

**Rashi Loya**
