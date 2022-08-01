import Logo from './Logo/Logo'
import styled from 'styled-components'
import CarouselIndicator from '../../Carousel/CarouselIndicator/CarouselIndicator'

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <CarouselIndicator />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: red;
  grid-area: header;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
  //justify-content: center;
  align-items: start;
`

export default Header
