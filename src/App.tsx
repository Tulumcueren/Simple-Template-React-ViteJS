import './App.css'
import AboutMe from './Components/AboutMe/AboutMe'
import Contact from './Components/Contact/Contact'
import MyWorks from './Components/MyWorks/MyWorks'
import NavBar from './Components/NavBar/NavBar'
import Presentation from './Components/Presentation/Presentation'
import Testimonial from './Components/Testimonial/Testimonial'
function App() {
 
  return (
    <>
      <NavBar />
      <Presentation />
      <AboutMe/>
      <MyWorks/>
      <Testimonial/>
      <Contact/>
    </>
  )
}

export default App
