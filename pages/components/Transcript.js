import { useState } from 'react';
// import { format } from 'date-fns';
import Message from './Message';

export default function Transcript(props) {
    
    const [ state, setState ] = useState({
        input: "",
        messages: props.selectedTranscript.messages || [],
        numMessages: props.selectedTranscript.numMessages || 0,
        lastSentMessageIndex: props.selectedTranscript.lastSentMessageIndex || -1,
    })

    function createMessage() {
        setState({
            ...state,
            input: "",
            messages: [...state.messages, {
                sent: true,
                message: state.input,
            }],
            numMessages: state.numMessages+1,
            lastSentMessageIndex: state.messages.length,
        }) 
    }

    var messages = [];
    for (var i = 0; i < state.numMessages; i++) {
        messages.push(
            <Message 
                key={`${state.conversationId}-${i}`} 
                type={state.messages[i].sent ? "sent" : "received"} 
                text={state.messages[i].message} 
                last={ i !== state.numMessages - 1 ?
                    state.messages[i+1].sent !== state.messages[i].sent
                    : true
                }
        />)
        if (state.lastSentMessageIndex === i)  messages.push(<p className="delivered">Delivered</p>);
    }

    console.log(state.messages)
 
    return(
        <div className="main" id="main">

            <div className="main-header">
                <div className="contact">
                    To: <span className="contact-name">{props.selectedTranscript.name}</span>
                </div>
            </div>

            <div className="main-content">
                <div className="timestamp">
                    <h6>Today</h6>
                    <p>{}</p>
                </div>
                {messages}
            </div>

            <div className="main-footer">
                <div className="main-left">

                </div>

                <input 
                    className="message-input" 
                    placeholder="iMessage" 
                    type="text" 
                    value={state.input}
                    onChange={(e) => setState({...state, input: e.target.value})} 
                    onKeyDown={(e) => { if (e.key === 'Enter') createMessage() }}
                />

                <div className="main-right">

                </div>
                
            </div>

        </div>
    )
}