import './index.scss'
import LDNsportsocial from '../../assets/images/LDNsportsocial.png'
import chatgpt from '../../assets/images/chatgpt.png'
import pokegame from '../../assets/images/pokegame.png'
import forkify from '../../assets/images/forkify-home.png'
import JCGOL from '../../assets/images/JCGOL.png'
import bugtracker from '../../assets/images/bugtracker-login.png'
import tetris from '../../assets/images/pytetris.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'

const Work = () => {
  return (
    <div className="workpage">
      <div className="gallery2">
        <div className="picture">
          <img className="image image1" src={LDNsportsocial} alt="ldn"></img>
          <a
            href="https://ldnsportsocial.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="overlay">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div class="caption">
                A sports marketing startup's webpage I designed and built, using
                Figma for the wireframe and React.js for developement
              </div>
            </div>
          </a>
        </div>
        <div className="picture">
          <img className="image image1" src={chatgpt} alt="gpt"></img>
          <a
            href="https://mander5-gpt3-clone.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="overlay">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div class="caption">
                A clone of the Chat-GPT3 website made from a Figma design by AR
                Shakir
              </div>
            </div>
          </a>
        </div>
        <div className="picture">
          <img className="image image1" src={pokegame} alt="pokemon game"></img>
          <a
            href="https://guessthepokemonsbutt.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="overlay">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div class="caption">
                A web based mini game I build with React, using the PokeAPI to
                generate random pokémon sprites for the user to guess.
              </div>
            </div>
          </a>
        </div>
        <div className="picture">
          <img className="image image2" src={forkify} alt="forkify"></img>
          <a
            href="https://forkify-mander5.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="overlay">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div class="caption">
                As part of a code along challenge in Jonas Schmedtmann's JS
                course. A recipe search and display interface, using an online
                recipe API. The project uses the MVC design pattern and utilizes
                asynchronous JS for data handling.
              </div>
            </div>
          </a>
        </div>
        <div className="picture">
          <img className="image image3" src={JCGOL} alt="game of life"></img>
          <a
            href="https://mander5-conways-game.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="overlay">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div class="caption">
                A recreation of John Conway's game of life, a cellular automaton
                that models evolution determined by an initial state.
              </div>
            </div>
          </a>
        </div>
        <div className="picture">
          <img className="image image4" src={bugtracker} alt="bugtrack"></img>
          <a
            href="https://github.com/mander5/BugTracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="overlay">
              <div className="icon">
                <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div class="caption">
                A ticket and response web app created using Python/Django with
                user account creation and verification. Originally deployed on
                PythonAnywhere, but has since been taken down.
              </div>
            </div>
          </a>
        </div>
        <div className="picture">
          <img className="image image5" src={tetris} alt="tetros"></img>
          <a
            href="https://github.com/mander5/Tetris-Minigame"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="overlay">
              <div className="icon">
                <FontAwesomeIcon icon={faPython} color="#5ED4F4" />
              </div>
              <div class="caption">
                A tetris replica I created with Python and Pygame.
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Work
