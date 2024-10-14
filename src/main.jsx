import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

const router = createBrowserRouter([
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/home',
        element : <Home />
      },
      {
        path : '/signin',
        element : <Signin />
      },
      {
        path : '/signup',
        element : <Signup />
      }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
