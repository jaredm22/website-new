import headshot from '../../public/Headshot.jpg'
import Image from 'next/image';

export default function Conversation(props) {

    function handleClick(event) {
        props.onChildClick(props.conversationId); // pass any argument to the callback
    }

    return(
        props.type === "pinned" ?
            <a className={`pinned ${props.clicked ? "clicked" : "" }`} 
                onClick= {handleClick}
                href={"#main"}
            >
                <div className="pinned-photo">
                    <Image className="image-pinned" src={headshot} alt="" height={70} width={70}/>
                </div>
                <div className="pinned-name">
                    <div className="name">Jared Min</div>
                </div>
            </a>
        :
            <a 
                className={`conversation ${props.clicked ? "clicked" : "" }`}
                onClick={handleClick} 
                href={"#main"}
            >
                <div className="image-container">
                    <div className="contact-photo">
                        <h3>{props.initials}</h3>
                    </div>
                </div>
                <div 
                    className={`conversation-content ${props.clicked ? "clicked" : ""}`}
                >
                    <div className="content-top">
                        <h5>{props.name}</h5>
                        <p>Today</p>
                    </div>
                    <p>{props.description}</p>
                </div>
            </a>
    )
    
}