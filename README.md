# Medtachy

Medtachy is a MERN (MongoDB, Express, React, Node.js) application designed to
manage healthcare operations such as hospital beds, caretakers, appointments,
and emergency services.

This repository is structured as a monorepo with independently runnable
`frontend` and `backend` applications so the platform can scale as new
features are added.

## Project Structure

```
medtachy/
│
├── frontend/        # React + Material UI single-page application
├── backend/         # Node.js / Express REST API + MongoDB
├── .gitignore
├── README.md
└── package.json     # Root scripts to run both apps together
```

## Tech Stack

- **Frontend:** React, Material UI
- **Backend:** Node.js, Express
- **Database:** MongoDB (via Mongoose)

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- A running [MongoDB](https://www.mongodb.com/) instance (local or Atlas)

## Getting Started

### 1. Install dependencies

Install root, backend, and frontend dependencies in one step:

```bash
npm run install:all
```

Or install each app independently:

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Configure environment variables

Copy the example env file in the backend and update the values:

```bash
cd backend
cp .env.example .env
```

### 3. Run the apps

Run both apps together from the root:

```bash
npm run dev
```

Or run them independently:

```bash
# Backend (http://localhost:5000)
npm run backend

# Frontend (http://localhost:3000)
npm run frontend
```

## Health Check

Once the backend is running, verify it with:

```bash
curl http://localhost:5000/api/health
```

## License

MIT
