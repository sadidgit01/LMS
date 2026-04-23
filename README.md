# LMS

A frontend-only Learning Management System built with React and Vite.

This project is my very first website. I built it to practice modern frontend development, create a clean multi-page learning platform UI, and understand how a real LMS could be structured for both students and educators.

The backend is not finished yet, so the current version focuses on the user interface, routing, reusable components, and frontend experience. Dynamic data is currently powered by dummy data and mock flows, with full backend functionality planned for a future version.

## Live Demo

[View Live Project](https://lms-gamma-self.vercel.app/)

## Project Status

This project is currently in active learning-stage development.

- Frontend: available
- Backend: planned
- Authentication integration: working with Clerk
- Real database/API: not added yet

## Features

### Student Side

- Landing page with hero, featured sections, testimonials, and call-to-action blocks
- Course listing page with search/filter by course name
- Course details page with:
  - course description
  - pricing and discount display
  - chapter and lecture breakdown
  - preview video support
  - rating and enrollment info
- My Enrollments page with course progress display
- Course player page route for continuing enrolled content

### Educator Side

- Separate educator layout with its own navbar, sidebar, and footer
- Dashboard view with:
  - total enrollments
  - total courses
  - total earnings
  - latest enrollments table
- Add Course page UI with rich text editor setup
- My Courses page structure
- Students Enrolled page structure

### General Frontend Work

- Client-side routing with `react-router-dom`
- Shared global state using React Context
- Responsive layout with Tailwind CSS
- Reusable student and educator components
- Authentication with Clerk
- Google sign-in working
- Vercel deployment support

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- Clerk React
- Axios
- Quill
- rc-progress
- React YouTube

## Folder Structure

```text
LMS/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── educator/
│   │   │   └── student/
│   │   ├── context/
│   │   ├── pages/
│   │   │   ├── educator/
│   │   │   └── student/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── vercel.json
└── netlify.toml
```

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/sadidgit01/LMS.git
cd LMS
```

Install frontend dependencies:

```bash
cd client
npm install
```

### Environment Variables

Create a `.env` file inside the `client` folder and add:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=BDT
```

### Run the Development Server

```bash
cd client
npm run dev
```

Then open the local URL shown in the terminal.

### Build for Production

```bash
cd client
npm run build
```

## Available Routes

### Student Routes

- `/`
- `/course-list`
- `/course-list/:input`
- `/course/:id`
- `/my-enrollments`
- `/player/:courseId`
- `/loading/:path`

### Educator Routes

- `/educator`
- `/educator/add-course`
- `/educator/my-courses`
- `/educator/student-enrolled`

## Current Limitations

Since this is still a frontend-only project, a few things are intentionally incomplete right now:

- No backend or database yet
- Course data is currently dummy/mock data
- Enrollment actions are UI-based and not persisted
- Educator actions are not connected to real APIs
- Clerk authentication and Google sign-in work on the frontend, but there is no backend-connected user data flow yet

## Deployment

This project is deployed on Vercel.

If you want to deploy your own version:

1. Import the repo into Vercel
2. Add the required environment variables
3. Deploy from the repository root

The repo includes a `vercel.json` file to help Vercel build the app correctly from the `client` folder.

## Roadmap

Planned next improvements:

- Build the backend
- Connect a real database
- Add real course creation and editing
- Add real student enrollment logic
- Add authentication-protected dashboards
- Add payment integration
- Improve form validation and error handling
- Refactor and clean up early-stage code

## Why This Project Matters To Me

This was my first website project, so it represents a big learning milestone for me. While it is not finished yet, it helped me practice:

- structuring a larger React app
- working with routes and layouts
- building reusable UI components
- managing shared state
- deploying a real project

I plan to keep improving it as I learn more full-stack development.

## Feedback

If you have suggestions, ideas, or feedback, feel free to open an issue or share your thoughts. I am still learning, and improvements are always welcome.
