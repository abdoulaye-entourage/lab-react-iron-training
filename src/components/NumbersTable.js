import '../css/numbersTable.css';

function NumbersTable({ limit }) {
  let listOfNUmbers = [];

  for (let i = 1; i <= limit; i++) {
    listOfNUmbers.push(i);
    // console.log(NewNumbersList);
  }

  return (
    <div className="numbersTable">
      {listOfNUmbers.map((number, index) => {
        return (
          <div
            className="mappedNumbers"
            key={index}
            style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
}
export default NumbersTable;
