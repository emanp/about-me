import { Avatar, Button } from "@nextui-org/react";
import SlideshowAuto from "../Components/SlideshowAuto.jsx" 
import whodis from "../assets/svg/whodis.jpg"
import { useNavigate } from "react-router-dom";

export default function HomePage()
{
    const navigateTo = useNavigate();

    
    return (
        <div className="bg-white w-<7/10> text-slate-950 m-5 p-5 pb-20 md:pb-0 text-justify h-auto min-h-screen m-auto max-w-auto box-border overflow-hidden">
            <div className="py-5 flex items-center justify-between relative"> 
                <div>
                    <h1 className="text-left text-3xl sm:text-5xl ">Eman Pelayo</h1>
                    <h2>Full Stack Developer | Musician</h2>
                </div>
                
                <Avatar
                    className="transition-transform absolute right-2 sm:right-10 h-20 w-20 rounded-full"
                    color="default"
                    size="lg"
                    src={whodis}
                />
            </div>

            <hr className="border-t-8 border-black mb-5"/>
            
            <div> 
                <h1 className="text-3xl my-5">Biography</h1>
                <p className="my-5">Based in Reno, Nevada, I am a fourth-year Computer Science student at the University of Nevada, Reno who is passionate about creating software and music that not only improve people’s lives, but is also accessible to everybody. When I am not analyzing music, you will often find me learning new technologies or working on building projects that help people in their daily lives. Always open to any opportunities or inquiries. Feel free to contact me for any development help!</p>
                    {/* Based in Reno, NV, I’m a fourth-year Computer Science student passionate about creating engaging and helpful applications with clean, intuitive user interfaces. With experience in Game Development, Embedded Systems, and Full-Stack Web Development, I am dedicated to building innovative solutions that improve everyday life. Always open to new opportunities and inquiries. */}

                <h1 className="text-3xl mb-5">Technical Specs</h1>
                <div className="w-1/2 pl-1 justify-start">
                    <SlideshowAuto />
                </div>

                <p className="my-5"> Throughout my time at the University of Nevada, Reno, I have explored many essential areas of development, including DevOps, Embedded Systems, and Web Development. I recently discovered a strong passion for Web Development, as I enjoy the creative problem-solving involved in building intuitive and accessible user experiences. Through my projects, I have gained experience in Database Management and Design, Documentation, Algorithm design, and Design Patterns. I am set to graduate in May 2025 and look forward to the growth and opportunities ahead. I am currently working to improve my skills in web and software development while pursuing my passion for music. I am always open to any opportunities or inquiries—let's connect!</p>
            </div>

            <Button variant="flat" color="primary" className="mt-5 pg-primary/30" onPress={() => navigateTo("/Portfolio")}>View My Work</Button>
        </div>
    )
}