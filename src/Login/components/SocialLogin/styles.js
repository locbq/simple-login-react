import {
  styled,
  Button
} from '@material-ui/core';

export const StyledButtonFacebook = styled(Button)(({theme}) => ({
  color: '#ffffff',
  fontSize: '16px',
  backgroundColor: '#3c5a99',
  borderColor: '#3c5a99',
  transition: '0.25s ease-in-out',
  fontFamily: '"Roboto Condensed", sans-serif',
  '&:hover': {
    backgroundColor: '#31497d',
    borderColor: '#31497d'
  },
  '& svg': {
    marginRight: '10px'
  }
}));

export const StyledButtonGoogle = styled(Button)(({theme}) => ({
  color: '#ffffff',
  fontSize: '16px',
  backgroundColor: '#db4437',
  borderColor: '#db4437',
  transition: '0.25s ease-in-out',
  fontFamily: '"Roboto Condensed", sans-serif',
  '&:hover': {
    backgroundColor: '#c73124',
    borderColor: '#c73124'
  },
  '& svg': {
    marginRight: '10px'
  }
}));

export const StyledButtonTwitter = styled(Button)(({theme}) => ({
  color: '#ffffff',
  fontSize: '16px',
  backgroundColor: '#1da1f2',
  borderColor: '#1da1f2',
  transition: '0.25s ease-in-out',
  fontFamily: '"Roboto Condensed", sans-serif',
  '&:hover': {
    backgroundColor: '#0d8ddb',
    borderColor: '#0d8ddb'
  },
  '& svg': {
    marginRight: '10px'
  }
}));