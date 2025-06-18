import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import{ createBrowserRouter, RouterProvider} from 'react-router-dom'
import All_page from '../Page/admin_songs.jsx'
import Users from '../Page/users.jsx'
import Error from '../Page/Error.jsx'
import Login from '../Page/Login.jsx'
import Regs from '../Page/regs.jsx'
import AvtGet from '../Page/AvtGet.jsx'
import Add  from '../Page/Add.jsx'
import Admin_songs from '../Page/admin_songs.jsx'


const route = createBrowserRouter([
  {
    path: '/admin_songs',
    element: <Admin_songs/>
  },
  {
    path: '/AvtGet',
    element: <AvtGet/>
  },
  {
    path: '/Add',
    element: <Add/>
  },
  {
    path: '/users',
    element: <Users/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/App',
    element: <App/>
  },
  {
    path: '/regs',
    element: <Regs/>
  },
  {
    path: '*',
    element: <Error/>
  },
  {
  path: '/',
    element: <App/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
    {/* <App /> */}
  </StrictMode>,
)
