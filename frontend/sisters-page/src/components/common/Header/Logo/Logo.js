import LogoImage from '../../../../assets/images/Logo.png'
import styled from 'styled-components'

const Logo = () => {
  return (
    <Wrapper>
      <Image src={LogoImage} alt='logo' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 75px;
  height: 75px;
  margin-top: -8px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

export default Logo
