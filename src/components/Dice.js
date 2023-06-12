import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice5.png';
import { useState } from 'react';
import '../css/dice.css';
function Dice() {
  const [diceNumber, setDiceNumber] = useState(diceEmpty);
  let arrDiceNUmbers = [dice1, dice2, dice3, dice4, dice5, dice6];

  function diceChange() {
    setDiceNumber(diceEmpty);

    setTimeout(() => {
      let randomDiceNUmers =
        arrDiceNUmbers[Math.floor(Math.random() * arrDiceNUmbers.length)];
      setDiceNumber(randomDiceNUmers);
    }, 1000);

    // let interval = setInterval(() => {
    //   let randomDiceNUmers =
    //     arrDiceNUmbers[Math.floor(Math.random() * arrDiceNUmbers.length)];
    //   setDiceNumber(randomDiceNUmers);
    //   clearInterval(interval);
    // }, 1000);
  }

  return (
    <div className="diceParent">
      <img
        className="diceImg"
        src={diceNumber}
        alt="diceImage"
        onClick={diceChange}
      ></img>
    </div>
  );
}
export default Dice;
