import Logo from './Logo/Logo'

import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: red;
`

export default Header
