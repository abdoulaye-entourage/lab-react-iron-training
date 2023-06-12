import { useState } from 'react';
import '../css/clickableImage.css';

export default function ClickablePicture({ img, imgClicked }) {
  const [image, setClickImage] = useState(false);
  function changeImage() {
    if (!image) {
      setClickImage(true);
    } else {
      setClickImage(false);
    }
  }
  return (
    <div className="clickableImg">
      <img src={image ? imgClicked : img} alt="img" onClick={changeImage} />
    </div>
  );
}
