import "./App.css";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Routes, Route,} from 'react-router-dom';
import News from './components/News/News';
import Musics from './components/Musics/Musics';
import { Settings } from "./components/Settings/Settings";
import { Friends } from "./components/Friends/Friens";


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/dialogs/*' element={ <Dialogs state={props.state.dialogPage} />}/>
          <Route path='/profile' element={ <Profile state={props.state.profilePage} />}/>
          <Route path='/news' element={ <News />}/>
          <Route path='/music' element={ <Musics />}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/friends' element={<Friends/>}/>
          
          </Routes>    
        </div>
      </div>
  );
};

export default App;
