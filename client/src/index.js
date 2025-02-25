import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Login from './Views/Login';
import Signup from './Views/Signup';
import NotFound from './Views/NotFound';
import Home from './Views/Home';
import Dashboard from './Views/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router=createBrowserRouter([
     {
      path:"/",
      element:<Home />
     },
     {
      path:"/login",
      element:<Login/>
     },
     {
      path:"/signup",
      element:<Signup/>
     },
     {
      path:"*",
      element:<NotFound/>
     },
     {
      path:"/dashboard",
      element:<Dashboard/>
     }
])
root.render(
   <div className='bg-zinc-100 min-h-screen'>
   <RouterProvider router={router} />
   </div>
);

