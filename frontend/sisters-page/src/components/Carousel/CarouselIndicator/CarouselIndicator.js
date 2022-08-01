import styled from 'styled-components'

const CarouselIndicator = () => {
  return (
    <Wrapper>
      <Indicator active />
      <Indicator />
      <Indicator />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  //justify-content: space-evenly;
`
const Indicator = styled.div`
  border: ${({ active }) =>
    active ? '1px solid var(--black)' : ' 1px solid var(--grey)'};
  transform: rotate(90deg);
  height: 1px;
  width: 70px;
  border-radius: 5px;
  :first-child {
    margin-top: 100px;
  }
  :not(:first-of-type) {
    margin-top: 80px;
  }
`
export default CarouselIndicator
