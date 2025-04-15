import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Team from './components/Team/Team.jsx'
import ReadMore from './components/ReadMore/ReadMore.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {index: true, Component: Home},
      {path: "about", Component: About},
      {
        path: "team",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Team
      },
      {
        path: "team/:userID",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        Component: ReadMore
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
