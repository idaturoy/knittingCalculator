import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import './KnitVariable.css';
import AddButton from '../buttons/AddButton';
import MinusButton from '../buttons/MinusButton';


export default function KnitVariable(props){

    return(
      <Stack spacing={1} direction="row" md={{ mb: 4, px: 1 }} alignItems="center">
        <h4 className="SliderTitle">{props.name}</h4>
        <MinusButton name={props.name} decrement={props.decrement}/>
        <Slider
          className="Slider"
          defaultValue={10}
          onChange={props.handleChange}
          aria-label="Small"
          valueLabelDisplay="auto"
          max={props.maxValue}
          min={1}
          value={props.value}
          name={props.name}
        />
        <AddButton name={props.name} increment={props.increment}/>
        <TextField variant="outlined" InputProps={{readOnly: true, style: {color: "black", width:60}
          }} value={props.value}
        />
    </Stack>
    )
}


