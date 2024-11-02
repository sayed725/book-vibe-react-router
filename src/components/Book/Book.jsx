import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
    image,
    bookName,
    author,
    tags,
    category,
    totalPages,
    rating,
  } = book;
  return (
   <Link to={`/books/${bookId}`}> <div>
   <div className="card bg-base-100 shadow-xl border-2">
     <figure className="pt-6">
       <img
         src={image}
         alt="Shoes"
         className=" rounded-xl h-[240px] py-8 px-[96px] border-2 bg-slate-100"
       />
     </figure>
     <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-start gap-5">
        {
             tags.map((tag,idx)=><button key={idx} className="btn-xs bg-green-100 rounded-xl text-green-600 font-semibold">{tag}</button>)
         }
        </div>
       <h2 className="text-2xl font-bold">{bookName}</h2>
       <p>By : {author}</p>
       <hr className="border-b-2 border-dashed" />
       <div className="flex justify-between">
         <p>{category}</p>
         <p> Total Pages:{totalPages}</p>
         <p className="flex items-center gap-2">{rating} <span className="text-xl"> <CiStar /></span></p>
       </div>
     </div>
   </div>
 </div></Link>
  );
};

export default Book;
