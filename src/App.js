import './styles/App.scss';
import './styles/Library.scss';
import { Routes, Route } from "react-router-dom";
import Page1 from './pages/Page1';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
    </Routes>
  );
}

export default App;
