import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import './KnitVariable.css';
import AddButton from '../buttons/AddButton';
import MinusButton from '../buttons/MinusButton';
import Grid from '@mui/material/Grid';



export default function KnitVariable(props){

    return(
      <Grid container spacing={1} md={{ mb: 4, px: 1 }} alignItems="center">
        <Grid item xs>
          <h4 className="SliderTitle">{props.displayName}</h4>

          {/* <MinusButton name={props.name} decrement={props.decrement}/> */}
        </Grid>

        <Grid item xs={6}>

          <Slider
            className="Slider"
            defaultValue={10}
            onChange={props.handleChange}
            aria-label="Default"
            valueLabelDisplay="auto"
            max={props.maxValue}
            min={1}
            value={props.value}
            name={props.name}
          />
        </Grid>
        <Grid item xs>

          {/* <AddButton name={props.name} increment={props.increment}/> */}

          <TextField id={props.name} onChange={props.handleInput} variant="outlined" InputProps={{style: {color: "black", width:60, inputMode: 'numeric', pattern: '[0-9]*'}
          }} value={props.value}
        />

        </Grid>

    </Grid>
    )
}


