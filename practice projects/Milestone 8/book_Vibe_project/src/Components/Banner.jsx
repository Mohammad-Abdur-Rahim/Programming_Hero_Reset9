import bannerImg from "../assets/books.jpg";
const Banner = () => {
  return (
    <div className="hero bg-[#1313130D]  py-14 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-60">
        <img src={bannerImg} className="max-w-xs lg:max-w-lg rounded-lg shadow-2xl" />
        <div className="text-center lg:text-start">
          <h1 className="text-4xl lg:text-5xl font-bold pt-8 ">Books to freshen <br /> up your bookshelf</h1> <br />
          <button className="btn btn-xl bg-[#23BE0A] text-white rounded-xl ">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
