

export default function Die(props){
    return(
        <button 
            style={props.isHeld ? {backgroundColor:"#59E391"} : {backgroundColor: "white"}}
            onClick={props.handleClick} aria-label={`Die with value ${props.value},
            ${props.isHeld ? "held" : "not held"}`}
            aria-pressed={props.isHeld}>
            {props.value}
        </button>
    )
}