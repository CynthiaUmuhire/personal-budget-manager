import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing";
import MainLayout from "./Layouts/MainLayout";
import AuthLayout from "./Layouts/AuthLayout";
import Home from "./pages/Home";

export default function App() {
const router  =  createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children:[
      {
        index: true,
        element : <Landing />
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])
return (
  <RouterProvider router={router} />
)

}