import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { data } from './data/data'

const Carousel = () => {
  const [list, setList] = useState([])
  const [length, setLength] = useState(0)

  useEffect(() => {
    setList(data)
    setLength(data.length)
  }, [list, length])

  const renderImage = () => {
    list.map((slide) => (
      <Image key={slide.id} src={slide.url} alt='carousel img' />
    ))
  }

  return (
    <Wrapper>
      <ImageContainer>{renderImage()}</ImageContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  grid-area: carousel;
  padding-top: 16px;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export default Carousel
