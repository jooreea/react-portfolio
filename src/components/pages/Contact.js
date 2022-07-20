import React, { useState } from 'react';
import '../styles/style.css';

import { validateEmail } from '../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!userName) {
      setErrorMessage('Name is required.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid.');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!message) {
      setErrorMessage('Message is required.');
      return;
    }
    alert(`Thank you for your message ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className='m-3'>
      <h2>Contact Me</h2>
      <form className="form">
        <div className="mb-1">
          <label for="nameInput" className="form-label mb-1">Name:</label>
          <input
            className="form-control"
            id="nameInput" 
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
          />
        </div>
        <div className="mb-1">
          <label for="emailInput" className="form-label mb-1">Email:</label>
          <input
            className="form-control"
            id="emailInput" 
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          />
        </div>
        <div className="mb-3">
          <label for="messageInput" className="form-label mb-1">Message:</label>
          <textarea
            className="form-control"
            id="messageInput"
            rows="5"  
            value={message}
            name="message"
            onChange={handleInputChange}
            type="text"
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
