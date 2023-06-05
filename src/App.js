
import Dictionary from './components/Dictionary';
import './App.css';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element = { <Dictionary/>}/>
      </Routes>
    </div>
  );
}

export default App;
