import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function FreeKnit(){

  const maxValueGauge = 40;
  const maxValueCircum = 300;
 
    const [variables, setValues] = useState({
      Gauge: 27,
      Circumference: 100
    });

    let result = variables.Circumference * variables.Gauge / 10;
  
    const handleSliderChange = (event) => {
      const slider = event.target;
      setValues({...variables, [slider.name]: slider.value});
    };

    const handleInputChange = (event) => {
      const inputField = event.target;
      let value = Number(inputField.value);
      if (value < 0) {
        value = 0;
      } else if (value > maxValueCircum){
        value = maxValueCircum;
      };
      if (!isNaN(value)){
        setValues({...variables, [inputField.id]: value});
      };
    };

    return (
      <Container className="Container">
        {/* <span className="Description">No need for instructions. Enter your circumference and gauge to calculate the needed number of stitches</span> */}
        <KnitVariable 
            name="Circumference"
            displayName="Circumference"
            handleChange={handleSliderChange}
            handleInput={handleInputChange}
            value={variables.Circumference}
            maxValue={maxValueCircum}
        />
        <KnitVariable 
            name="Gauge"
            displayName="Gauge"
            handleChange={handleSliderChange} 
            handleInput={handleInputChange}
            value={variables.Gauge} 
            maxValue={maxValueGauge}
        />
        <hr className="Width-hr"/>     
        <span>Cast on {result.toFixed(0)} stitches</span>
      </Container>
    )
  };