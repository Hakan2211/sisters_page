import { Header } from '../../components/index'
import { Nav } from '../../components/index'

import styled from 'styled-components'

const LandingPage = () => {
  return (
    <Wrapper>
      <Header />
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  height: 100vh;
  background-color: yellow;
`
export default LandingPage
