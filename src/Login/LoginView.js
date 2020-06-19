import React from 'react';

import {
  StyledGrid,
  StyledHeading1
} from './styles';
import {
  UsernameInput,
  PasswordInput
} from './components';

function LoginView({...props}){
  return (
    <StyledGrid>
      <StyledHeading1>Login</StyledHeading1>

      <form>
        <UsernameInput/>
        <PasswordInput/>
      </form>
    </StyledGrid>
  );
}

export default LoginView;