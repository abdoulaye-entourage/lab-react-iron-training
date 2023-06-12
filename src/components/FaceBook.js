import profiles from '../data/berlin.json';
import '../css/faceBook.css';

function FaceBook() {
  let facebookProfiles = [...profiles];

  const listOfProfiles = facebookProfiles.map((picture, index) => (
    <div
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid black',
        padding: '10px',
        gap: '30px',
        margin: '10px',
        width: '100%',
      }}
    >
      <div style={{ width: '20%' }}>
        <img
          src={picture.img}
          alt={picture.firstName}
          style={{ width: '100%' }}
        ></img>
      </div>
      <div
        style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0px',
            gap: '2px',
            justifyContent: 'center',
            listStyle: 'none',
            fontSize: '18px',
            width: '35%',
            height: '100%',
          }}
        >
          <li>
            <span style={{ fontWeight: 'bold' }}>FirstName : </span>
            {picture.firstName}
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>LastName : </span>
            {picture.lastName}
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Country : </span>
            {picture.country}
          </li>
          <li>
            <span style={{ fontWeight: 'bold' }}>Type : </span>{' '}
            {picture.isStudent ? 'Student' : 'Teacher'}
          </li>
        </ul>
      </div>
    </div>
  ));

  return <div className="fbProfiles"> {listOfProfiles}</div>;
}
export default FaceBook;
