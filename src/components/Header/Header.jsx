import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
    <img src='https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png' alt='headerKartinka'></img>
    <div className={s.logBlock}>
      {props.isAuth 
      ? props.login
      :<NavLink to={'/login'}>Login here</NavLink>}
    </div>
  </header>
}

export default Header;