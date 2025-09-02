import './App.css';
import FirstApp from './FirstApp';
import { Route , Routes } from 'react-router-dom';
import SecApp from './SecApp';
function App() {
  return (
    <div className="App">

      {/* {Routes} */}
      <Routes>

        <Route path="/" element={<FirstApp/>}/>

        <Route path="/SecApp" element={<SecApp/>}/>

      </Routes>
    </div>
  );
}

export default App;
