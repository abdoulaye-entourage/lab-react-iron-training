import { useState } from 'react';
import '../css/likeButton.css';

function LikeButton() {
  const [value, setValue] = useState(0);
  const [bgColorIndex, setBgcolorIndex] = useState(0);

  let arrColors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  const nextColor = () => {
    let newIndexBgColor = bgColorIndex + 1;
    if (arrColors[newIndexBgColor]) {
      setBgcolorIndex(newIndexBgColor);
    } else {
      setBgcolorIndex(0);
    }
  };

  //   function counterIncrement() {
  //     setValue(value + 1);
  //   }
  function resetValues() {
    setValue(0);
  }

  return (
    <div>
      <button
        className="button"
        style={{ backgroundColor: arrColors[bgColorIndex] }}
        onClick={() => {
          setValue(value + 1);
          nextColor();
        }}
      >
        {value} likes
      </button>
      <button className="resetButton" onClick={resetValues}>
        reset
      </button>
    </div>
  );
}
export default LikeButton;
