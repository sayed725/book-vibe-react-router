import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books , setBooks] = useState([])

useEffect(()=>{
    fetch('./booksData.json')
    .then(res => res.json())
    .then(data => setBooks(data))
},[])


    return (
        <div className="pt-6 lg:pt-[80px]">
            <h2 className="text-4xl font-bold text-center pb-8">Books : {books.length}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;