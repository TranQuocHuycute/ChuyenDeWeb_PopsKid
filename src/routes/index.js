//Layout
import { HeaderOnly } from "../components/Layout";
// Page
import Home from "../pages/Home";
import Music from "../pages/Music";
import Entertaiment from "../pages/Entertaiment";
import HappyLearning from "../pages/HappyLearning";
import Learn from "../pages/Learn";
//public
const publicRoutes = [
  { path: "/", components: Home },
  { path: "/music", components: Music },
  { path: "/entertaiment", components: Entertaiment },
  { path: "/happyLearning", components: HappyLearning },
  { path: "/learn", components: Learn, layout: HeaderOnly },
];
//private
const privateRoutes = [];
export { publicRoutes, privateRoutes };
