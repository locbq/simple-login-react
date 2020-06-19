import {
  styled,
  Grid
} from '@material-ui/core';

export const StyledGrid = styled(Grid)(({theme}) => ({
  width: '320px',
  height: '480px',
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