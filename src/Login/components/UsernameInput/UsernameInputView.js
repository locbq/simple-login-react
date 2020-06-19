import React , {useState} from 'react';
import {withStyles} from '@material-ui/core';

import {
  styles,
  StyledGridInputField,
  StyledInput,
  Seperator
} from './styles';

function UsernameInputView({
  classes,
  ...props
}){
  const [focus, setFocus] = useState(false);

  const handleBlur = event => {
    event.preventDefault();
    const {value} = event.target;
    if (value === ''){
      setFocus(false);
    } else {
      setFocus(true);
    }
  };

  return (
    <StyledGridInputField>
      <StyledInput
        type="text"
        placeholder="Username"
        className={focus ? classes.focus : classes.nonFocus}
        onBlur={handleBlur}
      />
      <Seperator/>
    </StyledGridInputField>
  );
}

export default withStyles(styles)(UsernameInputView);