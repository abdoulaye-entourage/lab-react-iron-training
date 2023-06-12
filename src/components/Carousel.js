import { useState } from 'react';
import '../css/carousel.css';
function Carousel({ images }) {
  const [img, setNewImage] = useState(0);
  function changeImgToLeft() {
    img === 0 ? setNewImage(images.length - 1) : setNewImage(img - 1);
  }
  function changeImgToRight() {
    img === images.length - 1 ? setNewImage(0) : setNewImage(img + 1);
  }
  return (
    <div className="divCarousel">
      <button onClick={() => changeImgToLeft()}>Left</button>
      <img src={images[img]} className="carousel" alt="img" />
      <button onClick={changeImgToRight}>Right</button>
    </div>
  );
}
export default Carousel;
