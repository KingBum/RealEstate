import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const {user} = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <Home/> : <Login/>} />
          <Route path="/login" element={user ? <Home/> : <Login/>} />
          <Route path="/create" element={user ? <Create/> : <Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
