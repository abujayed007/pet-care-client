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
import EditProduct from "../layouts/Dashboard/EditProduct";
import EditProfile from "../layouts/Dashboard/EditProfile";
import About from "../components/About";
import Category from "../pages/Home/Category";
import MyAllPets from "../layouts/Dashboard/MyAllPets";
import AllPets from "../components/AllPets";
import PetsTypes from "../components/PetsTypes";
import TotalPetCardDetails from "../components/TotalPetCardDetails";


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
            },
            {
                path:'/pets',
                element:<AllPets/>
            },
            {
                path:'/pets/:id',
                element:<TotalPetCardDetails/>,
                loader:({params}) =>fetch(`https://pet-care-server-gilt.vercel.app/pets/${params.id}`)
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/category',
                element:<Category/>,
            },
            {
                path:'/type/:type',
                element:<PetsTypes/>,
                loader:({params})=>fetch(`https://pet-care-server-gilt.vercel.app/pets/type/${params.type}`)
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
            {
                path:'/dashboard/allpets',
                element:<PrivateRoute><MyAllPets/></PrivateRoute>,
            },
            {
                path:'/dashboard/edit/:id',
                element:<PrivateRoute><EditProduct/></PrivateRoute>,
                loader: ({params}) => fetch(`https://pet-care-server-gilt.vercel.app/pets/${params.id}`)
            },
            {
                path:'/dashboard/profile/edit/:id',
                element:<PrivateRoute><EditProfile/></PrivateRoute>,
                loader:({params}) => fetch(`https://pet-care-server-gilt.vercel.app/user/${params.id}`)
            }

        ]
    }
])