import { Form, Input, Button, Textarea} from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';
import envVarsAreSet from "../Helpers/envChecker";
//TODO needs styling

export default function ContactForm()
{
	const navigateTo = useNavigate();
	const [isSubmitted, setIsSubmitted] = useState(false);
	const successMessage = "Thanks! I'll get back to you soon!";
	const errorMessage = "Oops! An error occurred... Please try again.";
	const [userFeedback, setUserFeedback] = useState("");

    function sendEmail(e)
    {
      e.preventDefault();
      emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_KEY, import.meta.env.VITE_EMAILJS_TEMPLATE_KEY, e.target, { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY})
        .then(
          (result) => {
			if (result.text.startsWith("OK"))
			{
              console.log("Email sent successfully:", result.text);
			  setUserFeedback(successMessage);
			}},
          (error) => {
			setUserFeedback(errorMessage);
            console.error("Error sending email:", error);
			
            if (error.text) 
            {
              console.error("Error message:", error.text);
            } 
            else 
            {
              console.error("Error details:", error);
            }
          });
    }

    function onSubmit(e)
    {
        e.preventDefault();
		    setIsSubmitted(true);

        // Check if environment variables are loaded correctly and send email if set
        if (envVarsAreSet())
        {
            sendEmail(e);
        }

		//redirect to home page
        navigateTo("/");

    }


	return (
		<div className="w-full flex items-center justify-center">
      <div className="bg-primary/30 w-4/5 sm:w-3/5 rounded-lg shadow-lg dark:bg-dark-2 p-8 ">
        <Form className="rounded-lg" onSubmit={onSubmit} validationBehavior="native">
          <Input className="" id="name" name="from_name" isRequired={true} label="Name" placeholder="John Doe" />
          <Input name="email_from" isRequired={true} type="email" label="Email" placeholder="example@domain.com" />
          <Textarea name="message" isRequired={true} label="Message" maxRows={5} placeholder="Enter your message" />
          {isSubmitted ? <p>{userFeedback}</p> : <div className="pt-4 w-full flex justify-center"><Button className="bg-gray-200" type="submit" variant="bordered">Submit</Button> </div>}
        </Form>
      </div>
		</div>
	)
}