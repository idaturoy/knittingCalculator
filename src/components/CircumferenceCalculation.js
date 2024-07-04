import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function CircumferenceCal(){

    const maxValueGauge = 40;
    const maxValueStitches = 300;
 
    const [variables, setVariables] = useState({
      Stitches: 100,
      Gauge: 27
    });

    let result = variables.Stitches / variables.Gauge * 10;
  
    const handleChange = (event) => {
      const slider = event.target;
      setVariables({...variables, [slider.name]: slider.value});
    };

    const handleInputChange = (event) => {
      const inputField = event.target;
      let value = Number(inputField.value);
      if (value < 1) {
        value = 1;
      } else if (value > maxValueStitches){
        value = maxValueStitches;
      };
      if (!isNaN(value)){
        setVariables({...variables, [inputField.id]: value});
      };
    };
  
    return (
      <Container className="Container">
        {/* <span className="Description">Enter the number of stitches from your knitting instructions and your gauge to calculate the expected circumference of your garment</span> */}
        <KnitVariable 
            name="Stitches" 
            displayName="Stitches"
            handleChange={handleChange}
            handleInput={handleInputChange}
            value={variables.Stitches}
            maxValue={maxValueStitches}
            />
        <KnitVariable 
            name="Gauge"
            displayName="Gauge"
            handleChange={handleChange} 
            handleInput={handleInputChange}
            value={variables.Gauge} 
            maxValue={maxValueGauge}
            />
        <hr className="Width-hr"/>     
        <span>The length of the garment will be {result.toFixed(2)} cm</span>
      </Container>
    )
  };
