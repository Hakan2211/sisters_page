import { useState } from 'react'
import styled from 'styled-components'

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Wrapper
      onClick={() => setIsOpen(!isOpen)}
      style={isOpen ? { position: 'relative' } : {}}
    >
      <MenuStroke
        style={
          isOpen
            ? {
                transform: 'rotate(45deg)',
                transformOrigin: 'center',
                position: 'absolute',
                top: '50%',
              }
            : {}
        }
      />
      <MenuStroke style={isOpen ? { display: 'none' } : {}} />
      <MenuStroke
        short
        style={
          isOpen
            ? {
                transform: 'rotate(-45deg)',
                transformOrigin: ' center',
                width: '30px',
                position: 'absolute',
                top: '50%',
              }
            : {}
        }
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: end;
  margin-left: 50px;
  cursor: pointer;
`

const MenuStroke = styled.div`
  border: 1px solid var(--black);
  width: ${(props) => (props.short ? '24px' : '30px')};
  height: 1px;
`
export default MenuIcon
