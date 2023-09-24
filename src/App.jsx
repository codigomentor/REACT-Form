import React, { useState } from 'react';

const initialData = {
  username: '',
  gender: 'Male',
  accept: false
}

export const App = () => {

  const [initialState, setInitialState] = useState(initialData)
  const { username, gender, accept } = initialState;

  const handleChange = (name, value) => {
    setInitialState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        Username:
        <input type="text" name="username" id="" value={username} onChange={e => handleChange(e.target.name, e.target.value)} />
        <br />

        <h4>Select gender:</h4>
        <input type="radio" name="gender" id="male" value="Male" checked={gender === "Male"} onChange={e => handleChange(e.target.name, e.target.value)} />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="Female" checked={gender === "Female"} onChange={e => handleChange(e.target.name, e.target.value)} />
        <label htmlFor="female">Female</label>

        <br />
        <input type="checkbox" name="accept" id="accept" checked={accept} onChange={e => handleChange(e.target.name, e.target.checked)} />
        <label htmlFor="accept">accept</label>

        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
};