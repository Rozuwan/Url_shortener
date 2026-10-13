import { useState } from "react";
import InputShortener from "./components/InputShortener";
import { Toaster } from "sonner";
import LinkResult from "./components/LinkResult";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="flex h-dvh flex-col items-center justify-center overflow-hidden px-4 pb-24">
      <Toaster position="top-right" richColors />

      <InputShortener setInputValue={setInputValue} setSubmitted={setSubmitted} />

      {submitted && <LinkResult inputValue={inputValue} />}
    </div>
  );
};

export default App;
