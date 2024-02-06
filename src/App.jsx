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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

// Add a NotFound component to handle routes that don't match
function NotFound() {
  return <h1>404 - Not Found</h1>;
}

export default App;
