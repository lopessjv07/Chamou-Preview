import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Preview from "./pages/preview";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Preview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
