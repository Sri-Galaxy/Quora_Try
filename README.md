# 📝 Quora Try

## Overview

Quora Try is a web application inspired by the popular Q&A platform Quora. It allows users to create, edit, and view posts. This project is built using Node.js, Express.js, and EJS for server-side rendering.

---

## Features

- **Post Management**:
  - Create, edit, and delete posts.
  - View detailed post pages.
- **Interactive UI**:
  - Responsive design using CSS.
  - Dynamic templates with EJS.
- **Static Assets**:
  - Custom branding with logos and images.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
- **Frontend**:
  - EJS for server-side rendering
  - CSS for styling
- **Static Assets**:
  - Images for branding and design

---

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Sri-Galaxy/quora-try.git
cd quora-try
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
node index.js
```

The application will be available at:
- `http://localhost:3000`

---

## 📁 Project Structure
```
quora-try/
├── public/              # Static files
│   ├── brand.png        # Branding image
│   ├── logo.png         # Logo image
│   └── style.css        # CSS for styling
├── views/               # EJS templates
│   ├── edit.ejs         # Edit post page
│   ├── index.ejs        # Home page
│   ├── new.ejs          # Create post page
│   └── show.ejs         # View post page
├── index.js             # Main application file
├── package.json         # Project dependencies
├── package-lock.json    # Dependency lock file
└── README.md            # Project documentation
```
