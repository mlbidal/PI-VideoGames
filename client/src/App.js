import './App.css';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import LandingPage from './Components/LandingPage';
import Home from './Components/Home'
import VideoGameCreado from './Components/VideoGameCreated'
import Detail from './Components/Detail';
import "./css/normalize.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/videogame' element={<VideoGameCreado/>}/>
          <Route exact path="/home/:id" element={<Detail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
