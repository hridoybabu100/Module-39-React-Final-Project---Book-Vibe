**# 📚 Book Vibe - React Final Project**

A sleek and modern book discovery platform built with **React 19 + Vite + Tailwind CSS + DaisyUI**.

Discover, explore, add books to your **Read List** or **Wishlist**, and track your favorite reads in a beautiful, responsive interface.

![Book Vibe Banner](https://i.ibb.co.com/989qMRW/42844155.jpg)

## ✨ Features

- ⚡ Built with the **latest React 19** (using `use()` for data fetching) + Vite 8
- 🎨 Modern, clean UI with **Tailwind CSS v4** + **DaisyUI**
- 📚 Beautiful book grid with hover effects and cards
- 🔍 Rich **Book Details** page with reviews, tags, rating, publisher, pages, and year
- 📖 **Read List** & **Wishlist** functionality (with duplicate protection)
- 🛠️ Fully responsive design (mobile, tablet, desktop)
- 🚀 Fast performance with modern React patterns
- 📌 Toast notifications for add/remove feedback
- 404 Error page included

## 🛠️ Tech Stack

| Technology         | Version    |
|--------------------|------------|
| React              | 19.2.4     |
| Vite               | 8.0.4      |
| Tailwind CSS       | 4.2.2      |
| DaisyUI            | 5.5.19     |
| React Router       | 7.14.0     |
| React Icons        | 5.6.0      |
| React Tabs         | 6.1.1      |
| React Toastify     | 11.0.5     |

## 🚀 Quick Start

### 1. Clone or Download the Project
You already have the project folder: `Module-39-React-Final-Project---Book-Vibe-main`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the app.

### Available Scripts
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 📁 Project Structure

```bash
src/
├── Components/
│   ├── BookList/
│   │   ├── ReadListBook.jsx
│   │   └── WishListBook.jsx
│   ├── Hero/
│   ├── Navbar/
│   ├── UI/
│   │   └── BookCard.jsx
│   └── Homepages/Banner/
│       ├── Banner.jsx
│       └── AllBooks.jsx
├── Context/
│   └── Bookprovider.jsx
├── Pages/
│   ├── Home-pages/HomePages.jsx
│   ├── BookDetails/BookDetails.jsx
│   ├── Books/Books.jsx
│   └── ErrorPage/ErrorPage.jsx
├── Layout/
│   └── Mainlayout.jsx
├── Routes/
│   └── Routes.jsx
├── assets/
└── main.jsx
```

Data is stored in `public/Data.json` (9 sample books with rich metadata).

## 📊 Sample Books Include
- The Great Gatsby
- To Kill a Mockingbird
- 1984
- The Catcher in the Rye
- Pride and Prejudice
- The Hobbit
- Harry Potter and the Sorcerer's Stone
- The Alchemist
- The Girl on the Train

Each book contains: title, author, image, review, rating, category, tags, pages, publisher, and year.

## 🎯 How to Use

1. **Home Page** → Beautiful banner + grid of all books
2. Click on any book card → Go to detailed view
3. In Book Details:
   - Click **"Read"** to add to Read List
   - Click **"Wishlist"** to add to Wishlist
4. Go to **"Listed Books"** in navbar → Switch between Read List and Wishlist using tabs
5. Duplicate protection + success/error toast notifications are built-in

## Future Improvements (Planned)
- [ ] Persist Read List & Wishlist using LocalStorage
- [ ] Search & Filter functionality
- [ ] Dark mode toggle
- [ ] Reading progress tracker
- [ ] Sorting options (by rating, pages, year)

## Made with ❤️ for Learning Modern React

**Best Practices Used:**
- React Context for global state (Read List + Wishlist)
- React Router v7 for navigation
- Modern React 19 patterns (`use()` for promises)
- Tailwind CSS v4 with DaisyUI for fast styling
- Toastify for user feedback
- Fully responsive & accessible design

---

**Project is ready to run!**  
Just run `npm install` followed by `npm run dev`.

Would you like me to also generate:
- A version with badges (stars, license, etc.)?
- Deployment instructions (Vercel/Netlify)?
- Or any specific improvements to the code?

Let me know!