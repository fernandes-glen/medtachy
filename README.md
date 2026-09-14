# Medtachy

Medtachy is a MERN (MongoDB, Express, React, Node.js) application designed to
manage healthcare operations such as hospital beds, caretakers, appointments,
and emergency services.

This repository is structured as a monorepo with independently runnable
`frontend` and `backend` applications so the platform can scale as new
features are added.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [MongoDB Setup](#mongodb-setup)
- [Running the Frontend](#running-the-frontend)
- [Running the Backend](#running-the-backend)
- [Scripts](#scripts)
- [Project Structure](#project-structure)

## Project Overview

Medtachy provides REST APIs and a React interface for managing a hospital's
day-to-day operations. Planned feature areas include:

- **Hospital beds** — availability and allocation
- **Caretakers** — assignment and scheduling
- **Appointments** — booking and tracking
- **Emergency services** — rapid-response coordination

Epic 1 establishes the foundation: project scaffolding, routing, layouts,
theming, database connectivity, and a health-check API.

## Technology Stack

| Layer        | Technology                                 |
| ------------ | ------------------------------------------ |
| **Frontend** | React 18, Material UI, React Router (Vite) |
| **Backend**  | Node.js, Express                           |
| **Database** | MongoDB via Mongoose                       |
| **Tooling**  | Vite, nodemon, concurrently, dotenv        |

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- A running [MongoDB](https://www.mongodb.com/) instance (local or Atlas)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/fernandes-glen/medtachy.git
cd medtachy
```

### 2. Install dependencies

Install root, backend, and frontend dependencies in one step:

```bash
npm run install:all
```

Or install each app independently:

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Configure environment variables

Copy the example env file in the backend and update the values:

```bash
cd backend
cp .env.example .env
```

## Environment Variables

The backend reads configuration from `backend/.env` (never commit this file —
it is git-ignored). Use `backend/.env.example` as a template.

| Variable       | Required | Example                                       | Description                                 |
| -------------- | -------- | --------------------------------------------- | ------------------------------------------- |
| `PORT`         | no       | `5000`                                        | Port the Express server listens on          |
| `NODE_ENV`     | no       | `development`                                 | Runtime environment                         |
| `MONGODB_URI`  | yes      | `mongodb://127.0.0.1:27017/medtachy`          | MongoDB connection string                   |
| `JWT_SECRET`   | no\*     | `your_secret`                                 | Secret for signing JWTs (used in auth epic) |
| `CORS_ORIGINS` | no       | `http://localhost:5173,http://localhost:3000` | Comma-separated allowed frontend origins    |

\* Not used until the authentication epic, but defined early.

## MongoDB Setup

The backend connects to MongoDB via Mongoose using the `MONGODB_URI`
environment variable.

### Option A — Local MongoDB

Install and start MongoDB Community Edition, then set:

```dotenv
MONGODB_URI=mongodb://127.0.0.1:27017/medtachy
```

macOS (Homebrew):

```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Option B — MongoDB Atlas (hosted)

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Create a database user and allow your IP.
3. Copy the connection string into `MONGODB_URI`:

```dotenv
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/medtachy
```

Verify the connection logic without starting the full server:

```bash
cd backend
npm run verify:db
```

When connected, the health endpoint reports `"database": "connected"`.

## Running the Frontend

```bash
# From the repo root (http://localhost:3000)
npm run frontend

# or from the frontend directory
cd frontend && npm run dev
```

## Running the Backend

```bash
# From the repo root (http://localhost:5000)
npm run backend

# or from the backend directory
cd backend && npm run dev
```

Run both together from the root:

```bash
npm run dev
```

## Scripts

### Root (`/`)

| Script                | Description                                          |
| --------------------- | ---------------------------------------------------- |
| `npm run install:all` | Install root, backend, and frontend dependencies     |
| `npm run dev`         | Run backend + frontend together (via `concurrently`) |
| `npm run backend`     | Run the backend in watch mode                        |
| `npm run frontend`    | Run the frontend dev server                          |
| `npm start`           | Start the backend (production mode)                  |
| `npm run build`       | Build the frontend for production                    |

### Backend (`/backend`)

| Script                | Description                         |
| --------------------- | ----------------------------------- |
| `npm run dev`         | Start with `nodemon` (auto-reload)  |
| `npm start`           | Start with `node` (production)      |
| `npm run verify:db`   | Verify the MongoDB connection logic |
| `npm run verify:cors` | Verify the CORS configuration       |

### Frontend (`/frontend`)

| Script                      | Description                          |
| --------------------------- | ------------------------------------ |
| `npm run dev` / `npm start` | Start the Vite dev server            |
| `npm run build`             | Build for production                 |
| `npm run preview`           | Preview the production build locally |

## Health Check

Once the backend is running, verify it with:

```bash
curl http://localhost:5000/api/health
```

The `database` field reflects the MongoDB connection state
(`connected` / `disconnected`).

## Project Structure

```
medtachy/
│
├── frontend/                  # React + Material UI SPA (Vite)
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable UI components
│   │   ├── pages/              # Route pages (Home, Login, Register, Dashboard, NotFound)
│   │   ├── layouts/            # MainLayout, AuthLayout, DashboardLayout
│   │   ├── services/           # Centralized API config (api.js, healthService.js)
│   │   ├── hooks/              # Custom React hooks (useHealth)
│   │   ├── context/            # React context providers (AppContext)
│   │   ├── theme/              # MUI theme configuration
│   │   ├── utils/              # Shared helpers
│   │   ├── App.jsx             # Routes
│   │   └── main.jsx            # Entry point
│   ├── index.html
│   └── vite.config.js
│
├── backend/                   # Node.js / Express REST API
│   ├── src/
│   │   ├── config/            # database.js, cors.js
│   │   ├── controllers/       # Route handlers
│   │   ├── middleware/        # requestLogger, errorHandler
│   │   ├── models/            # Mongoose models
│   │   ├── routes/            # Express routers
│   │   ├── services/          # Business logic
│   │   ├── utils/             # ApiError, asyncHandler
│   │   ├── app.js             # Express app + middleware
│   │   └── server.js          # Entry point (DB connect + listen)
│   ├── scripts/               # verify-db.js, verify-cors.js
│   └── .env.example
│
├── .gitignore
├── README.md
└── package.json               # Root scripts to run both apps together
```

## License

MIT
