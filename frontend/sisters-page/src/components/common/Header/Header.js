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
  grid-area: header;
  display: flex;
  padding-top: 16px;
  justify-content: center;
`

export default Header
