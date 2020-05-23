import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/asphalt">Asphalt</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/stone">Stone</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about-us">About Us</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/get-a-quote">Get A Quote</Link></li>
            </ul>
           
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
