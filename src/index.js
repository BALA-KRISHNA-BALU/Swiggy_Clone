import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar  from './components/NavBar';
import Footer from './components/Footer';
import Middle from './components/Middle';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Search from './components/Search';
import Offers from './components/Offers';
import Help from './components/Help';
import Contact from './components/Contact';
import About from './components/About';
import AddCart from './components/AddCart';
import { Outlet } from 'react-router-dom';




const App = ()=>{
  return <div className='app'>
     <Navbar/>
     <Outlet/>
     <Footer/>
  </div>
}


const Ways = createBrowserRouter(
  [  
    {
      path:"/",
      element:<App/>,
      children:
      [
        {
          path:'/',
          element: <Middle/>
        }, 
        {
          path:'/search',
          element: <Search/>
        },
        {
          path:'/offers',
          element: <Offers/>
        },
        {
          path:'/help',
          element: <Help/>
        },
        {
          path:'/about',
          element: <About/>
        },
        {
          path:'/contact',
          element: <Contact/>
        }
      ]
    },
    {
      path:'/addcart',
      element:<AddCart/>
    }
  ]
)



const box = document.getElementById("container")
const root = ReactDOM.createRoot(box)
root.render(<RouterProvider router={Ways}/>)
