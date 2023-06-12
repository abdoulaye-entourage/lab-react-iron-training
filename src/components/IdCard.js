import '../css/idCard.css';

function IdCard({ lastName, firstName, gender, height, picture }) {
  return (
    <div className="idCard">
      <span className="idName">
        <span>
          <span className="gras">Last name</span> : {lastName}
        </span>
        <span>
          <span className="gras">Fist name</span>: {firstName}
        </span>

        <span>
          <span className="gras">Gender </span>: {gender}
        </span>
        <span>
          <span className="gras"> Height</span> : {height}
        </span>
      </span>
      <img className="imgIdCard" src={picture} alt="pisture"></img>
    </div>
  );
}

export default IdCard;
