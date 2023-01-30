import './index.scss'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'contact']
      const sectionOffsets = sections.map((section) => {
        return document.querySelector(`#${section}`).offsetTop
      })

      let closestSection = sections[0]
      let closestDistance = Math.abs(window.pageYOffset - sectionOffsets[0])

      sections.forEach((section, index) => {
        const distance = Math.abs(window.pageYOffset - sectionOffsets[index])
        if (distance < closestDistance) {
          closestSection = section
          closestDistance = distance
        }
      })

      setActiveSection(closestSection)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const getLinkClass = (section) => {
    return activeSection === section ? 'active' : ''
  }

  return (
    <nav>
      <div className="navbar">
        <ul>
          <li>
            <a className={getLinkClass('home')} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={getLinkClass('about')} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={getLinkClass('work')} href="#work">
              Portfolio
            </a>
          </li>
          <li>
            <a className={getLinkClass('contact')} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
