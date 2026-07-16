import { useEffect, useState } from "react";
import { toast } from "sonner";

const LinkResult = ({ inputValue }) => {
  const [shortenLink, setshortenLink] = useState("");
  
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue.length) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const res = await fetch("https://shrtr.top/api/v1/shorten", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url:inputValue }),
          });
          const data = await res.json();
          setshortenLink(data.short_url);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [inputValue]);

  if (loading) {
    return <p className="playwrite font-extralight mt-10">Loading...</p>
  }

  const copyLink = async () => {
    await navigator.clipboard.writeText(shortenLink);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };
  console.log(shortenLink);

  return (
    <div className="flex items-center justify-between gap-6 rounded-2xl bg-white/80 px-6 py-4 shadow-lg border-2 border-gray-300 mt-8 w-full max-w-2xl max-sm:flex-col max-sm:px-4">
      <p className="max-w-md truncate text-lg font-medium text-gray-800 max-sm:w-full">
        {shortenLink}
      </p>

      <button
        onClick={copyLink}
        className="rounded-full bg-black px-6 py-3 text-white transition-all active:scale-95 max-sm:w-1/2"
      >
        {copied ? "copied!" : "copy"}
      </button>
    </div>
  );
};

export default LinkResult;
