import { useState } from "react";
import { toast } from "sonner";

const LinkResult = () => {
  const [shortenLink, setSetshortenLink] = useState("Helskjhabdhibsahbdkhblo");
  const [copied, setCopied] = useState(false);

  //   toast function to copy
  const copyLink = async () => {
    await navigator.clipboard.writeText(shortenLink);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-16 flex items-center justify-between gap-6 rounded-2xl  bg-white/80 px-6 py-4 shadow-lg border-2 border-gray-300">
      <p className="max-w-md truncate text-lg font-medium text-gray-800">
        {shortenLink}
      </p>

      <button
        onClick={copyLink}
        className="rounded-full bg-black px-6 py-3 text-white transition-all  active:scale-95"
      >
        {copied ? "copied!" : "copy"}
      </button>
    </div>
  );
};

export default LinkResult;
