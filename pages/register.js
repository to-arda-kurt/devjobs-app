import { useState } from 'react';
import firebase from '../config/firebase';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const Register = () => {
  const auth = getAuth(firebase);

  const [inputField, setInputField] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputField((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    console.log(inputField);
    createUserWithEmailAndPassword(auth, inputField.email, inputField.password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('user', user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <div>
        <h1>Sign Up</h1>
        <label htmlFor="email">Email</label>
        <br />
        <input
          onChange={onChangeHandler}
          value={inputField.email}
          type="email"
          id="email"
          name="email"
        />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input
          onChange={onChangeHandler}
          value={inputField.password}
          type="password"
          id="password"
          name="password"
        />
        <br />
        <br />
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
};

export default Register;
