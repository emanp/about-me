import ContactForm from "../Components/ContactForm";
import mailIcon from "../assets/svg/mail-icon.svg";


export default function ContactPage()
{
    return (
        <div className="bg-white text-slate-950 items-center m-5 p-5 pb-20 md:pb-0 text-justify h-auto min-h-screen m-auto max-w-auto box-border overflow-hidden">
            <div className="bg-white-300">
                <div className="w-full px-4">
                    <div className="bg-white text-center w-full mb-12 lg:mb-0">
                        <h2 className="mb-6 text-[32px] font-bold text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white"> Get in touch with me! </h2>
                            <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6" >
                            I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                            </p>
                    </div>

                    <div className="bg-white-100 flex mb-8 items-center justify-center w-full">
                        {/* was bg-primary/5 */}
                        <div className="bg-primary/30 flex h-[60px] w-[60px] max-w-[60px] items-center justify-center overflow-hidden rounded text-primary sm:max-w-[70px]">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 4.7998H3.99998C2.29998 4.7998 0.849976 6.1998 0.849976 7.9498V24.1498C0.849976 25.8498 2.24998 27.2998 3.99998 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.84998 7.0498C3.89998 7.0498 3.94998 7.0498 3.99998 7.0498H28ZM28 24.9498H3.99998C3.49998 24.9498 3.09998 24.5498 3.09998 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z" fill="currentColor"/></svg>
                        </div>
                        <div className="h-full text-justify ml-2 sm:ml-4">
                            <h4 className="mb-1 text-xl font-bold text-dark dark:text-white"> Email Address</h4>
                            <p className="text-base text-body-color dark:text-dark-6">eman-pelayo@outlook.com </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex align-items-center justify-center">
                <ContactForm />
            </div>
            {/* <div className="w-full px-4">
                <div className="bg-indigo-100 w-full rounded-lg bg-white p-8 shadow-lg sm:p-12 dark:bg-dark-2">
                    <form>
                        <div className="mb-6">
                            <input type="text" placeholder='Ex. "John Doe"' className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"/>
                        </div>
                        <div className="mb-6">
                            <input type="email" placeholder="email@domain.com" className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"/>
                        </div>
                        <div className="mb-6">
                            <input type="text" placeholder="Ex. +1 (234) 567-8910" className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"/>
                        </div>
                        <div className="mb-6">
                            <textarea rows="6" placeholder="Your Message"className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"></textarea>
                        </div>
                        <button type="submit" className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90">Send Message</button>
                    </form>
                </div>
            </div> */}
        </div>
    )
}