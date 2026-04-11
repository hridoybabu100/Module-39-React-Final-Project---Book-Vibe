import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadListBook from "../../Components/BookList/ReadListBook";
import WishListBook from "../../Components/BookList/WishListBook";
import { useState } from "react";

const Books = () => {
  // console.log(storeBooks, wishListBooks, "Api context list in data");

  const [sortType , setSortType] = useState();
  // console.log("Sorting Type", sortType);
  

  return (
    <div className="mx-auto w-[85%] py-10">
      <div className="flex justify-center items-center py-4">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish Lish</Tab>
        </TabList>

        <TabPanel>
          <ReadListBook sortType={sortType}></ReadListBook>
        </TabPanel>
        <TabPanel>
          <WishListBook sortType={sortType}></WishListBook>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
