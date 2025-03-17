import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { LayoutElements } from "../components/Layout/Layout"
import { MotivationPost } from "../components/Posts/Motivation"
import { WorkdirPost } from "../components/Posts/Workdir"
import { UtilitiesPage } from "../pages/Utilities" 
import { HomePage } from "../pages/Home"

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutElements/>,
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