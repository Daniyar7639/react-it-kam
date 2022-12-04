import "./App.css";
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Routes, Route,} from 'react-router-dom';
import News from './components/News/News';
import Musics from './components/Musics/Musics';


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/Messages' element={ <Dialogs />}/>
          <Route path='/Profile' element={ <Profile />}/>
          <Route path='/News' element={ <News />}/>
          <Route path='/Music' element={ <Musics />}/>
          </Routes>    
        </div>
      </div>
  );
};

export default App;
