import Image from "next/image";
import rpod from '../../public/rpod.png'
import pixel from '../../public/pixelate.png'

export default function Message(props) {


    if (props.image == "RPOD") {
        return(
            <a className={`link-message ${props.type} ${props.last ? "last" : ""}`} href={"https://rpod-tracker.vercel.app/"}>
                <Image src={rpod} height={300} width={400}/>
            </a>
        )
    } else if (props.image == 'pixel') {
        return(
            <a className={`link-message ${props.type} ${props.last ? "last" : ""}`} href={"https://pixel-art-chi.vercel.app/"}>
                <Image src={pixel} height={300} width={400}/>
            </a>
        )
    } else if (props.link == "RPOD") {
        console.log("Happens")
        return(
            <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
                <a href={"https://github.com/jaredm22/RPOD-Tracker"}>GitHub | </a>
                <a href={"https://rpod-tracker.vercel.app/"}>Link</a>
            </div>
        )  
    } else if (props.link == "pixel") {
        return(
            <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
                <a href={"https://github.com/jaredm22/pixel-art"}>GitHub | </a>
                <a href={"https://pixel-art-chi.vercel.app/"}>Link</a>
            </div>
        )  
    } else if (props.link == "oldwebsite"){
        return(
            <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
                <a href={"https://github.com/jaredm22/personal-website"}>GitHub | </a>
                <a href={"https://jaredmin.netlify.app/"}>Link</a>
            </div>
        )
    } else {
        return(
            <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
                {props.text}
            </div>
        )
    }
}