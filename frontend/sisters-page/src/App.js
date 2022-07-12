import { Button, CircularButton } from './components'
import GlobalStyles from './styles/global-styles'
import { CgMathPlus } from 'react-icons/cg'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <h1>Starter</h1>
      <Button size='medium' variant='primary'>
        Click
      </Button>
      <Button size='small' variant='secondary'>
        Click
      </Button>
      <Button size='large' variant='outline'>
        Click
      </Button>
      <Button size='medium' variant='white'>
        Click
      </Button>
      <Button size='medium' variant='round'>
        Click
      </Button>
      <Button size='medium' variant='buttonWithIcon'>
        <CgMathPlus />
        Click
      </Button>
      <Button size='small' variant='circular'>
        <CgMathPlus />
      </Button>
      <CircularButton size={'small'}>
        {' '}
        <CgMathPlus />
      </CircularButton>
    </>
  )
}

export default App
