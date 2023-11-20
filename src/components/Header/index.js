// Write your code here
import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const hamburger = <GiHamburgerMenu />
const closeButton = <IoMdClose color="#616e7c" size="20" />

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="web-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="hamburger-button"
          data-testid="hamburgerIconButton"
        >
          {hamburger}
        </button>
      }
    >
      {close => (
        <div className="popup-card">
          <button
            type="button"
            className="close-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            {closeButton}
          </button>
          <ul className="icons-card">
            <li>
              <Link to="/" className="link">
                <AiFillHome />
                <p className="link-para">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                <BsInfoCircleFill />
                <p className="link-para">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default withRouter(Header)
