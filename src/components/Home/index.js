import ALogo from '../../assets/images/A-logo.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'o', 'n.']
  const jobArray = [
    'A',
    ' ',
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => window.clearTimeout(timeoutID)
  }, [])

  return (
    <section id="home">
      <div className="homepage">
        <div className="text-zone">
          <h1 className="h1tag">
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br></br>
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={ALogo} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>Javascript/ React/ Node.js</h2>
          <a href="mailto:aaronmander76@gmail.com" className="flat-button">
            Get In Touch
          </a>
        </div>
        <div className="logo-zone">
          <Logo />
        </div>
        <div className="container">
          <div className="field">
            <div className="scroll"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
