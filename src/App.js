import './App.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import SectionTitle from './components/SectionTitle'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <SectionTitle />
      <Work />
      <Contact />
    </div>
  )
}

export default App
