import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
