import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function CircumferenceCal(){
 
    const [variables, setVariables] = useState({
      Gauge: 1,
      Circumference: 10
    });

    let result = variables.Circumference / variables.Gauge * 10;
  
    const handleChange = (event) => {
      const slider = event.target;
      setVariables({...variables, [slider.name]: slider.value});
    };

    function increment(event){
      const button = event.target;
      if(([button.id]=='Circumference' && variables[button.id]<500)||([button.id]=='Gauge' && variables[button.id]<40)){
        setVariables({...variables, [button.id]: variables[button.id]+1});
      }
    };
    
    function decrement(event){
      const button = event.target;
      if(variables[button.id]>1){
        setVariables({...variables, [button.id]: variables[button.id]-1});
      }
    };
  
    return (
      <Container className="Container">
        <span className="Description">No need for instructions. Enter your circumference and gauge to calculate the needed number of stitches</span>
        <KnitVariable 
            name="Circumference"
            displayName="Circumference"
            handleChange={handleChange}
            value={variables.Circumference}
            maxValue={500}
            increment={increment}
            decrement={decrement}
            />
        <KnitVariable 
            name="Gauge"
            displayName="Gauge"
            handleChange={handleChange} 
            value={variables.Gauge} 
            maxValue={40}
            increment={increment}
            decrement={decrement}
            />
        {/* <hr className="Width-hr"/>      */}
        <span>Cast on {result.toFixed(0)} stitches</span>
      </Container>
    )
  };