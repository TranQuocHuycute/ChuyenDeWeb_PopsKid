//Layout
import PopskidLearnLayout from "../components/PopskidLearnLayout";
import LoginAndRegisterLayout from "../components/Layout/LoginAndRegisterLayout";
// Page
import Home from "../pages/Home";
import Music from "../pages/Music";
import Entertaiment from "../pages/Entertaiment";
import HappyLearning from "../pages/HappyLearning";
import Learn from "../pages/Learn";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import VideoDetail from "../pages/VideoDetail";
import Login from "../pages/Login";
import Register from "../pages/Register";
//public
const publicRoutes = [
  { path: "/", components: Home },
  { path: "/music", components: Music },
  { path: "/entertaiment", components: Entertaiment },
  { path: "/happyLearning", components: HappyLearning },
  { path: "/learn", components: Learn, layout: PopskidLearnLayout },
  { path: "/search", components: Search },
  { path: "/profile", components: Profile },
  { path: "/profile_popskidlearn", components: Profile , layout: PopskidLearnLayout },
  { path: "/videoDetail", components: VideoDetail },
  { path: "/login", components: Login  , layout : LoginAndRegisterLayout},
  { path: "/register", components: Register , layout : LoginAndRegisterLayout },

];
//private
const privateRoutes = [];
export { publicRoutes, privateRoutes };
