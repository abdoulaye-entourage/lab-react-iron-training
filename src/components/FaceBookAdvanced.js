import profilesData from '../data/berlin.json';
import '../css/faceBook.css';
import { useState } from 'react';

function FaceBook({ profiles, countrySelect }) {
  let facebookProfiles = [...profiles];

  //   console.log(facebookProfiles);
  const listOfProfiles = facebookProfiles.map((picture) => (
    <div
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

  return (
    <div className="fbProfiles">
      {listOfProfiles.map((currentProfile, index) => {
        return (
          <div
            key={index}
            style={
              countrySelect === currentProfile.country
                ? { backgroundColor: 'lightblue' }
                : {}
            }
          >
            {currentProfile}
          </div>
        );
      })}
    </div>
  );
}

export default function FacebookProfile() {
  let allprofiles = profilesData;
  const [countrySelect, setCountrySelect] = useState('');

  function handleClickCountry(country) {
    setCountrySelect(country);
  }

  const countries = allprofiles.reduce(
    (value, currentValue) => {
      if (!value.includes(currentValue['country']))
        value.push(currentValue['country']);
      return value;
    },
    ['All']
  );

  return (
    <div>
      {countries.map((country, index) => (
        <span key={index}>
          <button onClick={() => handleClickCountry(country)}>{country}</button>
        </span>
      ))}
      <FaceBook profiles={allprofiles} countrySelect={countrySelect} />
    </div>
  );
}
