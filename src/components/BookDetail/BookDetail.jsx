import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../Utiliti/addToDB";
import { AddToStoredWishList } from "../Utiliti/WishlistAdd";

const BookDetail = () => {
  const { bookId } = useParams();

  const data = useLoaderData();

  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);

  const {
    image,
    bookName,
    author,
    tags,
    review,
    category,
    publisher,
    rating,
    yearOfPublishing,
    totalPages,} = book

    const handleMarkAsRead =(id)=>{
        addToStoredReadList(id)
    }

    const handleMarkAsWishList = (book)=>{
        AddToStoredWishList(book)
    }


  return (
    <div className="flex flex-col lg:flex-row gap-[50px]">
     <div className="p-[75px] bg-slate-100 rounded-2xl w-full">
        <img className="sm:h-[560px] mx-auto rounded-xl" src={image}alt="" />
     </div>
     <div className="flex flex-col gap-4 w-full">
       <h2 className="text-4xl font-bold">{bookName}</h2>
       <p className="text-xl">By : {author}</p>
       <hr />
       
         <p className="text-xl">{category}</p>
        <hr />
       <p className="opacity-70"><span className="font-bold opacity-100">Review : </span>{review}</p>
       <div className="flex justify-start gap-5 items-center">
        <p className="font-bold">Tag  </p>
        {
             tags.map((tag,idx)=><button key={idx} className="btn-xs bg-green-100 rounded-xl text-green-600 font-semibold"># {tag}</button>)
         }
        </div>
        <hr />
       <div className="flex gap-[60px] items-center flex-grow">
       <div className="opacity-70 flex flex-col gap-4">
       <p>Number of Pages : </p>
        <p>Publisher : </p>
        <p>Year of Publishing : </p>
        <p>yearOfPublishing : </p>
       </div>
       <div className="flex flex-col gap-4">
        <p className="font-bold">{totalPages}</p>
        <p className="font-bold ">{publisher}</p>
        <p className="font-bold ">{yearOfPublishing}</p>
        <p className="font-bold">{rating}</p>
       </div>
       </div>
       <div className="flex gap-5 mt-5">
          <a onClick={()=>handleMarkAsRead(bookId)} className=" btn  ">Read</a>
          <a onClick={()=>handleMarkAsWishList(book)} className=" btn  bg-[#59C6D2] font-semibold text-white">Wishlist</a>
        </div>
     </div>
    </div>
  );
};

export default BookDetail;
