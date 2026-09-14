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
├── frontend/        # React + Material UI single-page application (Vite)
├── backend/         # Node.js / Express REST API + MongoDB
├── .gitignore
├── README.md
└── package.json     # Root scripts to run both apps together
```

## Tech Stack

- **Frontend:** React, Material UI, React Router (built with Vite)
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

## Scripts

### Root (`/`)

| Script | Description |
|--------|-------------|
| `npm run install:all` | Install root, backend, and frontend dependencies |
| `npm run dev` | Run backend + frontend together (via `concurrently`) |
| `npm run backend` | Run the backend in watch mode |
| `npm run frontend` | Run the frontend dev server |
| `npm start` | Start the backend (production mode) |
| `npm run build` | Build the frontend for production |

### Backend (`/backend`)

| Script | Description |
|--------|-------------|
| `npm run dev` | Start with `nodemon` (auto-reload) |
| `npm start` | Start with `node` (production) |
| `npm run verify:db` | Verify the MongoDB connection logic |
| `npm run verify:cors` | Verify the CORS configuration |

### Frontend (`/frontend`)

| Script | Description |
|--------|-------------|
| `npm run dev` / `npm start` | Start the Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |

## Health Check

Once the backend is running, verify it with:

```bash
curl http://localhost:5000/api/health
```

The `database` field reflects the MongoDB connection state
(`connected` / `disconnected`).

## Database

The backend connects to MongoDB via Mongoose using the `MONGODB_URI`
environment variable. You can point it at a local instance or a hosted
cluster (e.g. MongoDB Atlas):

```dotenv
MONGODB_URI=mongodb://127.0.0.1:27017/medtachy
```

To verify the database connection logic without a running server, use the
in-memory verification script:

```bash
cd backend
npm run verify:db
```

## License

MIT
