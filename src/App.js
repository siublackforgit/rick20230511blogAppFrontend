import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import "./style.scss"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./page/Home"
import Login from "./page/Login"
import Register from "./page/Register"
import Single from "./page/Single"
import Write from "./page/Write"
const Layout = () => {
  return (
    <div>
     <Navbar/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

const router = createBrowserRouter(
[
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/login",
        element:<Login />,
      },
      {
        path:"/register",
        element:<Register/>,
      },
      {
        path:"/post/:id",
        element:<Single/>,
      },
      {
        path:"/write",
        element:<Write/>
      }
    ]
  }
]
)

function App() {
  return (
    <div className="app">
      <div class="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}



export default App;
