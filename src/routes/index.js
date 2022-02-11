

import Login from "../pages/Login"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Personel from "../pages/Personel"
import HumanResources from "../pages/HumanResources"
import Meeting from "../pages/Meeting"
import Budget from "../pages/Budget"
import Plan from "../pages/Plan"

const routes = [
    {
        path: '/',
        element: (

                <Home/>

        )
    },
    {
        path:'/personel',
        element:<Personel/>
    },
    {
        path:'/humanresources',
        element:<HumanResources/>
    },
    {
        path:'/meeting',
        element:<Meeting/>
    },
    {
        path:'/budget',
        element:<Budget/>
    },
    {
        path:'/plan',
        element:<Plan/>
    },

    {
        path: '/login',
        element:<Login/>
    },
    {
        path:'*',
        element:<Error/>
    }
    
]

export default routes