import MenuIcon from './MenuIcon/MenuIcon'
import styled from 'styled-components'
import SocialMedia from '../../../Social-Media-Links/social-media'

const Nav = () => {
  return (
    <Wrapper>
      <MenuIconContainer>
        <MenuIcon />
      </MenuIconContainer>
      <SocialMedia />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  background-color: cyan;
  grid-area: nav;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  align-items: center;
  justify-content: space-between;
`

const MenuIconContainer = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  margin-top: -8px;
`
export default Nav
