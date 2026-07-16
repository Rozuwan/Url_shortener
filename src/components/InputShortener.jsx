import { useState } from "react";
import FogBackground from "./Fogbg";
const InputShortener = ({ setInputValue, setSubmitted }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setSubmitted(true);
    setValue("");
  };

  return (
    <>
      <FogBackground />
      <div className="relative flex flex-col items-center mt-30 px-4">
        <h1 className="text-center">
          <span className="lato italic text-8xl max-sm:text-6xl">URL</span>{" "}
          <span className="playwrite text-7xl font-bold text-orange-600 max-sm:text-5xl">
            Shortener
          </span>
        </h1>

        <div className="mt-20 flex w-full justify-center max-sm:mt-12">
          <div className="flex items-center rounded-full border-2 border-black bg-white px-3 py-2 shadow-sm w-full max-w-2xl max-sm:rounded-2xl max-sm:flex-col max-sm:px-4 max-sm:py-3">
            <input
              type="text"
              placeholder="Paste your long URL..."
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="flex-1 bg-transparent px-4 text-lg outline-none placeholder:text-gray-500 max-sm:w-full max-sm:px-2 max-sm:py-2"
            />
            <button
              onClick={handleClick}
              className="rounded-full bg-black px-7 py-3 text-white active:scale-95 cursor-pointer max-sm:w-1/2"
            >
              Shorten
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputShortener;
