import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadCSV from "./Pages/UploadCSV";
import "./styles/Common.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/uploadcsv" element={<UploadCSV />} />
      
      </Routes>
    </Router>
  );
}

// Add a NotFound component to handle routes that don't match


export default App;
