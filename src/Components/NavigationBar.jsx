import { Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Avatar } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavbarBrand } from "react-bootstrap";
import githubIcon from "../assets/svg/github-icon.svg"
import linkedinIcon from "../assets/svg/linkedIn-icon.svg"



export const Acme = () => {
    return (
      <svg fill="none" height="64" viewBox="0 0 30 30" width="64">
        <path
          clipRule="evenodd"
          d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    );
  };



export default function NavigationBar()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigateTo = useNavigate();


    const menuItems = [
        {name: "Home", path: "/"},
        //{name: "Skills", path: "/GitHub"},
        {name: "Portfolio", path: "/Portfolio"},
        //{name: "Languages", path: "/Languages"},
        {name: "Contact", path: "Contact"},
        //{name: "Test", path: "/Test"}
    ]
    

    const handleMenuSelect = (item) => {
        setIsMenuOpen(!isMenuOpen);   // Toggle the menu
        //navigateTo(item.path) 
    };



    return (
        <>
            {/* //addded flex */}
            <Navbar maxWidth="full" isBordered className="flex bg-black pl-0" isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
        {/* <div className="w-full bg-yellow-500"> <p> test</p></div> */}
                
                <NavbarContent justify="start" className="flex items-center gap-2 text-slate-50">
                    <NavbarBrand className="hidden sm:block flex justify-start" onPress={() => {navigateTo("/");}}>
                        <a href="/about-me"><Acme /></a>
                    </NavbarBrand>
                    <NavbarMenuToggle
                        className="sm:hidden"
                        onPress={() => {
                            handleMenuSelect(); 
                            console.log(isMenuOpen ? "open" : "closed");
                          }}
                        //onPress={handleMenuToggle} // Toggle the menu
                    />
                    

                   
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <NavbarItem>
                        <Link color="default" size="lg" onPress={() => {navigateTo("/");}} underline="active">
                            Home
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="default" onPress={() => {navigateTo("/Portfolio");}} underline="active" size="lg">
                            Portfolio
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="default" onPress={() => {navigateTo("/Contact");}} underline="active" size="lg">
                            Contact
                        </Link>
                    </NavbarItem>
                    {/* <NavbarItem>
                        <Link color="danger" href="/Test" underline="active" size="lg">
                            Test
                        </Link>
                    </NavbarItem> */}
                </NavbarContent>

                
                <NavbarContent justify="end" >
                    <NavbarItem className="pt-4 h-full">
                        <Link isExternal href="https://github.com/emanp">
                            <Avatar
                                className="transition-transform"
                                color="default"
                                name="Jason Hughes"
                                size="sm"
                                src={githubIcon}
                            />
                        </Link>
                    </NavbarItem>
                    <NavbarItem className="pt-4 h-full">
                        <Link isExternal href="https://www.linkedin.com/in/emanpelayo/">
                            <Avatar
                                className="transition-transform"
                                color="default"
                                name="Jason Hughes"
                                size="sm"
                                src={linkedinIcon}
                            />
                        </Link>
                    </NavbarItem>
                </NavbarContent>


                <NavbarMenu
                    className={`transition-all backdrop-filter backdrop-blur-lg bg-black bg-opacity-90 ${isMenuOpen ? "block" : "hidden"}` } 
                    
                >
                   <p>{isMenuOpen}</p>
                    <NavbarMenuItem key="Home">
                        <Link onPress={() => {handleMenuSelect(); navigateTo("/"); }} className="w-full text-3xl py-1 text-left text-slate-350">Home</Link>
                    </NavbarMenuItem>

                    <NavbarMenuItem key="Portfolio">
                        <Link onPress={() => {handleMenuSelect(); }} href="/Portfolio" className="w-full text-3xl py-1 text-left text-slate-350"> Portfolio </Link>
                    </NavbarMenuItem>

                    
                    <NavbarMenuItem key="GitHub">
                        <a href="https://github.com/emanp" target="_blank" rel="noopener noreferrer" className="w-full text-3xl py-1 text-left text-slate-350">GitHub</a>
                    </NavbarMenuItem>

                    <NavbarMenuItem key="LinkedIn">
                        <a href="https://www.linkedin.com/in/emanpelayo/" target="_blank" rel="noopener noreferrer" className="w-full text-3xl py-1 text-left text-slate-350">LinkedIn</a>
                    </NavbarMenuItem>

                    <NavbarMenuItem key="Contact">
                        <Link onPress={() => {handleMenuSelect(); navigateTo("/Contact"); }} className="w-full text-3xl py-1 text-left text-slate-350">Contact</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
            </Navbar>
            </>
    )
}