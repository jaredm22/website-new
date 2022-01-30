import Image from "next/image";
import rpod from '../../public/rpod.png'
// import jjcafe from '../../public/jjcafe.png'


export default function Message(props) {

    console.log(props)

    return(
        props.image ? 
            <a className={`link-message ${props.type} ${props.last ? "last" : ""}`} href={"https://rpod-tracker.vercel.app/"}>
                <div className="message-top">
                    <Image src={rpod} layout="fill"/>
                </div>

                <div className="message-bottom">
                    {props.text}
                </div>
            </a>

            :
            <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
                {props.text}
            </div>
            
            
    );
}