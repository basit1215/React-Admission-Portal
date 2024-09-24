import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import './index.css'
import Admission from "./Pages/Admission";
import VerifyAdmission from "./Pages/VerifyAdmission";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Admission/>
            },
            {
                path: "verify",
                element: <VerifyAdmission/>
            }
        ]
        
    }
 ])

 createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
    
  )