import { useState } from 'react';
import { SingleColorPicker } from '../components/SingleColorPicker';
import '../css/colorCreation.css';
function RGBColorPicker() {
  const [rValue, setRvalue] = useState(0);
  const [gValue, setGvalue] = useState(0);
  const [bValue, setBvalue] = useState(0);

  function handleChange(color, value) {
    if (color === 'r') {
      setRvalue(value);
    }
    if (color === 'g') {
      setGvalue(value);
    }
    if (color === 'b') {
      setBvalue(value);
    }
  }

  return (
    <div className="divContainer">
      <div className="RGBColorPicker">
        <div className="divColor">
          <span className="rColor"></span>
          : R:
          <SingleColorPicker color="r" value={rValue} onchange={handleChange} />
        </div>
        <div className="divColor">
          <span className="gColor"></span>: G:
          <SingleColorPicker color="g" value={gValue} onchange={handleChange} />
        </div>
        <div>
          <span className="bColor"></span>: B:
          <SingleColorPicker color="b" value={bValue} onchange={handleChange} />
        </div>
        <div>
          <span
            style={{
              backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`,
              border: '1px solid',
            }}
            className="rgbColor"
          ></span>
          :rgb({rValue}, {gValue}, {bValue})
        </div>
      </div>
      <div>
        <p style={{ color: `rgb(${rValue},0,0)` }}>
          <span></span> SingleColorPicker
        </p>
        <p style={{ color: `rgb(0, ${gValue}, 0)` }}>
          <span></span> SingleColorPicker
        </p>
        <p style={{ color: `rgb(0,0,${bValue})` }}>
          <span></span> SingleColorPicker
        </p>
      </div>
      <div
        className="divRGB"
        style={{ color: `rgb(${rValue},${gValue},${bValue} )` }}
      >
        <span></span> RGBColorPicker(parent){' '}
      </div>
    </div>
  );
}
export default RGBColorPicker;
