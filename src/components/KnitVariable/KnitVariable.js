import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import './KnitVariable.css';
import Grid from '@mui/material/Grid';



export default function KnitVariable(props){

    return(
      <Grid container alignItems="center">
        <Grid item xs>
            <h4 className="SliderTitle">{props.displayName}</h4>
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
          <TextField id={props.name} onChange={props.handleInput} variant="outlined" InputProps={{style: {color: "black", width:55, inputMode: 'numeric', pattern: '[0-9]*'}
          }} value={props.value}
        />

        </Grid>

    </Grid>
    )
}


