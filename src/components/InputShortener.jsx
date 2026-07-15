import FogBackground from "./Fogbg";
import LinkResult from "./LinkResult";

const InputShortener = () => {
  return (
    <>
      <FogBackground />
      <div className="min-h-screen  flex flex-col items-center pt-32">
        <h1>
          <span className="lato italic text-8xl ">URL</span>{" "}
          <span className="playwrite text-7xl font-bold text-orange-600">
            Shortener
          </span>
        </h1>

        <div className="mt-20 flex">
          {/* input  */}
          <div className="mt-10 flex items-center rounded-full border-2 border-black bg-white px-3 py-2 shadow-sm">
            <input
              type="text"
              placeholder="Paste your long URL..."
              className="w-md bg-transparent px-4 text-lg outline-none placeholder:text-gray-500"
            />
            {/* button */}
            <button className="rounded-full bg-black px-7 py-3 text-white  active:scale-95 cursor-pointer">
              Shorten
            </button>
          </div>
        </div>
      <LinkResult />
      </div>
    </>
  );
};

export default InputShortener;
