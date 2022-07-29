import styled from 'styled-components'

const SIZES = {
  small: {
    '--borderRadius': 2 + 'px',
    '--fontSize': '1.6rem',
    '--padding': '0.4rem 1.2rem',
  },
  medium: {
    '--borderRadius': 2 + 'px',
    '--fontSize': '1.8rem',
    '--padding': '1.2rem 2rem',
  },
  large: {
    '--borderRadius': 4 + 'px',
    '--fontSize': '2.1rem',
    '--padding': '1.6rem 3.2rem',
  },
}

const Button = ({ size, variant, children }) => {
  const styles = SIZES[size]

  let Component

  if (variant === 'primary') {
    Component = PrimaryButton
  } else if (variant === 'secondary') {
    Component = SecondaryButton
  } else if (variant === 'outline') {
    Component = OutlineButton
  } else if (variant === 'white') {
    Component = WhiteButton
  } else if (variant === 'buttonWithIcon') {
    Component = ButtonWithIcon
  } else if (variant === 'round') {
    Component = RoundButton
  } else if (variant === 'circular') {
    Component = CircularButton
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`)
  }

  return <Component style={styles}>{children}</Component>
}

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: var(--font-primary);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  &:hover {
    cursor: pointer;
  }
`

const PrimaryButton = styled(ButtonBase)`
  background-color: var(--primary);
  color: var(--white);
  &:hover {
    background-color: var(--primary-light);
  }
`

const SecondaryButton = styled(ButtonBase)`
  background-color: var(--secondary);
  color: var(--white);
  &:hover {
    background-color: var(--secondary-light);
  }
`
const OutlineButton = styled(ButtonBase)`
  background-color: var(--white);
  color: var(--primary);
  border: 2px solid currentColor;

  &:hover {
    background-color: var(--grey-light);
  }
`

const WhiteButton = styled(OutlineButton)`
  color: var(--black);
  border: 2px solid currentColor;

  &:hover {
    background-color: var(--grey-light);
  }
`

const RoundButton = styled(PrimaryButton)`
  border-radius: var(--borderRound);
`

const ButtonWithIcon = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
`
const CircularButton = styled(PrimaryButton)`
  border-radius: 50%;
  //width: 50px;
  //height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`
export default Button
