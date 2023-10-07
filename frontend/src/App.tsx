import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { useState } from "react";
const App = () => {
  const [isLoggedIn, setIsLoggedin] = useState(true);
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
