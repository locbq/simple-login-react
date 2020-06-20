import React , {useState, useEffect} from 'react';
import {withStyles} from '@material-ui/core';

import {
  styles,
  StyledGridInputField,
  StyledInput,
  Seperator,
  ErrorMessage
} from './styles';

function UsernameInput({
  classes,
  handleValueUsername,
  errorMessageUsername,
  setErrorMessageUSername,
  ...props
}){
  const [username, setUsername] = useState('');
  const [touchedInput, setTouchedInput] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (username === '' && touchedInput){
      setErrorMessageUSername('Username cannot be blank');
    } else {
      setErrorMessageUSername('');
    }
  },[username]);

  const handleChange = event => {
    event.preventDefault();
    const {value} = event.target;
    setUsername(value);
    setTouchedInput(true);
  };

  const handleBlur = event => {
    event.preventDefault();
    const {value} = event.target;
    if (value === ''){
      setFocus(false);
    } else {
      setFocus(true);
    }
    handleValueUsername(username);
  };

  return (
    <StyledGridInputField>
      <StyledInput
        type="text"
        placeholder="Username"
        className={focus ? classes.focus : classes.nonFocus}
        value={username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Seperator/>
      <ErrorMessage>
        {errorMessageUsername}
      </ErrorMessage>
    </StyledGridInputField>
  );
}

export default withStyles(styles)(UsernameInput);