import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AuthLayout from "./components/authLayout/AuthLayout"
import NotFound from "./components/notfoundPage/NotFound"
import MasterLayout from "./components/masterLayout/MasterLayout"
import Login from "./components/authLayout/login/Login"
import Protect from "./protectedRoutes/Protect"
import Register from "./components/authLayout/register/Register"
import ForgetPassword from "./components/authLayout/forgetPassword/ForgetPassword"
import ResetPassword from "./components/authLayout/ResetPassword/ResetPassword"
import Home from "./components/dashboard/home/Home"
import ChangePassword from "./components/dashboard/changePassword/ChangePassword"
import Cart from "./components/dashboard/Cart.tsx/Cart"


function App() {
const routes = createBrowserRouter([
  {path:'/',element:<AuthLayout/>,
    errorElement:<NotFound/>,
    children:[
      {path:'/',element:<Login/>},
      {path:'login',element:<Login/>},
      {path:'register',element:<Register/>},
      {path:'forget-password',element:<ForgetPassword/>},
      {path:'reset-password',element:<ResetPassword/>},
      {path:'change-password',element:<ChangePassword/>}


    ]
  },
  {path:"/dashboard",element:<Protect><MasterLayout/></Protect>,
    errorElement:<NotFound></NotFound>,
    children:[
      {index:true,element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'cart',element:<Cart/>}
    ]

  }
])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
