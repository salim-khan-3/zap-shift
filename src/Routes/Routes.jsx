import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import Home from "../pages/Home/Home";
import AuthLayouts from "../Layouts/AuthLayouts/AuthLayouts";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";


export const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component:Home
            }
        ]
    },
    {
        path:"/auth",
        Component:AuthLayouts,
        children:[
            {
                path:"/auth/login",
                Component:Login
            },
            {
                path:"/auth/register",
                Component:Registration
            },
            {
                path:"/auth/forgetpassword",
                Component:ForgetPassword
            }
        ]
    }
]);
