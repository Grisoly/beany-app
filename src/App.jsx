import './App.css'
import Meme from './Meme/Meme'
import { BrowserRouter } from 'react-router-dom';
import { Memegenerated } from './MemeGenerated/MemeGenerated';
import { Routes, Route } from 'react-router-dom';
import './MemeGenerated/MemeGenerated.css'


function App() {
  return (
  <div>
    <h1>BEANY_OFF SUPER MEME CREATOR</h1>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Meme/>}/>
        <Route path='/generated' element={<Memegenerated/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )  
    }

export default App;
