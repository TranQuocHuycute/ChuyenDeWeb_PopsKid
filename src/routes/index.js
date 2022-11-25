//Layout
import { HeaderOnly } from "../components/Layout";
import BottomNavOnly from "../components/Layout/BotomNavOnly";
import PopskidLearnLayout from "../components/PopskidLearnLayout";
// Page
import Home from "../pages/Home";
import Music from "../pages/Music";
import Entertaiment from "../pages/Entertaiment";
import HappyLearning from "../pages/HappyLearning";
import Learn from "../pages/Learn";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
import VideoDetail from "../pages/VideoDetail";

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
];
//private
const privateRoutes = [];
export { publicRoutes, privateRoutes };
