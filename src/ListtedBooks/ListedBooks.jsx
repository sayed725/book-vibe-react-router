import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../components/Utiliti/addToDB";
import Book from "../components/Book/Book";

const ListedBooks = () => {
    const [readList , setReadList] = useState([])

    const allBooks = useLoaderData()

    useEffect(()=>{
        const storedReadList = getStoredReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))

        const readBookList = allBooks.filter(book=> storedReadListInt.includes(book.bookId))
        setReadList(readBookList)

    },[])
  return (
    <div>
        <h3 className="text-4xl font-bold text-center pb-8">Books</h3>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>WishList Books</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {
                readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
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
