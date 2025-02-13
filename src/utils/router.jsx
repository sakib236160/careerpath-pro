import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Profile from "../components/Profile/Profile";
import Features from "../components/Features/Features";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: async ()=>{
                    const servicesRes = await fetch("/service.json");
                    const servicesData = await servicesRes.json()

                    const feedBackRes = await fetch("/testimonials.json");
                    const feedBackData = await feedBackRes.json()

                    return {servicesData,feedBackData}
                }
            },
            {
                path:'/service',
                element:<Services></Services>,
                loader:()=> fetch("/service.json")
            },
            {
                path: '/my-profile',
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                )
            },
            {
                path:'/features',
                element:<Features></Features>
            },
            {
                path:'/details/:id',
                element:<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: async ({params})=>{
                    const res = await fetch("/service.json")
                    const data = await res.json()
                    // console.log(data,params.id)
                    const singleData = data.find(d=>d.id == params.id)
                    // console.log(singleData);
                    return singleData;
                }
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
        ]
    },
    {
        path:"*",
        element:<NotFound></NotFound>
    }
])

export default router;