import React from "react";

export default function Footer() {
  return (
    <footer className="pb-8  md:mx-4 px-4 rounded-t-lg ft text-center dark:bg-opacity-60 text-gray-500 dark:text-black/90">
 
      <hr className="mb-8 border-gray-400/90" />

        
      <small className=" mb-2 block text-xs">
        &copy; 2030 Ricardo. All rights reserved.
      </small>
      <h4 className=" mb-3 font-medium text-sm">Built By: <span className="font-semibold text-base">Tahreem Zafar.</span></h4>
      <p className="text-xs px-2 max-w-4xl sm:px-4">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
      

    </footer>
  );
}