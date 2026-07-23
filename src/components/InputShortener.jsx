import { useState } from "react";
import { toast } from "sonner";
import FogBackground from "./Fogbg";
const InputShortener = ({ setInputValue, setSubmitted }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    const trimmed = value.trim();

    if (!trimmed) {
      toast.error("Please enter a URL.");
      setSubmitted(false);
      return;
    }

    let url;
    try {
      url = new URL(trimmed);
    } catch {
      toast.error("Please enter a valid URL.");
      setSubmitted(false);
      return;
    }

    if (url.hostname.includes("shrtr.top")) {
      toast.error("This URL is already shortened.");
      setSubmitted(false);
      return;
    }

    setInputValue(trimmed);
    setSubmitted(true);
    setValue("");
  };

  return (
    <>
      <FogBackground />
      <div className="relative flex flex-col items-center mt-30 px-4">
        <h1 className="text-center">
          <span className="lato font-black text-8xl max-sm:text-5xl">SHORTY</span>
          <span className="font-black text-8xl max-sm:text-5xl text-orange-600">.</span>
        </h1>
        <p className="inter font-extralight text-base sm:text-lg text-gray-400 tracking-wide mt-4">
          Shorten. Share. Simplify.
        </p>
        
        <div className="mt-16 flex w-full justify-center max-sm:mt-10 ">
          <div className="flex items-center gap-12 rounded-full border-2 border-black bg-white px-5 py-2 shadow-sm w-full max-w-2xl  max-sm:rounded-2xl max-sm:flex-col max-sm:px-5 max-sm:py-2">
            <input
              type="text"
              placeholder="Paste your long URL..."
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="flex-1 bg-transparent px-4 text-xl outline-none placeholder:text-gray-500 max-sm:w-full max-sm:px-2 max-sm:py-2 max-sm:text-base"
            />
            <button
              onClick={handleClick}
              className="rounded-full bg-black px-8 py-3 text-white text-lg active:scale-95 cursor-pointer max-sm:w-full max-sm:py-2"
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
