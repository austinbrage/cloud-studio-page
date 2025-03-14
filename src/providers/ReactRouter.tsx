import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HeaderSection } from "../components/Header/Header"
import { UtilitiesPage } from "../pages/Utilities" 
import { HomePage } from "../pages/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <HeaderSection/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/utilities',
                element: <UtilitiesPage/>
            }
        ]
    }
])

export function ReactRouterProvider() {
    return <RouterProvider router={router}/>
}