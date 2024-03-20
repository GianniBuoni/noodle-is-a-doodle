import React from "react"
import '../../src/sass/styles.scss'
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export const Logo = () => (
  <StaticImage 
        src="../../src/images/icon.png"
        alt="Noodle Is a Doodle"
  />
)

function isActive ({isCurrent}){
  return isCurrent ? {className: "active"} : null
}

const Layout = ({children}) => {
  return(
    <div>
    <nav>
      <Link to="/"
        className="logo"
      ><Logo/></Link>
      <ul>
        <li>
          <Link to="/" getProps={isActive}>Illustration</Link>
        </li>
        <li><Link to="/design" getProps={isActive}>Design</Link></li>
        <li>
          <Link to="/about" getProps={isActive}>About</Link>
        </li>
      </ul>
    </nav>
    <div className="container">{children}</div>
    <div 
      className="footer">
      <div><p>Made by Jon Simeon &copy; 2024</p></div>
    </div>
    </div>
  )
}

export default Layout