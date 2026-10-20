# MERN Portfolio

A personal portfolio website built using the MERN stack to showcase my skills, projects, education, achievements, and resume.

## Features

- Responsive portfolio interface built with React and Vite
- Interactive skills and project sections
- Light/dark theme toggle
- Contact form integrated with a Node.js and Express backend
- MongoDB database integration for storing contact messages
- Resume downloads in PDF and DOCX formats
- Certificates and achievements section

## Technologies Used

- **Frontend:** React.js, Vite, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Tools:** Git, GitHub, VS Code

## Live Demo

- **Frontend:** Add your deployed frontend URL here
- **Backend:** Add your deployed backend URL here

## Project Structure

- `client/` — React frontend
- `server/` — Express backend, database models, and resume files

## Local Setup

### Prerequisites

Install Node.js and npm. A MongoDB database is also required.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd MERN-Portfolio
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

Open another terminal at the project root and run:

```bash
cd server
npm install
```

### 4. Configure environment variables

Create `server/.env` and add the environment variables required by your backend, using the names expected in `server.js`.

For example:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Never commit real credentials to GitHub.

### 5. Run the backend

From the `server/` directory, run:

```bash
npm start
```

If your `server/package.json` uses a different start script, use the script defined there.

### 6. Run the frontend

From the `client/` directory, run:

```bash
npm run dev
```

Open the local URL displayed by Vite in your terminal.

## Author

Rashi Loya