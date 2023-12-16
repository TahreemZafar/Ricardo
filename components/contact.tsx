"use client";

import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

function Contact() {


  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-32 mb-20 sm:mb-36 w-[min(100%,38rem)] "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-800 -mt-5 dark:text-white/80 mx-2 text-center">
        Please contact me directly at{" "}
        <a
          className="underline font-medium"
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tahreem100m@gmail.com&sub=Regarding&body=message
"
        >
          example@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black " action={async (FormData) => {
            const { data, error } = await sendEmail(FormData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success('Email sent Successfully!')

         }
         }>

        <input
          placeholder="Your Email..."
          name="senderEmail"
          maxLength={500}
          type="email"
          required
          className=" p-4 h-14 border border-gray-400 !outline-2 outline-gray-500/70 dark:bg-white/70 dark:focus:bg-white dark:focus:outline dark:outline-  placeholder:text-gray-600 transition-all "
        />
        <textarea
          placeholder="Your Message..."
          name="message"
          maxLength={5000}
          required
          className="h-52 my-3 border p-4 border-gray-400 !outline-2 outline-gray-500/70 dark:bg-white/70  dark:focus:bg-white dark:focus:outline  placeholder:text-gray-600 transition-all "
        />

         <SubmitBtn />
        
      </form>
    </motion.section>
  );
}

export default Contact;
