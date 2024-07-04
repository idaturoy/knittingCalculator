import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function YarnConversion(){

  const MaxValueGauge = 40;
  const MaxValueStitches = 300;
 
  const [variables, setVariables] = useState({
    Stitches: 40,
    GaugeOld: 27,
    GaugeNew: 30
  });
  
  function calculateStitches() {
    const result = (variables.Stitches / variables.GaugeOld) * variables.GaugeNew;
    return Number.isNaN(result) ? 0 : result;
  };
  
  const handleChange = (event) => {
    const slider = event.target;
    setVariables({
      ...variables, 
      [slider.name]: slider.value
    });
  };

  const handleInputChange = (event) => {
    const inputField = event.target;
    let value = Number(inputField.value);
    value = value < 0 ? 0 : value;
    value = value > MaxValueStitches ? MaxValueStitches : value;

    if (!isNaN(value) || value !== 0){
      setVariables({
        ...variables, 
        [inputField.id]: value
      });
    };
  };
 
  return (
    <Container className="Container">
      {/* <span className="Description">Enter the number of stitches and gauge from your knitting instructions and your current gauge, to calculate the number of stitches you need</span> */}
      <KnitVariable 
          name="Stitches"
          displayName="Stitches"
          handleChange={handleChange}
          handleInput={handleInputChange}
          value={variables.Stitches}
          maxValue={MaxValueStitches}
          />
      <KnitVariable 
          name="GaugeOld" 
          displayName="Old gauge"
          handleChange={handleChange}
          handleInput={handleInputChange}
          value={variables.GaugeOld} 
          maxValue={MaxValueGauge}
          />
        <KnitVariable 
          name="GaugeNew" 
          displayName="New gauge"
          handleChange={handleChange}
          handleInput={handleInputChange}
          value={variables.GaugeNew} 
          maxValue={MaxValueGauge}
          />
      <hr className="Width-hr"/>
      <span>Cast on {calculateStitches().toFixed(0)} stitches</span>
    </Container>
  )
};