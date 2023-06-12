import visa from '../assets/images/visa.png';
import masterCard1 from '../assets/images/masterCard1.png';
import '../css/creditCard.css';

export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let creditcarStyles = {
    display: 'flex',
    borderRadius: 20,
    margin: 40,
    padding: 20,
    background: `${bgColor}`,
    color: `${color}`,
    width: 250,
    height: 100,
  };

  return (
    <div className="creditCardDisplay" style={creditcarStyles}>
      <div className="creditCartImage">
        <img src={type === 'Visa' ? visa : masterCard1} alt="cardImage" />
      </div>
      <div className="cardNUmber">**** **** **** {number.slice(-4)}</div>
      <div className="dateAndBank">
        <span className="expirationDate">
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span className="bankName">{bank}</span>
      </div>
      <div className="ownerName">{owner}</div>
    </div>
  );
}
