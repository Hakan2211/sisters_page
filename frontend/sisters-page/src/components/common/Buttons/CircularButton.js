import styled from 'styled-components'

const SIZES = {
  small: {
    '--fontSize': '1.6rem',
    '--padding': '0.5rem',
  },
  medium: {
    '--fontSize': '1.8rem',
    '--padding': '0.8rem',
  },
  large: {
    '--fontSize': '2.1rem',
    '--padding': '1.2rem',
  },
}

const CircularButton = ({ size, children, variant }) => {
  const styles = SIZES[size]

  let Component

  if (variant === 'primary') {
    Component = PrimaryButton
  }
  //   } else if (variant === 'secondary') {
  //     Component = SecondaryButton
  //   } else if (variant === 'outline') {
  //     Component = OutlineButton
  //   } else if (variant === 'white') {
  //     Component = WhiteButton
  //   } else if (variant === 'buttonWithIcon') {
  //     Component = ButtonWithIcon
  //   } else if (variant === 'round') {
  //     Component = RoundButton
  //   } else if (variant === 'circular') {
  //     Component = CircularButton
  else {
    throw new Error(`Unrecognized Button variant: ${variant}`)
  }

  return <Component style={styles}>{children}</Component>
}

const CircularButtonBase = styled.button`
  border-radius: 50%;
  /* width: 50px;
  height: 50px; */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  padding: var(--padding);
`
const PrimaryButton = styled(CircularButtonBase)`
  background-color: var(--primary);
  color: var(--white);
  &:hover {
    background-color: var(--primary-light);
  }
`

export default CircularButton
