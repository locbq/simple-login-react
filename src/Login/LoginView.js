import React from 'react';

import {
  StyledGrid,
  StyledHeading1,
  StyledButtonLogin,
  StyledParagraph,
  StyledParagraphDivider
} from './styles';
import {
  UsernameInput,
  PasswordInput,
  RememberCheckbox,
  SocialLogin
} from './components';

function LoginView({...props}){
  return (
    <StyledGrid>
      <StyledHeading1>Login</StyledHeading1>

      <form>
        <UsernameInput/>
        <PasswordInput/>
        <RememberCheckbox/>
        <StyledButtonLogin>
          Login
        </StyledButtonLogin>
      </form>

      <StyledParagraph>
        Don't have an account? <a href="!#">Click here</a>
      </StyledParagraph>

      <StyledParagraphDivider>
        <span>Sign up faster with</span>
      </StyledParagraphDivider>

      <SocialLogin/>
    </StyledGrid>
  );
}

export default LoginView;