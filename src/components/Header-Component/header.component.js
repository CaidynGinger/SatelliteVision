import logo from '../../recoreces/logo.png'
import { Link, Outlet } from "react-router-dom";
import Button from '@mui/material/Button';
import Navbar from './navbar-component/navbar.component';
import './header.component.css';


export default function Header() {
  return (
    <div className='app-container'>
      <header className='app-container-child header'>
        <div className='logo-container-main'>
          <img src={logo} alt="logo"></img>
        </div>
        <h1>Saterlite Vision</h1>
        <nav>
          <ul>
          <li className='nav-li-link'>
              <Link to="/">
                <Button className='side-nav-btn' size="large" variant="text">Dashboard</Button>
              </Link>
            </li>
            <li className='nav-li-link'>
              <Link to="/timeline">
                <Button className='side-nav-btn' size="large" variant="text">Data Visulisation</Button>
              </Link>
            </li>
            <li className='nav-li-link'>
              <Link to="/comparison">
                <Button className='side-nav-btn' size="large" variant="text">Find Saterlite</Button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className='main-app-outlet app-container-child'>
        <Navbar />
        <Outlet>

        </Outlet>
      </div>
    </div>
  );
}


