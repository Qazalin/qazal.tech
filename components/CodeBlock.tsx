import { MDXCustomComponent } from "types";

export const CodeBlock: MDXCustomComponent = (props) => {
  return (
    <div className="w-full relative">
      <pre
        className="bg-[#1A1B25] shadow-lg shadow-indigo-500/30 dark:shadow-indigo-400/5"
        {...props}
      ></pre>
    </div>
  );
};

// future:
/*
      <button className="absolute right-2 top-0 h-full flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-zinc-500 hover:fill-zinc-100 transition-colors w-5"
          strokeWidth="0"
          viewBox="0 0 24 24"
        >
          <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z"></path>
        </svg>
      </button>
*/
