import MenuIcon from './MenuIcon/MenuIcon'
import styled from 'styled-components'

const Nav = () => {
  return (
    <Wrapper>
      <MenuIcon />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: blue;
`
export default Nav
