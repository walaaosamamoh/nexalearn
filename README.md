# NexaLearn — Online Learning Platform

NexaLearn is a modern e-learning platform built with React and TypeScript. It enables users to explore courses, enroll in learning programs, complete lessons, and track their progress through a personalized student dashboard.

## Live Demo

* **Frontend:** [NexaLearn](https://nexalearn-vqud.vercel.app/home)
* **GraphQL API:** [NexaLearn API](https://nexalearn-5dag.vercel.app/)

## Features

* **Authentication:** User registration and login.
* **Course Discovery:** Browse available courses and view course details.
* **Course Enrollment:** Enroll in courses and access them from My Courses.
* **Learning Experience:** Navigate lessons and mark lessons as completed.
* **Progress Tracking:** Monitor course completion through the student dashboard.
* **Student Dashboard:** Access enrolled courses and learning progress.
* **Protected Routes:** Restrict student pages to authenticated users.
* **Certificates Page:** View courses that have been completed.
* **Responsive UI:** Modern interface designed for different screen sizes.

## Tech Stack

**Frontend**

* React
* TypeScript
* Vite
* Tailwind CSS
* React Router
* Apollo Client
* Zustand
* TanStack Form
* Zod

**Backend**

* Node.js
* Apollo Server
* GraphQL

## Getting Started

### Prerequisites

* Node.js and npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/walaaosamamoh/nexalearn.git
cd nexalearn
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Configure the GraphQL endpoint

Create a `.env` file in the project root if you want to run the frontend locally against a local API:

```env
VITE_GRAPHQL_URL=http://localhost:4000/
```

To use the deployed API instead, set `VITE_GRAPHQL_URL` to:

```env
VITE_GRAPHQL_URL=https://nexalearn-5dag.vercel.app/
```

### 4. Start the frontend

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

### 5. Run the backend locally

The GraphQL backend is located in the `mock-api` directory. Install its dependencies and use the development or start command defined in `mock-api/package.json`.

## Project Structure

```text
nexalearn/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── graphql/
│   └── ...
├── mock-api/
│   ├── package.json
│   └── server.js
├── public/
├── package.json
└── README.md
```

## Future Improvements

* Persistent database integration
* Certificate generation and download
* Profile editing and persistent settings

## Important Notes

NexaLearn is a portfolio project using mock backend data. User accounts and enrollments are stored in memory and may reset when the server restarts. Authentication and data storage are intended for demonstration purposes, not production use. Do not use real passwords or sensitive personal information.

## Author

**Walaa Osama** — Front-End Developer

* [GitHub Profile](https://github.com/walaaosamamoh)
