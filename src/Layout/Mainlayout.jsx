import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import HomePages from '../Pages/Home-pages/HomePages';
import Book from '../Pages/Book/Book';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Book></Book>
            <Outlet></Outlet>

        </div>
    );
};

export default Mainlayout;