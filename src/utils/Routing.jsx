import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Pricing from "../components/Pricing"
import Login from "../components/Login"
import Signup from "../components/Signup"
import Users from "../pages/Users"
import UserInfo from "../components/UserInfo"

function Routing() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/users" element={<Users />}/>
            <Route path="/users/:id" element={< UserInfo/>}/>
        </Routes>
    </div>
  )
}

export default Routing