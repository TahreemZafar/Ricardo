"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) => {

     const message = formData.get('message');
     const senderEmail = formData.get('senderEmail');

     if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid Sender Email!"
        }
     }

     if (!validateString(message, 5000)) {
        return {
            error: "Invalid Message!"
        }
     }


    console.log("Running on Server")
    console.log(formData.get("senderEmail"))
    console.log(formData.get("message"))


    let data;
    
    try {

         data = await resend.emails.send({
            from: 'Contact Form<onboarding@resend.dev>',
            to: 'tahreem100e@gmail.com',
            subject: 'Message from Ricardo contact form.',
            text: message as string,
            reply_to: senderEmail as string,

            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        })
    
       

        

        
    } catch (error: unknown) {

      return {
         error: getErrorMessage(error)
      }

    }

    return {
        data,
    }

 
}