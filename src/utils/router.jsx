import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/Profile/Profile";
import { Profiler } from "react";
import Services from "../components/Services/Services";
import Profile from "../components/Profile/Profile";
import Features from "../components/Features/Features";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch("/service.json")
            },
            {
                path:'/service',
                element:<Services></Services>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/features',
                element:<Features></Features>
            }
        ]
    }
])

export default router;