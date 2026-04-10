import React, { useContext } from "react";
import { BookContext } from "../../Context/Bookprovider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookCard from "../../Components/UI/BookCard";
import ReadListBook from "../../Components/BookList/ReadListBook";
import WishListBook from "../../Components/BookList/WishListBook";

const Books = () => {
  
  // console.log(storeBooks, wishListBooks, "Api context list in data");

  return (
    <div className="mx-auto w-[85%] py-10">
      
      

      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish Lish</Tab>
        </TabList>

        <TabPanel>
          <ReadListBook></ReadListBook>
        </TabPanel>
        <TabPanel>
          <WishListBook></WishListBook>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
