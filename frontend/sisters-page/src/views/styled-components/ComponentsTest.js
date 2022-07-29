import { CgMathPlus } from 'react-icons/cg'
import { Button, CircularButton } from '../../components/index'

const ComponentsTest = () => {
  return (
    <>
      <h1>ComponentsTest</h1>

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
        Click
        <CgMathPlus />
      </Button>
      <Button size='small' variant='circular'>
        <CgMathPlus />
      </Button>
      <CircularButton size='small' variant='primary'>
        <CgMathPlus />
      </CircularButton>
      <CircularButton size='large' variant='primary'>
        <CgMathPlus />
      </CircularButton>
      <CircularButton size='large' variant='primary'>
        <CgMathPlus />
      </CircularButton>
    </>
  )
}
export default ComponentsTest
