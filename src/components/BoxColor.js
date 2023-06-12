import '../css/boxColor.css';
// convertir en chaine les chifffres hexadecimal
// si la longueur des chiffres est inférieur à 2, renvoyer le 0+ le code hexa converti en string.
//
function convertirEnHex(rgbNUmber) {
  let hexaDecNum = Number(rgbNUmber).toString(16);

  if (hexaDecNum.length < 2) {
    return '0' + hexaDecNum;
  } else {
    return hexaDecNum;
  }
}

function BoxColor({ r, g, b }) {
  let colorhexadecimal =
    '#' + convertirEnHex(r) + convertirEnHex(g) + convertirEnHex(b);
  let style = {
    backgroundColor: `rgb(${r}, ${g},${b})`,
    color: r + g + b < 300 ? 'white' : 'black',
  };
  return (
    <article className="boxColor" style={style}>
      rgb({r}, {g},{b}){colorhexadecimal}
    </article>
  );
}

export default BoxColor;
