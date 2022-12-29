//Layout
import PopskidLearnLayout from '../components/PopskidLearnLayout'
import LoginAndRegisterLayout from '../components/Layout/LoginAndRegisterLayout'
// Page

import Home from '../pages/Home'
import Music from '../pages/Music'
import Entertaiment from '../pages/Entertaiment'
import HappyLearning from '../pages/HappyLearning'
import Learn from '../pages/Learn'
import Search from '../pages/Search'
import Profile from '../pages/Profile'
import VideoDetail from '../pages/VideoDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchValue from '../pages/SearchValue'
import {
  Categories,
  Dashboard,
  Types,
  Videos,
  Countries,
  Users,
} from '../pages/CRUD'
import { DashboardLayout } from '../components/Layout/DashboardLayout'
import { AddVideo } from '../components/Layout/components/AddVideo'
import Subject from '../pages/Subject'
import CourseDetail from '../pages/CourseDetails'
import RegisterCourse from '../pages/RegisterCourse'
import Schedule from '../pages/Schedule'
//public
const publicRoutes = [
  { path: '/', components: Home },
  { path: '/music', components: Music },
  { path: '/entertaiment', components: Entertaiment },
  { path: '/happyLearning', components: HappyLearning },
  { path: '/learn', components: Learn, layout: PopskidLearnLayout },
  { path: '/search', components: Search },
  { path: '/profile', components: Profile },
  { path: '/:searchValue', components: SearchValue },
  {
    path: '/profile_popskidlearn',
    components: Profile,
    layout: PopskidLearnLayout,
  },
  { path: '/videoDetail/:video/:eps', components: VideoDetail },
  { path: '/login', components: Login, layout: LoginAndRegisterLayout },
  { path: '/register', components: Register, layout: LoginAndRegisterLayout },
  {
    path: '/dashboard',
    components: Dashboard,
    layout: DashboardLayout,
    exact: true,
  },
  { path: '/dashboard/videos', components: Videos, layout: DashboardLayout },
  {
    path: '/dashboard/videos/add',
    components: AddVideo,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard/videos/edit/:id',
    components: AddVideo,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard/categories',
    components: Categories,
    layout: DashboardLayout,
  },
  {
    path: '/dashboard/countries',
    components: Countries,
    layout: DashboardLayout,
  },
  { path: '/dashboard/users', components: Users, layout: DashboardLayout },
  { path: '/dashboard/types', components: Types, layout: DashboardLayout },
  { path: '/subject/:courseCateId', components: Subject, layout: PopskidLearnLayout },
  {
    path: '/courseDetails/:courseId',
    components: CourseDetail,
    layout: PopskidLearnLayout,
  },
  {
    path: '/registerCourse',
    components: RegisterCourse,
    layout: PopskidLearnLayout,
  },

  {
    path: '/schedule/:userId',
    components: Schedule,
    layout: PopskidLearnLayout,
  },
]

//private
const privateRoutes = []
export { publicRoutes, privateRoutes }
