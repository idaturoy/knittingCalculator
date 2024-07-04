import Container from '@mui/material/Container';
import { useState } from 'react';
import KnitVariable from './KnitVariable/KnitVariable';
import '../App/App.css'

export default function FreeKnit(){

  const maxValueGauge = 40;
  const maxValueWidth = 300;
 
    const [variables, setValues] = useState({
      Gauge: 27,
      Width: 100
    });

    let result = variables.Width * variables.Gauge / 10;
  
    const handleSliderChange = (event) => {
      const slider = event.target;
      setValues({...variables, [slider.name]: slider.value});
    };

    const handleInputChange = (event) => {
      const inputField = event.target;
      let value = Number(inputField.value);
      if (value < 0) {
        value = 0;
      } else if (value > maxValueWidth){
        value = maxValueWidth;
      };
      if (!isNaN(value)){
        setValues({...variables, [inputField.id]: value});
      };
    };

    return (
      <Container className="Container">
        {/* <span className="Description">No need for instructions. Enter your width and gauge to calculate the needed number of stitches</span> */}
        <KnitVariable 
            name="Width"
            displayName="Width"
            handleChange={handleSliderChange}
            handleInput={handleInputChange}
            value={variables.Width}
            maxValue={maxValueWidth}
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