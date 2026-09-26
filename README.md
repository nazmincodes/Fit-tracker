# FitLog - Workout Library

FitLog is a modern workout tracking web application built with Next.js. It allows users to explore different workouts, view workout details, add exercises to today's plan, save workouts for later, and track their workout progress.

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- REST API
- Next.js App Router
- Context API
- Git & GitHub

---

## Features

### 1. Workout Library
- Displays workouts fetched from the FitLog API.
- Responsive workout card grid.
- Shows workout image, name, category, equipment, duration, calories, and rating.
- Users can click a workout to view its details.

### 2. Workout Details
- Displays detailed workout information.
- Shows workout image, description, muscle groups, equipment, difficulty, sets, reps, duration, calories, and rating.
- Includes step-by-step workout instructions.
- Users can add a workout to today's plan.
- Users can save a workout for later.

### 3. My Plan
- Shows all workouts added to today's plan.
- Displays total exercises, minutes, and calories.
- Users can view workout details.
- Users can mark a workout as done.
- Users can remove workouts from the plan.

### 4. Saved Workouts
- Users can save workouts for later.
- Saved workouts are displayed in the Saved tab.
- Users can view details or remove saved workouts.

### 5. Toast Notifications
- Shows notifications when a workout is added.
- Shows notifications when a workout is saved.
- Shows notifications when a workout is removed.
- Shows a notification when a workout is marked as done.

### 6. Responsive Design
- Fully responsive for mobile, tablet, and desktop screens.
- Uses Tailwind CSS for responsive layouts and styling.

### 7. Dynamic Workout Routes
- Each workout has its own dynamic details page.
- Workout details are accessed using a dynamic route.

---

## API

FitLog uses the following API to load workout data:

```text
https://api.abcz.workers.dev/api/fitlog
