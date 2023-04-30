import SignUp from "./component/signUp";
import SignIn from "./component/signIn";
import Home from "./component/home/home";
import { Route, Routes } from "react-router-dom";



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </>
  )
}

export default App
