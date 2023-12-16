import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    
    <button
      type="submit"
       disabled={pending}
      className="group h-[52px] mt-4 w-[150px] bg-gray-800 text-white rounded-full outline-none transition-all flex items-center justify-center gap-3 hover:bg-gray-900 hover:scale-110 disabled:scale-100 disabled:opacity-70 dark:bg-[#161D2D] dark:hover:bg-gray-900 dark:border dark:border-white/80  "
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white " ></div>
      ) : (
        <>
          Submit
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
         group-hover:translate-x-1
         group-hover:-translate-y-1
       "
          />{" "}
        </>
      )}
    </button>
  );
}

export default SubmitBtn;
