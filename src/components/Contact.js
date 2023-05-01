import Media from "react-media";
import NormalContact from "./normalmedia/NormalContact";
import SmallContact from "./smallmedia/SmallContact";


function Contact(){
    return(
        <>
        <Media query="(max-width: 500px)" render={() =>
         (
           SmallContact()
         )}
       />
       <Media query="(min-width: 500px)" render={() =>
         (
            NormalContact()
         )}
       />
       </>
    )
}

export default Contact;