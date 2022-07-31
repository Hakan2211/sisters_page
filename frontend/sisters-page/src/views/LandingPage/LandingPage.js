import { Header, Nav, Carousel } from '../../components/index'

import styled from 'styled-components'

const LandingPage = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Nav />
        <Carousel />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 90px 75px;
`

const Container = styled.main`
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-template-rows: calc(100vh - 180px);
  grid-template-areas: 'header carousel nav';
  background-color: yellow;
`

export default LandingPage
