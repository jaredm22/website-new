import Conversation from "./Conversation"
import compose from '../../public/compose.svg'
import Image from "next/image"
import githubLogo from '../../public/GitHub2.png'
import spotifyLogo from '../../public/spotify.png'

function Sidebar(props) {

    var selected = props.selectedIndex;

    var conversations = []

    console.log(props.conversations)

    var data = props.conversations || []
    
    if (props.conversations) {
        data.forEach((c) => {           
            if (c.conversationId === 0) {
                conversations.push(
                    <div className="pinned-container" key="pinned">
                        <Conversation 
                            key={`pinned-conversation-0`}
                            clicked={selected === 0}
                            conversationId={0}
                            type="pinned"
                            onChildClick={props.onChildClick}
                        />
                    </div>
                )
            } else if (c.conversationId !== 1000) {
                conversations.push(
                    <Conversation 
                        key={`conversation-${c.conversationId}`} 
                        name={c.name}
                        description={c.description}
                        initials={c.initials}
                        clicked={selected === c.conversationId}
                        conversationId={c.conversationId}
                        onChildClick={props.onChildClick}
                    />)
                }
            }
        )
    }

    return(
        <div className="sidebar" id="sidebar">
            <div className="sidebar-header">
                <div className="button-container">

                    <a className="github-button" href={"https://github.com/jaredm22"}>
                        <Image src={githubLogo} height={25} width={25}/>
                    </a>

                    <a className="linkedin-button" href={"https://www.linkedin.com/in/jaredmin/"}>
                        in
                    </a>

                    <a className="spotify-button" href={"https://open.spotify.com/playlist/7j6e1aPMszy420VJVuasIt?si=cc813c354202464c"}>
                        <Image src={spotifyLogo} height={25} width={25}/>
                    </a>
                </div>

                <Image src={compose} height={20} width={20}/>
            </div>

            <div className="sidebar-content">
                {conversations}
            </div>
        </div>
    )
} export default Sidebar