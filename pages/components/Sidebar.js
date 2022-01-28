import Conversation from "./Conversation"
import compose from '../../public/compose.svg'
import Image from "next/image"

function Sidebar(props) {

    var selected = props.selectedIndex;

    var conversations = [] 

    console.log(props.conversations)
    
    props.conversations.forEach((c) => {           
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

    if (props.createNew) {
        var newConvo = props.transcripts.find((x) => x.conversationId === 1000);
        console.log(newConvo)
        conversations.splice(1, 0,
            <Conversation 
                key={`conversation-${1000}`} 
                name={newConvo.name}
                description={newConvo.description}
                initials={newConvo.initials}
                clicked={selected === newConvo.conversationId}
                conversationId={newConvo.conversationId}
                onChildClick={props.onChildClick}
            />
        );
    }

    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="button-container">

                </div>

                <Image src={compose} height={20} width={20}/>
            </div>

            <div className="sidebar-content">
                {conversations}
            </div>
        </div>
    )
} export default Sidebar