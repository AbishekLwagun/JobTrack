# 📱 JobTrack

> A React Native mobile application for managing and tracking software engineering job applications.

JobTrack is a personal job application command center designed to make it easier to track applications, monitor their progress, and keep important job information organized in one place.

The project is being developed as a real-world software engineering project, with the goal of progressing from a mobile application into a complete full-stack system.

---

## 📸 Preview

<!-- Add screenshots here -->

<p align="center">
  <img src="docs/images/home.png" width="250" alt="JobTrack Home Screen">
  <img src="docs/images/job-details.png" width="250" alt="Job Details Screen">
  <img src="docs/images/add-job.png" width="250" alt="Add Application Screen">
</p>

> Screenshots will be updated as the application evolves.

---

## ✨ Current Features

### 📊 Dashboard

The home screen provides an overview of tracked applications, including application statistics and job cards.

### ➕ Add Applications

Create a new job application with information such as:

- Company
- Position
- Location
- Application status
- Job posting URL
- Job description
- Notes
- Follow-up date
- Interview date

### 🔎 Search

Search applications by:

- Company
- Job position

### 🎯 Filter

Filter applications by status:

- All
- Applied
- Interview
- Rejected
- Offer

### ↕️ Sorting

Sort applications by:

- Newest
- Oldest

### 📄 Job Details

View the complete information associated with an application.

### ✏️ Edit Applications

Update an existing application without losing its associated information.

### 🗑️ Delete Applications

Delete applications with a confirmation dialog to prevent accidental deletion.

### 📭 Empty States

When a search or filter produces no results, JobTrack displays a helpful message instead of showing a blank screen.

---

# 🧭 Application Flow

The current application flow is:

```text
Welcome
   │
   ▼
Home Dashboard
   │
   ├── Search
   ├── Filter
   ├── Sort
   │
   ├── Add Application
   │
   └── Select Application
            │
            ▼
       Job Details
            │
       ┌────┴────┐
       ▼         ▼
     Edit      Delete
       │         │
       ▼         ▼
   Save Changes  Confirm
```
🔐 Security

Sensitive configuration files (node_modules/, .gradle/, local.properties) are excluded via .gitignore. Credentials and secrets should never be committed to source control.

📦 Download

An installable Android APK will be available in future releases. Until then, run JobTrack directly from source using the local setup guide above.

🌐 Contact & Developer Info

JobTrack is part of an ongoing software engineering portfolio.

Developer: Abishek Lwagun

Website: abisheklwagun.dev

Source Code: GitHub Repository

JobTrack • Built with React Native & TypeScript

© 2026 Alogh Organization. All rights reserved.
