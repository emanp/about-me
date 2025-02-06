import { Switch } from "@nextui-org/react";
import { useState } from "react";


export default function LangSwitch() {

    const [isEnglish, setIsEnglish] = useState(true);

    //if the switch is toggled, change the language to Spanish, if it is not toggled, change the language to English
    function toggleLanguage()
    {
        setIsEnglish(!isEnglish);
        
        if(isEnglish)
        {
            sessionStorage.setItem("CurrentLanguage", "English");
        }
        else
        {
            sessionStorage.setItem("CurrentLanguage", "Spanish");
        }
    }


  	return (
		<div className="flex flex-col items-center justify-center">
			<Switch defaultSelected color="secondary" onValueChange={toggleLanguage}>
				{sessionStorage.getItem("CurrentLanguage")}
			</Switch>
		</div>
	);
}
