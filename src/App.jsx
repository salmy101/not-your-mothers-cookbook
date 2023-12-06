import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Home from './pages/Home'


// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="recipes"  element={<Dashboard />} /> 
      <Route path="favourites" element={<Create />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
)
// react will look at the loader, then fetch the data and pass it to the dashboard component
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App