import { useEffect, useState } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const refForm = useRef()

  useEffect(() => {
    const timeoutID = window.setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => window.clearTimeout(timeoutID)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_fjm1ccs',
        'template_azcpi2l',
        e.target,
        'K0ve1VfzRNBwmw_1R'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <div id="contact" className="contactpage">
      <div className="map-wrap">
        <div className="info-map">
          Aaron Mander,
          <br />
          United Kingdom,
          <br />
          Bow,
          <br />
          East London, <br />
          <br />
          <span>aaron_mander@hotmail.com</span>
        </div>
        <MapContainer
          center={[51.53225184668981, -0.030812014008605733]}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[51.53225184668981, -0.030812014008605733]}
          ></Marker>
        </MapContainer>
      </div>
      <div className="contact-content">
        <h1 className="contact-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Reach out using the contact form with any questions you may have and I
          will get back to you as soon as I can!
        </p>

        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
