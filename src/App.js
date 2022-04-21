import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const App = ({ children }) => {
  const { pathname } = useLocation()
  console.log(pathname)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'LOCATION_CHANGE', payload: pathname })
  }, [pathname])

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
export default App
