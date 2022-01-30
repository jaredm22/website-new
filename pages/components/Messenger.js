import { useState } from "react";
import Sidebar from "./Sidebar";
import Transcript from "./Transcript";
import conversations from './conversationData'


function Messenger(props) {
    const [selected, setSelected] = useState(0)

    function handleSelect(selectedId) {
        setSelected(selectedId)
    }

    console.log(selected)
    console.log(conversations)

    return(
        <div className="messenger-container">
            <Sidebar onChildClick={handleSelect} conversations={conversations} selectedIndex={selected}/>
            <Transcript key={`transcript${"-" + selected}`} selectedTranscript={conversations[selected]}/>
        </div>
    )
} export default Messenger;