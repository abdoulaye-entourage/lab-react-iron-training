import '../css/driverCard.css';

function DriverCard({ name, rating, img, car }) {
  let whiteStars = Math.round(rating);
  let blackStars = 5 - whiteStars;

  let whiteStarCategories = [];
  for (let i = 0; i < whiteStars; i++) {
    whiteStarCategories.push(<span key={i}>★</span>);
  }

  let blackStarCategories = [];
  for (let i = 0; i < blackStars; i++) {
    blackStarCategories.push(<span key={i}>☆</span>);
  }

  return (
    <div className="driveCard">
      <img className="imgDriverCard" src={img} alt={name} />
      <div className="information">
        <h2>{name}</h2>
        <div className="rating">
          {whiteStarCategories}
          {blackStarCategories}
        </div>
        <p>
          {car.model}- {car.licencePlate}
        </p>
      </div>
    </div>
  );
}
export default DriverCard;
