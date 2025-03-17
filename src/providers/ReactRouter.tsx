import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { MotivationPost } from "../components/Posts/Motivation"
import { HeaderSection } from "../components/Header/Header"
import { WorkdirPost } from "../components/Posts/Workdir"
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
                path: '/utilities/faas',
                element: <UtilitiesPage/>
            },
            {
                path: '/blog/motivation',
                element: <MotivationPost/>
            },
            {
                path: '/blog/workdir',
                element: <WorkdirPost/>
            }
        ]
    }
])

export function ReactRouterProvider() {
    return <RouterProvider router={router}/>
}