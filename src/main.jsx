import React from 'react'
import ReactDOM from 'react-dom';


import { BrowserRouter as RouterProvider } from 'react-router-dom';

import { router } from '../router/Index.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>,
)
