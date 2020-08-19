import React, { useState } from 'react';
import cx from 'classnames';
import './App.css';

function NameField(props) {
  if (props.currentStep < props.stepNumber) {
    return null;
  }

  return (
    <div className={cx('form-field', { error: props.error })}>
      <label>Name: </label>
      <input type='text' onChange={props.handleInput} value={props.value} />
      <button type='button' onClick={props.handleButton}>
        Next
      </button>
    </div>
  );
}

function EmailField(props) {
  if (props.currentStep < props.stepNumber) {
    return null;
  }

  return (
    <div className={cx('form-field', { error: props.error })}>
      <label>Email: </label>
      <input type='email' onChange={props.handleInput} value={props.value} />
      <button type='button' onClick={props.handleButton}>
        Next
      </button>
    </div>
  );
}

function HomepageField(props) {
  if (props.currentStep < props.stepNumber) {
    return null;
  }

  return (
    <div className={cx('form-field', { error: props.error })}>
      <label>Homepage: </label>
      <input type='url' onChange={props.handleInput} value={props.value} />
      <button type='button' onClick={props.handleButton}>
        Next
      </button>
    </div>
  );
}

function TwitterField(props) {
  if (props.currentStep < props.stepNumber) {
    return null;
  }

  return (
    <div className={cx('form-field', { error: props.error })}>
      <label>Twitter handle: </label>
      <input type='text' onChange={props.handleInput} value={props.value} />
      <button type='button' onClick={props.handleButton}>
        Next
      </button>
    </div>
  );
}

function App() {
  const initialForm = {
    name: undefined,
    email: undefined,
    homepage: undefined,
    twitter: undefined,
  };

  const initialFormErrors = {
    name: false,
    email: false,
    homepage: false,
    twitter: false,
  };

  const [step, setStepper] = useState(1);
  const [form, updateForm] = useState(initialForm);
  const [fieldErrors, setFieldError] = useState(initialFormErrors);
  const [nameField, setNameField] = useState('');
  const [emailField, setEmailField] = useState('');
  const [homepageField, setHomepageField] = useState('');
  const [twitterField, setTwitterField] = useState('');

  function validateField(value) {
    return value && value !== '';
  }

  function handleNextButton(fieldName, fieldValue) {
    console.log('fieldName', fieldName);
    console.log('fieldValue', fieldValue);

    setFieldError({
      ...fieldErrors,
      [fieldName]: false,
    });

    if (validateField(fieldValue)) {
      updateForm({
        ...form,
        [fieldName]: fieldValue,
      });
      setStepper(step + 1);
    } else {
      setFieldError({
        ...fieldErrors,
        [fieldName]: true,
      });
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    console.log('FORM', form);
  }

  return (
    <form>
      <NameField
        stepNumber={1}
        currentStep={step}
        handleButton={() => handleNextButton('name', nameField)}
        handleInput={(e) => setNameField(e.target.value)}
        value={nameField}
        error={fieldErrors.name}
      />

      <EmailField
        stepNumber={2}
        currentStep={step}
        handleButton={() => handleNextButton('email', emailField)}
        handleInput={(e) => setEmailField(e.target.value)}
        value={emailField}
        error={fieldErrors.email}
      />

      <HomepageField
        stepNumber={3}
        currentStep={step}
        handleButton={() => handleNextButton('homepage', homepageField)}
        handleInput={(e) => setHomepageField(e.target.value)}
        value={homepageField}
        error={fieldErrors.homepage}
      />

      <TwitterField
        stepNumber={4}
        currentStep={step}
        handleButton={() => handleNextButton('twitter', twitterField)}
        handleInput={(e) => setTwitterField(e.target.value)}
        value={twitterField}
        error={fieldErrors.twitter}
      />

      <button type='submit' onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
  );
}

export default App;
