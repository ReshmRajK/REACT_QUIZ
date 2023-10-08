import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Quiz from './Quiz'
import ScoreBoard from './ScoreBoard';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='' element={<Home/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/score/:mark' element={<ScoreBoard/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
