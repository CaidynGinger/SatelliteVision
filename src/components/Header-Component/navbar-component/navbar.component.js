
import './navbar.components.css'

import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.png'
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <nav className='app-bar-nav'>
      <ul>
        <li id='menu-button' className='app-bar-item'>
          <IconButton aria-label="delete">
            <MenuIcon sx={{
              fontSize: 40,
              color: '#000000'
            }} />
          </IconButton>
        </li>
        <li className='app-bar-item'><h2>Home</h2></li>
        <li className='app-bar-item'>
          <div className='logo-container'>
            <img src={logo} alt='Logo' />
          </div>
        </li>
      </ul>
    </nav>
  )
}





