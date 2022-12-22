import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const setactive = ({isActive}) => isActive ? s.active : s.item

const Navbar = () => {
  return <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className= {setactive}>Profile</NavLink>
      </div>
      <div
      className={`${s.item} ${s.active}`}>
        <NavLink to='/dialogs' className={setactive} > Messages </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users' className={setactive}>Users</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={setactive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={setactive}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={setactive}>Settings</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends' className={setactive}>Friends</NavLink>
      </div>
    </nav>
};
export default Navbar;