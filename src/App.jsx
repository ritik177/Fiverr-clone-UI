import React from "react"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Orders from "./pages/orders/Orders";
import MyGigs from "./pages/myGigs/MyGigs";
import Add from "./pages/addGigs/Add";
import Messages from './pages/message/Message';
import Message from "./pages/message/Message";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import './app.scss';



function App() {

  const Layout = ()=>{
    return(
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/gigs",
          element: <Gigs/>
        },
        {
          path: "/gig/:id",
          element: <Gig/>
        },
        {
          path: "/orders",
          element: <Orders/>
        },
        {
          path: "/mygigs",
          element: <MyGigs/>
        },
        {
          path: "/addGigs",
          element: <Add/>
        },
        {
          path: "/messages",
          element: <Messages/>
        },
        {
          path: "/message/:id",
          element: <Message/>
        },
      ]
    },
  ]);


  return (
    <div >

         <RouterProvider router={router} />
         

    </div>
  ) 
}

export default App
