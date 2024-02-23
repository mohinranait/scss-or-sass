import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './routes/Routes.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <RouterProvider router={myRoutes} />
    </Provider>
  </React.StrictMode>,
)
