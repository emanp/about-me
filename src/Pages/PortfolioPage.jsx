import ProjectCard from "../Components/ProjectCard";
import waveBrigadeIcon from "../assets/WaveBrigade/final-image-4.jpg"
import apexExtinctionIcon from "../assets/WaveBrigade/final-image-5.jpg"
import swampCoolerIcon from "../assets/WaveBrigade/final-image-6.jpg"

// ProjectCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired, //Image 
// };


//DaisyUI Responsive card (vertical on small screen, horizontal on large screen)
// export default ProjectShowcase;
export default function TestPage()
{

  return(
    // this is the template for the Projects page

    <div className="min-h-screen h-auto bg-white pb-5">
      <h1 className="text-4xl md:text-5xl text-center py-5">What I've Done...</h1>
    
      <ProjectCard image={waveBrigadeIcon} description="WaveBrigade is a full-stack web application
            which will allow students to study
            how media affects people both physiologically and psychologically through 
            interactive assignments." title="WaveBrigade" gitHubLink="https://github.com/Andrade-Sebastian/CapstoneGroup9"/>

      <ProjectCard image={apexExtinctionIcon} description="As an unnamed soldier, 
            you venture throughout a post-apocalyptic Earth, collecting currency and power-ups while mowing 
            down various kinds of enemies." title="Apex Extinction" gitHubLink="https://github.com/Andrade-Sebastian/Apex-Extinction"/>


      <ProjectCard image={swampCoolerIcon} description="A fully customizable swamp cooler 
        capable of monitoring and regulating room temperature based on user-defined temperature 
        and water level thresholds." title="Swamp Cooler" gitHubLink="https://github.com/Pelayo-Emanuelle/CPE-301-Final-Project-/blob/main/CPE%20Final%20Project.pdf"/>

    </div>
  )
      
}
 /*
  Detect unencrypted traffic 
 
 Class Search Website: GitHub Link
  ● Collaborated with a team of 6 developers to create the front-end for an enhanced version of the 
  PeopleSoft class search system used by the University of Nevada, Reno. Another team of 6 developers handled the back-end development of the system. Key improvements included advanced filtering options, a user-friendly interface, and a Google Calendar integration for real-time schedule planning. 
  JavaScript, jQuery, CSS, and HTML were used for styling and logic, while AWS was used to host the website. */

  





/* <Project title="Project1" description="The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20-meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal: [beep]. A single lap should be completed each time you hear this sound: [ding]. Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word 'Start'. On your mark, get ready, start." 
            demoMedia="https://www.youtube.com/embed/wtsyKnBtZb4?si=JZ4_lXJ6dh1wZ5aQ&amp;controls=0" 
            GitHubLink="https://github.com" 
            techStack = {["JavaScript", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama"]}/>
            
            <Project title="Project1" description="The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20-meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal: [beep]. A single lap should be completed each time you hear this sound: [ding]. Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word 'Start'. On your mark, get ready, start." 
            demoMedia="https://www.youtube.com/embed/wtsyKnBtZb4?si=JZ4_lXJ6dh1wZ5aQ&amp;controls=0" 
            GitHubLink="https://github.com" 
            techStack = {["JavaScript", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama"]}/>

            <Project title="Project1" description="The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20-meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly but gets faster each minute after you hear this signal: [beep]. A single lap should be completed each time you hear this sound: [ding]. Remember to run in a straight line and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word 'Start'. On your mark, get ready, start." 
            demoMedia="https://www.youtube.com/embed/wtsyKnBtZb4?si=JZ4_lXJ6dh1wZ5aQ&amp;controls=0" 
            GitHubLink="https://github.com" 
            techStack = {["JavaScript", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama", "React", "Yo Mama"]}/> */