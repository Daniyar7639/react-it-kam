import "./App.css";
import Navbar from './components/Navbar/Navbar';
import {Routes, Route,} from 'react-router-dom';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import { Settings } from "./components/Settings/Settings";
import { Friends } from "./components/Friends/Friens";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = (props) => {
   
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/dialogs/*' element={ <DialogsContainer /> }/>
          <Route path='/profile/' element={ <ProfileContainer />}/>
          <Route path='/profile/:userId' element={ <ProfileContainer />}/>
          <Route path='/users' element={ <UsersContainer />}/>
          <Route path='/news' element={ <News />}/>
          <Route path='/music' element={ <Musics />}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/friends' element={<Friends/>}/>
          <Route path='/login' element={<Login/>}/>
          </Routes>    
        </div>
      </div>
  );
};

export default App;
