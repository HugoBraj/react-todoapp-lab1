import React, { useState } from "react";
import { actions, colorsArctic, colorsDesert} from '../store'

export default function Theme() {
    const [activeColor, setActiveColor] = useState(colorsArctic);
    const r = document.querySelector('#root');

// Create a function for setting a variable value
function setColor() {
 
  if(activeColor==colorsArctic){
    setActiveColor(colorsDesert)
  }else{
    setActiveColor(colorsArctic)
  }
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--color-wenge', activeColor[0]);
  r.style.setProperty('--color-rose-taupe',  activeColor[1]);
  r.style.setProperty('--color-lavender',  activeColor[2]);
  r.style.setProperty('--color-dark-lavender',  activeColor[3]);
  r.style.setProperty('--color-seashell',  activeColor[4]);
  r.style.setProperty('--color-desert-sand',  activeColor[5]);
  r.style.setProperty('--color-dark-moss',  activeColor[6]);
 
}
    return (
      <>
      <div className="theme">
        <button className="theme-button" onClick={setColor}>Thème de couleur : {activeColor==colorsArctic ? "Desert": "Arctique"}</button>
      </div>
      
      </>
    )
  }