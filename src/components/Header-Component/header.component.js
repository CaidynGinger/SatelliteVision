import './header.component.css';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Navbar from './navbar-component/navbar.component';

export default function Header() {
  return (
    <div className='app-container'>
      <header className='app-container-child header'>
        <h1>Bookkeeper!</h1>
        <nav>
          <ul>
            <li><Link to="/data-visulisation">Data Visulisation</Link></li>
            <li><Link to="/find-saterlite">Find Saterlite</Link></li>
            <Button variant="contained">Hello World</Button>
          </ul>
        </nav>
      </header>
      <div className='main-app-outlet app-container-child'>
        <Navbar/>
      </div>
    </div>
  );
}


