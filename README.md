# 📚 Book Vibe - React Final Project
A sleek and modern book discovery platform built with **React 19 + Vite + Tailwind CSS**.

Discover, explore, and keep track of your favorite books in one beautiful interface.

![Book Vibe Banner](https://i.ibb.co.com/989qMRW/42844155.jpg)

## ✨ Features

- ⚡ Built with latest **React 19** & **Vite**
- 🎨 Modern UI with **Tailwind CSS v4** + **DaisyUI**
- 📚 Browse beautiful book cards
- 🔍 Detailed book information with reviews & metadata
- 📖 Add books to **Read List** (with duplicate protection)
- 🛠️ Fully responsive design
- 🚀 Fast performance with modern React patterns (`use()` for data fetching)
- 404 Error page included

## 🛠️ Tech Stack

| Technology       | Version    |
|------------------|------------|
| React            | 19.2.4     |
| Vite             | 8.0.4      |
| Tailwind CSS     | 4.2.2      |
| DaisyUI          | 5.5.19     |
| React Router     | 7.14.0     |
| React Icons      | 5.6.0      |

## 🚀 Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/book-vibe.git
cd book-vibe
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## 📸 Preview

**Home Page**  
Beautiful hero section + book grid with hover effects.

**Book Details**  
Rich information including review, tags, rating, publisher, and pages.

## 📁 Project Structure

```bash
src/
├── Components/
│   ├── Hero/
│   ├── Navbar/
│   ├── UI/BookCard.jsx
│   └── Homepages/Banner/
├── Pages/
│   ├── Home-pages/HomePages.jsx
│   ├── Book/BookDetails.jsx
│   └── ErrorPage/ErrorPage.jsx
├── Layout/Mainlayout.jsx
├── Routes/Routes.jsx
├── assets/
└── main.jsx
```

## 📊 Data

All book data is stored in `public/Data.json` (9 sample books included).

Each book includes:
- Title, Author, Image
- Review, Rating, Category
- Tags, Total Pages, Publisher, Year

## 🧩 Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🎯 Future Improvements

- [ ] Persist Read List using LocalStorage
- [ ] Wishlist functionality
- [ ] Search & Filter books
- [ ] Dark mode toggle
- [ ] Reading progress tracker

---

**Made with ❤️ for learning modern React**

---

### How to use:

1. Replace your current `README.md` with the content above.
2. (Optional) Change the GitHub link to your actual repo.

Would you like me to also generate a **fancy version with badges**, or a **minimal one-liner style**? Just say the word!