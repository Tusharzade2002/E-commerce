import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import Login from './Views/Login';
import Signup from './Views/Signup';
import NotFound from './Views/NotFound';
import Home from './Views/Home';

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
     }
])
root.render(
   <RouterProvider router={router} />
);

