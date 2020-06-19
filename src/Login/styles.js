import {
  styled,
  Grid,
  Button
} from '@material-ui/core';

export const StyledGrid = styled(Grid)(({theme}) => ({
  width: '320px',
  background: '#FFFFFF',
  borderRadius: '5px',
  padding: '60px 40px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}));

export const StyledHeading1 = styled('h1')(({theme}) => ({
  fontFamily: '"Roboto Condensed", sans-serif',
  textAlign: 'center',
  margin: '0px 0px 50px 0px'
}));

export const StyledButtonLogin = styled(Button)(({theme}) => ({
  width: '100%',
  fontFamily: '"Roboto Condensed", sans-serif',
  fontSize: '20px',
  color: '#FFFFFF',
  fontWeight: 'bold',
  background: 'linear-gradient(to right, #c2e59c, #64b3f4)',
  height: '50px',
  backgroundSize: '150%',
  transition: '0.5s ease-in-out',
  '&:hover': {
    backgroundPosition: 'right',
  }
}));

export const StyledParagraph = styled('p')(({theme}) => ({
  fontFamily: '"Roboto Condensed", sans-serif',
  textAlign: 'center',
  fontSize: '18px',
  margin: '40px 0px 30px 0px',
  '& a': {
    textDecoration: 'none',
    color: ' #c2e59c',
    transition: '0.25s ease-in-out',
    '&:hover': {
      color: '#64b3f4'
    }
  }
}));

export const StyledParagraphDivider = styled('p')(({theme}) => ({
  color: '#adadaa',
  width: '100%',
  textAlign: 'center',
  borderBottom: '1px solid #adadaa',
  lineHeight: '0.1em',
  margin: '10px 0 20px',
  '& span': {
    padding: '0px 10px',
    background: '#ffffff'
  }
}));