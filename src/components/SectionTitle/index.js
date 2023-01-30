import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const SectionTitle = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => window.clearTimeout(timeoutID)
  }, [])
  return (
    <div id="work" className="section-titlepage">
      <h1 className="portfolio">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
          idx={15}
        />
      </h1>
    </div>
  )
}

export default SectionTitle
