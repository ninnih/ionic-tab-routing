import Home from "../../pages/Home/Home";
import LogIn from "../../pages/LogIn/LogIn";
import Register from "../../pages/Register/Register";
import Start from "../../pages/Start/Start";
import UserPage from "../../pages/UserPage/UserPage";
import { RouteInterface } from "./ProtectedRoute";

export const ROUTES = [{
  name: 'Start',
  exact: true,
  path: '/',
  key: 'ROOT',
  component: Start,
  isProtected: false
},{
  name: 'Home',
  exact: true,
  path: '/home',
  key: 'HOME',
  component: Home,
  isProtected: true
},{
  name: 'My page',
  exact: true,
  path: '/user/:id',
  key: 'MYPAGE',
  component: UserPage,
  isProtected: true
},{
  name: 'Log in',
  exact: true,
  path: '/login',
  key: 'LOGIN',
  component: LogIn,
  isProtected: false
},{
  name: 'Register',
  exact: true,
  path: '/register',
  key: 'REGISTER',
  component: Register,
  isProtected: false
}] as Array<RouteInterface>

export default ROUTES