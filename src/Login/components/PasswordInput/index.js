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

function PasswordInput({
  classes,
  handleValuePassword,
  errorMessagePassword,
  setErrorMessagePassword,
  ...props
}){
  const [password, setPassword] = useState('');
  const [touchedInput, setTouchedInput] = useState(false);
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (isEmpty(password) && touchedInput){
      setErrorMessagePassword('Password cannot be blank');
    } else {
      setErrorMessagePassword('');
    }
  }, [password, setErrorMessagePassword, touchedInput]);

  const handleChange = event => {
    event.preventDefault();
    const {value} = event.target;
    setPassword(value);
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
    handleValuePassword(password);
  };

  return (
    <StyledGridInputField>
      <StyledInput
        type="password"
        placeholder="Password"
        className={focus ? classes.focus : classes.nonFocus}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Seperator/>
      <ErrorMessage>
        {errorMessagePassword}
      </ErrorMessage>
    </StyledGridInputField>
  );
}

export default withStyles(styles)(PasswordInput);