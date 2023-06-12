import '../css/random.css';
//var min=1;
//var max=10;
//var random = Math.random() * (max - min) + min;
//alert(random);
//Math.Floor() arondit ves le bas et renvoie le plus grand entier inférieur ou égal à un nombre
// Math.random permet de choisir au hasard un nombr aleatoire entre deux nombres
export default function Random({ min, max }) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    <article className="random">
      Ramdom value betwween {min} and {max} = {randomNumber}
    </article>
  );
}
