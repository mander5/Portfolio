import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faNodeJs } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => window.clearTimeout(timeoutID)
  }, [])
  return (
    <div id="about" className="aboutpage">
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>{' '}
      <div className="text-zone2">
        <h1 className="h1tag about-me">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am a graduate of The University of Bath - graduating with a masters
          degree in Aerospace Engineering.
        </p>
        <p>
          During my degree I was introduced into programming and learnt to code
          in MatLab. My interest grew and started to learn other languages like
          Python and C# which I used to build simple games.
        </p>
        <p>
          After this I found Javascript and front end web developement to be a
          perfect fit for me, and have been using JS and assosiated packages to
          create websites.
        </p>
        {/* <section id="work"></section> */}
      </div>
    </div>
  )
}

export default About
