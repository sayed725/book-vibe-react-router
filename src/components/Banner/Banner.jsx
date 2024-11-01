import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse lg:py-[80px]">
        <img src={bannerImg} className="rounded-lg shadow-2xl" />
        <div className="py-[80px] text-center lg:text-start">
          <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>

          <button className="btn-lg rounded-xl text-white font-bold bg-[#23BE0A] mt-10">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
