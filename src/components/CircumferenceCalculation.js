import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function CircumferenceCal(){
 
    const [variables, setVariables] = useState({
      Stiches: 10,
      Gauge: 1
    });

    let result = variables.Stiches / variables.Gauge * 10;
  
    const handleChange = (event) => {
      const slider = event.target;
      setVariables({...variables, [slider.name]: slider.value});
    };

    function increment(event){
      const button = event.target;
      if(([button.id]=='Stiches' && variables[button.id]<500)||([button.id]=='Gauge' && variables[button.id]<40)){
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
        <KnitVariable 
            name="Stiches" 
            handleChange={handleChange}
            value={variables.Stiches}
            maxValue={500}
            increment={increment}
            decrement={decrement}
            />
        <KnitVariable 
            name="Gauge" 
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