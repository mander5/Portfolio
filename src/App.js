import './App.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import SectionTitle from './components/SectionTitle'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <SectionTitle />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
