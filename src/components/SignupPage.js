import React, { useState } from 'react';
import '../css/signupPage.css';

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nationality: '',
  });

  let redborder = 'inputRed';

  let greenBorder = 'inputGreen';

  let grayBorder = 'inputGrey';

  const [emailAlert, setEmailAlert] = useState('');

  const [passwordAlert, setPasswordAlert] = useState('');

  const [selectorAlert, setSelectorAlert] = useState('');

  // const [emailInput, setEmailIput] = useState({
  //   email: grayBorder,
  // });
  // const [passwordInput, setPasswordInput] = useState({
  //   password: grayBorder,
  // });
  // const [nationalityInput, setNationalityInput] = useState({
  //   nationality: grayBorder,
  // });

  const [formDataValidation, setFormDataValidation] = useState({
    email: grayBorder,
    password: grayBorder,
    nationality: grayBorder,
  });

  function isEmailValid(email) {
    const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return regexEmail.test(email);
  }

  function isPasswordValid(password) {
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return regexPassword.test(password);
  }

  function isNationalityValid(nationality) {
    let nations = ['en', 'de', 'fr'];
    return nations.includes(nationality);
  }

  function handleChange(event) {
    event.preventDefault();
    return setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }
  // console.log(formDataValidation);
  function handlesubmit(event) {
    event.preventDefault();

    let dataValidation = {};
    //email validation
    if (isEmailValid(formData.email)) {
      dataValidation = { ...dataValidation, email: greenBorder };
      // setEmailIput({ ...emailInput, email: greenBorder });
      setEmailAlert('success');
      // setFormDataValidation({ ...formDataValidation, email: greenBorder })
    } else {
      dataValidation = { ...dataValidation, email: redborder };
      // setEmailIput({ ...emailInput, email: redborder });
      setEmailAlert('error');
    }

    // password validation
    if (isPasswordValid(formData.password)) {
      dataValidation = { ...dataValidation, password: greenBorder };

      setPasswordAlert('strong');
      // setPasswordInput({ ...passwordInput, password: greenBorder });
    } else {
      dataValidation = { ...dataValidation, password: redborder };

      setPasswordAlert('weak');
      // setPasswordInput({ ...passwordInput, password: redborder });
    }

    // select validation
    if (isNationalityValid(formData.nationality)) {
      dataValidation = { ...dataValidation, nationality: greenBorder };

      // setNationalityInput({ ...nationalityInput, nationality: greenBorder });
      setSelectorAlert('valid');
    } else {
      dataValidation = { ...dataValidation, nationality: redborder };

      // setNationalityInput({ ...nationalityInput, nationality: redborder });
      setSelectorAlert('invalid');
    }

    setFormDataValidation({ ...formDataValidation, ...dataValidation });
  }
  return (
    <div className="container">
      <form className="formContainer" onSubmit={handlesubmit}>
        <div className="formChild">
          <div className="DivLabel">
            <label htmlFor="email">Email</label>
          </div>
          <div className={`${formDataValidation.email} divInput`}>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="enter your email"
              required
            />
            <div className="divIcon">
              {/* {isEmailValid(formData.email) && checkValidatin.email} */}
              {emailAlert === 'success' && (
                // <span className="iconCheckGreen"></span>
                <i style={{ color: 'green' }} className="fa-solid fa-check"></i>
              )}
              {emailAlert === 'error' && (
                // <span className="iconCheckRed"></span>
                <i style={{ color: 'red' }} className=" fa-solid fa-xmark"></i>
              )}
            </div>
          </div>

          {emailAlert === 'success' && (
            <p style={{ color: 'green' }}>Email is valid</p>
          )}
          {emailAlert === 'error' && (
            <p style={{ color: 'red' }}>Please enter a valid email</p>
          )}
        </div>
        <div className="formChild">
          <div className="divLabel">
            <label htmlFor="password">Password </label>
          </div>
          <div className={`${formDataValidation.password} divInput`}>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="*******"
              required
            />
            <div className="divIcon">
              {passwordAlert === 'strong' && (
                // <span className="iconCheckGreenP"></span>
                <i style={{ color: 'green' }} className="fa-solid fa-check"></i>
              )}
              {passwordAlert === 'weak' && (
                // <span className="iconCheckRedP"></span>
                <i
                  style={{ color: 'red' }}
                  className="fa-sharp fa-solid fa-xmark"
                ></i>
              )}
            </div>
          </div>
          {passwordAlert === 'strong' && (
            <p style={{ color: 'green' }}>Password is valid</p>
          )}
          {passwordAlert === 'weak' && (
            <p style={{ color: 'red' }}>Password is not valid</p>
          )}
        </div>

        <div className="formChild">
          <label htmlFor="nationality">Nationality: </label>
          <select
            name="nationality"
            onChange={handleChange}
            className={`${formDataValidation.nationality}`}
            id="nationality"
          >
            <option value="" disabled selected>
              Selet a nationality
            </option>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
          {selectorAlert === 'valid' && (
            <p style={{ color: 'green' }}>Country entered is valid</p>
          )}
          {selectorAlert === 'invalid' && (
            <p style={{ color: 'red' }}>Please enter a valid country</p>
          )}
        </div>
        <div className="formChild">
          <button type="submit" name="button" className="submitButton">
            Sign Up
          </button>
        </div>
      </form>
      <p>
        {formData.nationality === 'en' && 'Hello'}
        {formData.nationality === 'de' && 'Halo'}
        {formData.nationality === 'fr' && 'Bonjour'}
      </p>
      {isEmailValid(formData.email) ? (
        <div className="message">
          <h2>Your email : {formData.email}</h2>
          <h2>
            The email is {isEmailValid(formData.email) ? 'correct' : 'wrong'}
          </h2>
        </div>
      ) : (
        <>
          <h2>make sure your email includes @ and .com</h2>
          <h2>
            make sure your password includes some special caracters and numbers
          </h2>
        </>
      )}
    </div>
  );
};
export default SignupPage;

// position: 'absolute',
// right: '8rem',
// zIndex: '9999',
// lineHeight: 3,
// color: 'red',
// fontSize: '15px'
