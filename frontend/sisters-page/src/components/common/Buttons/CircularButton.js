import styled from 'styled-components'

const SIZES = {
  small: {
    '--fontSize': '1.6rem',
    '--padding': '1rem',
  },
  medium: {
    '--fontSize': '1.8rem',
    '--padding': '2rem',
  },
  large: {
    '--fontSize': '2.1rem',
    '--padding': '3rem',
  },
}

const CircularButton = ({ size, children }) => {
  const styles = SIZES[size]
  return <CircularStyled style={styles}>{children}</CircularStyled>
}

const CircularStyled = styled.button`
  border-radius: 50%;
  //width: 50px;
  //height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  border: none;
`

export default CircularButton
