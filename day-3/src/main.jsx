import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './routes/Routes.jsx'
import './styles/base/_index.scss'
import { Provider } from 'react-redux'
import store from './features/store.js'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={myRoutes} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
