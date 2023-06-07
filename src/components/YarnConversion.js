import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function YarnConversion(){
 
    const [variables, setVariables] = useState({
      Stitches: 10,
      GaugeOld: 1,
      GaugeNew: 1
    });

    let result = variables.Stitches / variables.GaugeOld * variables.GaugeNew;
  
    const handleChange = (event) => {
      const slider = event.target;
      setVariables({...variables, [slider.name]: slider.value});
    };

    function increment(event){
      const button = event.target;
      if(([button.id]=='Stitches' && variables[button.id]<500)||([button.id]=='GaugeOld' && variables[button.id]<40)||([button.id]=='GaugeNew' && variables[button.id]<40)){
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
        <span className="Description">Enter the number of stitches and gauge from your knitting instructions and your current gauge, to calculate the number of stitches you need</span>
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
            name="GaugeOld" 
            displayName="Old gauge"
            handleChange={handleChange} 
            value={variables.GaugeOld} 
            maxValue={40}
            increment={increment}
            decrement={decrement}
            />
          <KnitVariable 
            name="GaugeNew" 
            displayName="New gauge"
            handleChange={handleChange} 
            value={variables.GaugeNew} 
            maxValue={40}
            increment={increment}
            decrement={decrement}
            />
        <hr className="Width-hr"/>
        <span>Cast on {result.toFixed(0)} stitches</span>
      </Container>
    )
  };