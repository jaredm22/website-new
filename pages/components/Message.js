import Image from "next/image";
import rpod from '../../public/rpod.png'
import pixel from '../../public/pixelate.png'

export default function Message(props) {

    console.log(props)

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
    } else {
        return(
            <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
                {props.text}
            </div>
        )
    }
}