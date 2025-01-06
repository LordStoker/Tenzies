

export default function Die(props){
    return(
        <button style={props.isHeld ? {backgroundColor:"#59E391"} : {backgroundColor: "white"}}
         onClick={props.handleClick}>{props.value}</button>
    )
}