import React from 'react';
import {NavLink} from 'react-router-dom'
import { FaUser,FaReadme,FaTty,FaCommentAlt,FaRedhat} from 'react-icons/fa';

function Navigation() {
  return (
    <div>
      <ul className="nav-items">
                <li className="nav-item">
                    <div className='nav_icon'><FaRedhat/> </div>
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                    <hr style={{marginLeft:'-1rem',width:'4.6rem', opacity:'0.2'}}/>
                </li>
                
                <li className="nav-item">
                <div className='nav_icon'><FaUser/> </div>
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                    <hr style={{marginLeft:'-1rem',width:'4.6rem',opacity:'0.2'}}/>
                </li>
                <li className="nav-item">
                <div className='nav_icon'><FaReadme/> </div>
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                    <hr style={{marginLeft:'-1rem',width:'4.6rem',opacity:'0.2'}}/>
                </li>
                
                <li className="nav-item">
                <div className='nav_icon'> <FaCommentAlt/></div>
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                    <hr style={{marginLeft:'-1rem',width:'4.6rem',opacity:'0.2'}}/>
                </li>
                <li className="nav-item">
                <div className='nav_icon'><FaTty/> </div>
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                    <hr style={{marginLeft:'-1rem',width:'4.6rem',opacity:'0.1'}}/>
                </li>
            </ul>
    </div>
  )
}

export default Navigation
