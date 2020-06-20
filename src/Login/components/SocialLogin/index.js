import React from 'react';
import {Grid} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
  StyledButtonFacebook,
  StyledButtonGoogle,
  StyledButtonTwitter
} from './styles';

function SocialLogin(){
  return (
    <Grid
      container
      justify="space-between"
    >
      <StyledButtonFacebook>
        <FontAwesomeIcon icon={['fab', 'facebook-f']}/> Facebook
      </StyledButtonFacebook>

      <StyledButtonGoogle>
        <FontAwesomeIcon icon={['fab', 'google']}/> Google
      </StyledButtonGoogle>

      <StyledButtonTwitter>
        <FontAwesomeIcon icon={['fab', 'twitter']}/> Twitter
      </StyledButtonTwitter>
    </Grid>
  );
}

export default SocialLogin;