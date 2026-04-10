# 📚 Book Vibe - React Final Project

A modern and responsive book discovery platform built with **React 19**, **Vite**, **Tailwind CSS**, and **DaisyUI**. Users can browse books, view detailed information, and manage their reading list.

## ✨ Features

- **Responsive Design** – Mobile-first UI with Tailwind CSS + DaisyUI
- **Book Catalog** – Browse all available books with beautiful cards
- **Book Details** – Detailed view with reviews, ratings, tags, and metadata
- **Read & Wishlist** – Add books to "Read" list (with duplicate prevention)
- **React Router v7** – Smooth navigation between pages
- **Error Handling** – Custom 404 error page
- **Modern React** – Uses `use()` for promise-based data fetching

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4 + DaisyUI
- **Icons**: React Icons
- **Linting**: ESLint

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v20 or higher) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-vibe.git
   cd book-vibe

Install dependencies:Bashnpm install
Start the development server:Bashnpm run dev
Open your browser and go to:texthttp://localhost:5173

Available Scripts



ScriptDescriptionnpm run devStart development servernpm run buildBuild for productionnpm run previewPreview production build locallynpm run lintRun ESLint
📁 Project Structure
textBook-Vibe/
├── public/
│   └── Data.json                 # Book database
├── src/
│   ├── Components/
│   ├── Pages/
│   ├── Layout/
│   ├── Routes/
│   ├── assets/
│   └── main.jsx
├── vite.config.js
├── tailwind.config.js (if needed)
└── package.json
📖 Data Source
Books data is stored in public/Data.json. Each book contains:

bookId, bookName, author
image, review, rating
totalPages, category, tags
publisher, yearOfPublishing

🎨 UI Highlights

Clean hero banner with call-to-action
Responsive book grid (1–3 columns)
Beautiful book detail page
Green-themed "Book Vibe" branding
Hover effects and smooth transitions

🧪 Future Enhancements (Ideas)

LocalStorage persistence for Read/Wishlist
Search and filter functionality
Sort by rating, pages, or year
Dark mode support
Reading progress tracker

📄 License
This project is for educational purposes (Module 39 - React Final Project).

Made with ❤️ using React & Tailwind