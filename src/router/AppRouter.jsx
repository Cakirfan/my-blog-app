import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../App.css";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Navbar from "../components/navbar/Navbar";
import Messages from "../components/home/Messages";
import Password from "../components/home/Password";
import Profile from "../components/home/Profile";
import Settings from "../components/home/Settings";
import SignOut from "../components/home/SignOut";

import Sidebar from "../components/sidebar/Sidebar";
import Blog from "../components/home/Blog";

const AppRouter = () => {
  
  // const [currentUser, setCurrentUser] = useState(false);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Sidebar />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="messages" element={<Messages />} />
            <Route path="password" element={<Password />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="signOut" element={<SignOut />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
