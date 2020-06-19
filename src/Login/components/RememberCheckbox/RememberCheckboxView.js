import React from 'react';

import {StyledGridInputField} from './styles';

function RememberCheckboxView(){

  const handleClick = event => {
    const {value} = event.target;
    console.log(value);
  };
  return (
    <StyledGridInputField
      container
      alignItems="center"
      justify="flex-end"
    >
      <label for="remember">Remember Me</label>
      <input
        id="remember"
        name="remember"
        type="checkbox"
        onClick={handleClick}
      />
    </StyledGridInputField>
  );
}

export default RememberCheckboxView;