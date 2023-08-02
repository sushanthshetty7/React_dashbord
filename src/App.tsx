import Home from "./pages/home/Home"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login";
import './styles/global.scss'

function App() {


  const Layout = ()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menucontainer">
            <Menu/>
          </div>
          <div className="contentContainer">
            <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
   
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element: <Home />
        },
        {
          path:"/users",
          element: <Users />
        },
        {
          path:"/products",
          element: <Products />
        }

      ],
      
    },
    {
      path:"/login",
      element:<Login/>
      
    },
    {
      path:"/register",
      element:<Register/>
    }
    
  ]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App
