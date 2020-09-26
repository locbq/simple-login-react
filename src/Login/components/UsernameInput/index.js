import React , {
  useState, 
  useEffect
} from 'react';
import {withStyles} from '@material-ui/core';
import {isEmpty} from 'lodash';

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
  setErrorMessageUsername,
  ...props
}){
  const [username, setUsername] = useState('');
  const [touchedInput, setTouchedInput] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (isEmpty(username) && touchedInput){
      setErrorMessageUsername('Username cannot be blank');
    } else {
      setErrorMessageUsername('');
    }
  },[username, setErrorMessageUsername, touchedInput]);

  const handleChange = event => {
    event.preventDefault();
    const {value} = event.target;
    setUsername(value);
    setTouchedInput(true);
  };

  const handleBlur = event => {
    event.preventDefault();
    const {value} = event.target;
    if (isEmpty(value)){
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