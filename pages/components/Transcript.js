import Image from 'next/image';
import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
import Message from './Message';
import backButton from '../../public/left-white.png'

export default function Transcript(props) {

    var initialState = 
        props.selectedTranscript ?
            {
                input: "",
                messages: props.selectedTranscript.messages,
                numMessages: props.selectedTranscript.numMessages,
                lastSentMessageIndex: props.selectedTranscript.lastSentMessageIndex || -1,
            }
        : 
            {
                input: "",
                messages: [],
                numMessages: 0,
                lastSentMessageIndex: -1,
            }

            
    
    
    const [windowDimensions, setWindowDimensions] = useState({width: 0, height: 0});
    
    useEffect(() => {

        function getWindowDimensions() {
            const { innerWidth: width, innerHeight: height } = window;
            return {
            width,
            height
            };
        }

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
            
    console.log(windowDimensions)

    const [ state, setState ] = useState(initialState)

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

    if (state.messages != []) {
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
                    image={state.messages[i].image ? state.messages[i].image : false}
                    link={state.messages[i].link ? state.messages[i].link : false}
            />)
            if (state.lastSentMessageIndex === i)  messages.push(<p className="delivered">Delivered</p>);
        }
    }

    console.log(state)

    
   
 
    return(state.messages != [] ?
        <div className="main" id="main">
            
            <div className="main-header">
                <div className="contact">
                    <a className="back-button" href='#sidebar'>
                        {windowDimensions.innerWidth <= 640 ?
                            <Image src={backButton} height={40} width={40}/>   
                            : false 
                        }
                    </a> 
                    {/* To: <span className="contact-name">{props.selectedTranscript.name}</span> */}
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

        : 

        <div className='main' id="main"></div>
    )
}