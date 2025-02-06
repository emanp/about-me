import ConnectEmotiBit from "../assets/WaveBrigade/ConnectEmotiBit-WaveBrigade.png";

import PropTypes from "prop-types"


//Prop Type definitions
ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, //Image 
    gitHubLink: PropTypes.string.isRequired,
    alt: PropTypes.string

};


function ProjectCard(props) {
    return (
        <a
  href={props.gitHubLink}
  target="_blank"
  rel="noopener noreferrer"
  className="sm:pointer-events-none lg:pointer-events-auto "
>
  <div className="card lg:card-side bg-white shadow-xl lg:h-[200px] py-5 m-5 transition-transform transform duration-500 hover:scale-105 hover:shadow-2xl border-2 border-gray-200 shadow-[0_-2px_16px_rgba(0,0,0,0.1)]">
    <div className="rounded-2xl h-full">
      <figure className="h-full overflow-hidden aspect-[4/3]">
      {/* Resize for smaller screens and remove shadow on large screens*/}
        <img
          src={props.image}
          alt={"Album"}
          className="shadow-xl h-full object-contain rounded-2xl"
        />
      </figure>
    </div>

    <div className="card-body">
      <h2 className="card-title">
        <div className="w-full text-center md:text-start" >{props.title} </div></h2>
      <p className="text-lg pb-10 md:pb-5 text-center md:text-start">{props.description}</p>

      {/* Add resposive hover to the button */}
      <div className="card-actions items-center justify-center lg:hidden sm:justify-center">
        <button className="btn btn-primary">Check It Out!</button>
      </div>
    </div>
  </div>
</a>






    );
}

export default ProjectCard;