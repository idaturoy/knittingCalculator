import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import './ButtonStyle.css';


export default function AddButton(props){
    
    return(
        <button className="round-button" id={props.name} onClick={props.increment}>
            +
        </button>
    );
};