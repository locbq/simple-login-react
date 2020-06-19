import React from 'react';
import {Grid} from '@material-ui/core';

import SocialButton from './components/SocialButton';
import {socialLogins} from './const';

function SocialLogin(){
  return (
    <Grid
      container
      justify="space-between"
    >
      {socialLogins.map(social => (
        <SocialButton title={social.title}/>
      ))}
    </Grid>
  );
}

export default SocialLogin;