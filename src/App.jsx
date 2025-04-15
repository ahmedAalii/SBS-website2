import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Components/Layout/Layout';
import Conference from './Components/Conference/Conference';
import About from './Components/About/About';
import Events from './Components/Events/Events';
import Joinus from './Components/Joinus/Joinus';
import Login from './Components/Login/Login';
import Notfound from './Components/Notfound/Notfound';
import Home from './Components/Home/Home';


let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [

      { index: true, element: <Home /> },
      { path: 'conference', element: <Conference /> },
      { path: 'about', element: <About /> },
      { path: 'events', element: <Events /> },
      { path: 'join-us', element: <Joinus /> },
      { path: 'login', element: <Login /> },
      { path: 'notfound', element: <Notfound /> },
    ]
  },


])

function App() {

  return <RouterProvider router={x}>

  </RouterProvider>
}
export default App;
