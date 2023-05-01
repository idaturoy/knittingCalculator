import './ButtonStyle.css';


export default function AddButton(props){
    
    return(
        <button className="round-button" id={props.name} onClick={props.decrement}>
            -
        </button>
    );
};