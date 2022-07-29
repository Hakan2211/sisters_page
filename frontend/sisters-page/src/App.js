import GlobalStyles from './styles/global-styles'

import { Routes, Route } from 'react-router-dom'
import LandingPage from './views/LandingPage/LandingPage'
import Dashboard from './views/Dashboard/Dashboard'
import Calendar from './views/Calendar/Calendar'
import About from './views/About/About'
import ComponentsTest from './views/styled-components/ComponentsTest'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/about' element={<About />} />
        <Route path='/components' element={<ComponentsTest />} />
      </Routes>
      <GlobalStyles />
    </>
  )
}

export default App
