import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const setavtive = ({isActive}) => isActive ? s.active : s.item

const Navbar = () => {
  return <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/Profile' className= {setavtive}>Profile</NavLink>
      </div>
      <div
      className={`${s.item} ${s.active}`}>
        <NavLink to='/Messages' className={setavtive} > Messages </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/News' className={setavtive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Music' className={setavtive}>Music</NavLink>
      </div>
      <div className={s.item}>
        <a href='/Settings'>Settings</a>
      </div>
    </nav>
};
export default Navbar;