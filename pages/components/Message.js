export default function Message(props) {
    return(
        <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
            {props.text}
        </div>
    );
}