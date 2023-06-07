import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function CircumferenceCal(){
 
    const [variables, setVariables] = useState({
      Stitches: 10,
      Gauge: 1
    });

    let result = variables.Stitches / variables.Gauge * 10;
  
    const handleChange = (event) => {
      const slider = event.target;
      setVariables({...variables, [slider.name]: slider.value});
    };

    function increment(event){
      const button = event.target;
      if(([button.id]=='Stitches' && variables[button.id]<500)||([button.id]=='Gauge' && variables[button.id]<40)){
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
        <span className="Description">Enter the number of stitches from your knitting instructions and your gauge to calculate the expected circumference of your garment</span>
        <KnitVariable 
            name="Stitches" 
            displayName="Stitches"
            handleChange={handleChange}
            value={variables.Stitches}
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
        <hr className="Width-hr"/>     
        <span>The expected circumference is {result.toFixed(2)} cm</span>
      </Container>
    )
  };