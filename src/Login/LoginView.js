/* eslint-disable no-alert */
import React, {useState} from 'react';
import {isEmpty} from 'lodash';

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
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessageUsername, setErrorMessageUsername] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');

  const disableLogin = isEmpty(username)
  || isEmpty(password)
  || !isEmpty(errorMessageUsername)
  || !isEmpty(errorMessagePassword);

  const handleValueUsername = value => {
    setUsername(value);
  };

  const handleValuePassword = value => {
    setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    alert(`username: ${username}, password: ${password}`);
  };

  return (
    <StyledGrid>
      <StyledHeading1>Login</StyledHeading1>

      <form>
        <UsernameInput
          handleValueUsername={handleValueUsername}
          errorMessageUsername={errorMessageUsername}
          setErrorMessageUsername={setErrorMessageUsername}
        />
        <PasswordInput
          handleValuePassword={handleValuePassword}
          errorMessagePassword={errorMessagePassword}
          setErrorMessagePassword={setErrorMessagePassword}
        />
        <RememberCheckbox/>
        <StyledButtonLogin
          disabled={disableLogin}
          type="submit"
          onClick={handleSubmit}
        >
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