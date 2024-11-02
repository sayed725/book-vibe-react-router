import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../components/Utiliti/addToDB";
import Book from "../components/Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('')

  const handleSort = sortType =>{
    setSort(sortType)

    if (sortType === 'No of Pages'){
        const sortedReadList = [...readList].sort((a,b)=> a.totalPages - b.totalPages)
        setReadList(sortedReadList)
    }
    if (sortType === 'Ratings'){
        const sortedReadList = [...readList].sort((a,b)=> b.rating - a.rating)
        setReadList(sortedReadList)
    }
    }
  

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
  return (
    <div>
      <h3 className="text-4xl font-bold text-center pb-8">Books</h3>

      <div className="dropdown max-w-fit flex mx-auto pb-10">
        <div tabIndex={0} role="button" className="btn m-1">
         {
            sort? `Sort By ${sort}`: 'Sort By' 
         }
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={()=> handleSort('Ratings')}>
            <a>Ratings</a>
          </li>
          <li onClick={()=> handleSort('No of Pages')}>
            <a>No of Pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {readList.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
