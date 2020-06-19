import React from 'react';
import {
  styled,
  Button
} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


const StyledButton = styled(Button)(({theme}) => ({
  background: props => props.backgroundcolor,
  fontFamily: '"Roboto Condensed", sans-serif',
}));

function SocialButton({
  title,
  icon,
  backgroundcolor,
  ...props
}){
  return (
    <StyledButton
      backgroundcolor={backgroundcolor}
      {...props}
    >
      <FontAwesomeIcon icon={['fab', 'apple']}/>
      {title}
    </StyledButton>
  );
}

export default SocialButton;