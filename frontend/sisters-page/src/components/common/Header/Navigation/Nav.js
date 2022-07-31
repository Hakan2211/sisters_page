import MenuIcon from './MenuIcon/MenuIcon'
import styled from 'styled-components'

const Nav = () => {
  return (
    <Wrapper>
      <MenuIconContainer>
        <MenuIcon />
      </MenuIconContainer>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: cyan;
  grid-area: nav;
  display: flex;
  padding-top: 16px;
  justify-content: center;
`

const MenuIconContainer = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  margin-top: -8px;
`
export default Nav
