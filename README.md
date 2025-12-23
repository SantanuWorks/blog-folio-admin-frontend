<div align="center">
  <img width="180" height="180" alt="apple-touch-icon" align="center" src="https://github.com/user-attachments/assets/4fb08785-010f-4199-b236-51ae17de0ac5" />
</div>
<div align="center">
    
# BlogFolio Admin Dashboard
### A unified admin site to manage contents for blogging and personal portfolio
</div>

<br>

A modern **admin dashboard frontend** for managing blog posts and portfolio projects.  
Built with **React** and designed to consume a **Laravel REST API**.

This dashboard is intended for authenticated administrators only and focuses on content management, analytics, and workflow efficiency.

## Features

- Authentication (JWT / Sanctum-ready)
- Blog post management (create, edit, delete, publish)
- Portfolio project management
- Dashboard overview (stats & summaries)
- User & role management (optional)
- Search, filter, and pagination
- Fully responsive admin UI
- Fast development with Vite

## Tech Stack

### Frontend
- **React.js**
- **Vite**
- **TypeScript**
- **React Router**
- **Axios**
- **TanStack Query (React Query)**

### Backend (External)
- **Laravel REST API**
- Authentication via **Laravel Sanctum / JWT**

## Project Structure

```text
src/
├── api/            # Axios instances & API calls
├── assets/         # Static assets
├── components/     # Reusable UI components
├── layouts/        # App & dashboard layouts
├── pages/          # Route-based pages
├── routes/         # React Router configuration
├── hooks/          # Custom hooks
├── context/        # Auth & global state
├── utils/          # Helper functions
├── types/          # TypeScript types
└── main.tsx        # App entry point
