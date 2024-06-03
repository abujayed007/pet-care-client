import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import Shop from "../components/Shop";
import AddPets from "../layouts/Dashboard/AddPets";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard/Dashboard";
import AddProduct from "../layouts/Dashboard/AddProduct";
import MyProfile from "../layouts/Dashboard/MyProfile";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/shop',
                element:<Shop/>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            {
                path:'',
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:'/dashboard/addpet',
                element:<PrivateRoute><AddPets/></PrivateRoute>
            },
            {
                path:'/dashboard/addproduct',
                element:<PrivateRoute><AddProduct/></PrivateRoute>
            },
            {
                path:'/dashboard/profile',
                element:<PrivateRoute><MyProfile/></PrivateRoute>
            },
        ]
    }
])