import '../css/greetings.css';

function Greetings(props) {
  let greeting = {
    fr: 'Bonjour',
    en: 'Hello',
    es: 'Hola',
    de: 'Halo',
  };
  // console.log('props.lang:', props.lang, greeting[props.lang]);
  //  if (!greeting[props.lang]) {
  //     return;
  //   }

  return (
    <>
      {greeting[props.lang] && (
        <article className="greetings">
          {greeting[props.lang]} {props.children}
        </article>
      )}
    </>
  );
}
export default Greetings;
