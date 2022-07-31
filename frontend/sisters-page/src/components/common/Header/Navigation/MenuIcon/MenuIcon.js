import { useState } from 'react'
import styled, { css } from 'styled-components'

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
      <FirstStroke isOpen={isOpen} />
      <SecondStroke isOpen={isOpen} />
      <ThirdStroke isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.isOpen ? 'center' : 'end')};
  position: ${({ isOpen }) => (isOpen ? 'relative' : '')};
  cursor: pointer;
`

const FirstStroke = styled.div`
  border: 1px solid var(--black);
  width: 30px;
  height: 1px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'translateY(10px)')};
  transform-origin: ${({ isOpen }) => (isOpen ? 'center' : '')};
  position: ${({ isOpen }) => (isOpen ? 'absolute' : '')};
  top: ${({ isOpen }) => (isOpen ? '50%' : '')};
  /* ${({ isOpen }) =>
    isOpen &&
    css`
          transform-origin: center,
          position: absolute,
          top: 50%
                `} */
`

const SecondStroke = styled.div`
  border: 1px solid var(--black);
  width: 30px;
  height: 1px;
  display: ${({ isOpen }) => isOpen && 'none'};
`
const ThirdStroke = styled.div`
  border: 1px solid var(--black);
  width: ${({ isOpen }) => (isOpen ? '30px' : '24px')};
  height: 1px;
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(-45deg)' : 'translateY(-10px)'};
  transform-origin: ${({ isOpen }) => (isOpen ? 'center' : '')};

  /* ${(isOpen) =>
    isOpen &&
    css`
    transform-origin: 'center',
    position: 'absolute',
    top: '50%'`} */
`

export default MenuIcon
