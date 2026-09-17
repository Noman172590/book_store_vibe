import { ProjectBookOne } from "../../../assets";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 items-center px-30 py-34 gap-20 ">
      <div >
        <p className="font-bold text-[44px] font-playfair">
          Books to freshen up your bookshelf
        </p>
        <button
          className="bg-green rounded-xl mt-12 text-white px-4 py-5 font-bold text-xl text-center "
          title="View The List"
        >
          View The List
        </button>
      </div>
      <img  src={ProjectBookOne} alt="" />
    </div>
  );
};

export default HeroSection;
