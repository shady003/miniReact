import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Header/Navbar'
import Login from './components/Login/Login'
import Contact from './components/Contact/Contact'
import Layout from './Layout'
import Home from './components/Home/Home'
import TeacherSignin from './components/Login/TeacherSignin'
import About from './components/About/About'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[{
      path : "",
      element: <Home />
    },
      {
      path:"signin",
      element: <Login />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path:"tsignin",
      element: <TeacherSignin />
    },
    {
      path: "contact" ,
      element: <Contact />
    }]
  },
  ])
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
