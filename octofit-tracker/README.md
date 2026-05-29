# OctoFit Tracker

This repository contains the OctoFit Tracker modern multi-tier application.

## Project structure

- `frontend/` — React 19 + Vite frontend running on port `5173`
- `backend/` — Node.js + Express + TypeScript backend running on port `8000`
- `backend/src/models/Workout.ts` — Mongoose schema for MongoDB data storage

## Getting started

### Frontend

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Backend

```bash
cd octofit-tracker/backend
npm install
npm run dev
```

The backend listens on `http://localhost:8000` and expects MongoDB at `mongodb://127.0.0.1:27017/octofit`.

### MongoDB

Make sure MongoDB is running on port `27017`.

### Notes

- Frontend uses Vite for fast development.
- Backend uses Express with TypeScript and Mongoose for MongoDB.
