//checks to see if environment variables are set
//Returns true if all environment variables are set, false otherwise

export default function envVarsAreSet()
{
    let serviceKeyIsSet = (typeof import.meta.env.VITE_EMAILJS_SERVICE_KEY !== 'undefined');
    let templateKeyIsSet = (typeof import.meta.env.VITE_EMAILJS_TEMPLATE_KEY !== 'undefined');
    let publicKeyIsSet = (typeof import.meta.env.VITE_EMAILJS_PUBLIC_KEY !== 'undefined');

    if (serviceKeyIsSet && templateKeyIsSet && publicKeyIsSet) //if all variables are set
    {
        return true;
    } 
    else //determine which variables are missing
    {
        // Check if environment variables are loaded correctly
        if (!serviceKeyIsSet) 
        {
            console.error("Error: VITE_EMAILJS_SERVICE_KEY is missing.");
            return false;
        }

        if (!templateKeyIsSet) 
        {
            console.error("Error: VITE_EMAILJS_TEMPLATE_KEY is missing.");
            return false;
        }
        
        if (!publicKeyIsSet) 
        {
            console.error("Error: VITE_EMAILJS_PUBLIC_KEY is missing.");
            return false;
        }

    }
}