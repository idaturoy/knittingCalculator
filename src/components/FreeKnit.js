import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function FreeKnit(){
 
    const [variables, setValues] = useState({
      Gauge: 1,
      Circumference: 10
    });

    let result = variables.Circumference / variables.Gauge * 10;
  
    const handleSliderChange = (event) => {
      const slider = event.target;
      setValues({...variables, [slider.name]: slider.value});
    };

    const handleInputChange = (event) => {
      const inputField = event.target;
      let value = Number(inputField.value);
      console.log(variables);
      console.log(typeof value);
      if (value < 1) {
        value = 1;
      } else if (value > 500){
        value = 500;
      };
      if (!isNaN(value)){
        setValues({...variables, [inputField.id]: value});
      };

    };

    // const handleBlur = () => {
    //   if (value < 0) {
    //     setValue(0);
    //   } else if (value > 700) {
    //     setValue(700);
    //   }
    // };

    // function increment(event){
    //   const button = event.target;
    //   if(([button.id]=='Circumference' && variables[button.id]<500)||([button.id]=='Gauge' && variables[button.id]<40)){
    //     setVariables({...variables, [button.id]: variables[button.id]+1});
    //   }
    // };
    
    // function decrement(event){
    //   const button = event.target;
    //   if(variables[button.id]>1){
    //     setVariables({...variables, [button.id]: variables[button.id]-1});
    //   }
    // };
  
    return (
      <Container className="Container">
        <span className="Description">No need for instructions. Enter your circumference and gauge to calculate the needed number of stitches</span>
        <KnitVariable 
            name="Circumference"
            displayName="Circumference"
            handleChange={handleSliderChange}
            handleInput={handleInputChange}
            value={variables.Circumference}
            maxValue={500}
            // increment={increment}
            // decrement={decrement}
            />
        <KnitVariable 
            name="Gauge"
            displayName="Gauge"
            handleChange={handleSliderChange} 
            handleInput={handleInputChange}
            value={variables.Gauge} 
            maxValue={500}
            // increment={increment}
            // decrement={decrement}
            />
        <hr className="Width-hr"/>     
        <span>Cast on {result.toFixed(0)} stitches</span>
      </Container>
    )
  };