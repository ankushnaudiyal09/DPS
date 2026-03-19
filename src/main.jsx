import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
createBrowserRouter,
RouterProvider
} from "react-router-dom"

import HomePage from '../components/Homepage.jsx'
import Contact from '../components/Contact.jsx'
import About from '../components/About.jsx'

const router = createBrowserRouter([
{
path: "/",
element: <HomePage/>
},
{
path: "/about",
element: <About/>
},
{
path: "/contact",
element: <Contact/>
}
])

createRoot(document.getElementById('root')).render(
<StrictMode>
<RouterProvider router={router}/>
</StrictMode>
)