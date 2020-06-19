import {
  styled,
  Grid
} from '@material-ui/core';

export const StyledGridInputField = styled(Grid)(({theme}) => ({
  overflow: 'hidden',
  marginBottom: '20px'
}));

export const StyledInput = styled('input')(({theme}) => ({
  fontFamily: '"Roboto Condensed", sans-serif',
  fontSize: '20px',
  height: '40px',
  width: '100%',
  padding: '0px 10px',
  outline: 'none',
  background: 'none',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  '&:focus + span': {
    transform: 'scaleX(1) translateY(-2px)',
    opacity: 1
  },
}));

export const Seperator = styled('span')(({theme}) => ({
  height: '2px',
  width: '100%',
  background: 'linear-gradient(to right, #c2e59c, #64b3f4)',
  display: 'block',
  transform: 'scaleX(0) translateY(-2px)',
  transformOrigin: '50%',
  opacity: 0,
  transition: 'all 0.15s linear'
}));

export const styles = theme => ({
  focus: {
    borderBottom: '2px solid #c2e59c'
  },
  nonFocus: {
    borderBottom: '1px solid #adadaa'
  }
});