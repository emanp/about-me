
import { Button, Image } from "@nextui-org/react"
import PropTypes from 'prop-types';


//Prop Type definitions
Project.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    demoType: PropTypes.oneOf(["video", "image", "element", "Video", "Image", "Element"]).isRequired,
    demoMedia: PropTypes.oneOfType([
        PropTypes.string, //Video Link //(YouTube Embed Link)
        PropTypes.element //Image Component
    ]).isRequired,
    GitHubLink: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string),
    hardware: PropTypes.arrayOf(PropTypes.string)
};



export default function Project(props)
{
    const demoType = props.demoType;
    console.log("demo type: " + demoType);
    const isImage = (demoType === "image");
    const isElement = demoType === "element";


    function renderDemoMedia() {
            if (isElement) {
                console.log("isElement");
                // Assume it's a React component and render it directly
                return (
                    props.demoMedia
                );
            }
            if (isImage) {
                console.log("isImage");
                // Render Image if it's a valid image URL
                return (
                    <Image
                        autoResize
                        quality={100}
                        src={props.demoMedia}
                        alt={`${props.title} demo`}
                        className="rounded-lg"
                    />
                );
            } else {
                console.log("isVideo");
                // Assume it's a YouTube video link and render it
                return (
                    <div className="bg-red-500 w-4/5 mx-auto aspect-video">
                        <iframe
                            className="w-full h-full border-none"
                            src={`${props.demoMedia}?enablejsapi=1`}
                            title="YouTube video player"
                            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                );
            
        }
    }
    


    return (
        <div className="bg-blue-500 w-4/5 border-black border-5 text-slate-50 rounded-3xl m-5 p-5">
         <h1 className="text-start text-2xl font-bold mb-1">{props.title}</h1>
            <hr className="border-slate-50 border-2 mb-5"/>
            <p className="text-justify mb-5">{props.description}</p>
            <p className="text-justify"> Tech Stack: {props.techStack.join(", ")}</p> 
            {props.hardware ? <p className="text-justify"> Hardware: {props.hardware.join(", ")} </p> : null}
            {/* fix for mobile devices */}

            <div className="w-4/5 mx-auto justify-center rounded-lg m-5"> 
            {/* Change height -- just looks weird. Disregard if future me disagrees */}    
                {renderDemoMedia()}
            </div>

            <div className="flex justify-center">
                <Button className="border-white border-1 text-white bg-black" as="a" href={props.GitHubLink} target="_blank" rel="noopener noreferrer" color="default" variant="flat"> GitHub </Button>
            </div> 
    </div>
    );
}

