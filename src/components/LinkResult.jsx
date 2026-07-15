import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "sonner";

const LinkResult = () => {

  const [shortenLink, setSetshortenLink] = useState("Helskjhabdhibsahbdkhblo");
  const [Copy, setCopy] = useState(false);
  return (
    <div className="mt-16 flex items-center justify-between gap-6 rounded-2xl  bg-white/80 px-6 py-4 shadow-lg border-2 border-gray-300">
      <p className="max-w-md truncate text-lg font-medium text-gray-800">
        {shortenLink}
      </p>
      <CopyToClipboard
       text={shortenLink}
        onCopy={() => setCopy(true)}
        >
        <button
          onClick={() => toast.success("Copied to clipboard!")}
          className="rounded-full bg-black px-6 py-3 text-white transition-all  active:scale-95"
        >
          Copy
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkResult;
