
import BookImg from '../../../assets/hero_img.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[60vh] my-10 w-[85%] rounded-2xl mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
        <img
          src={BookImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn bg-[#23BE0A] text-white font-bold mt-5">View the list</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;