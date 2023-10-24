import { createBrowserRouter } from "react-router-dom";
import Examen from "../Examen";
    import App from "../App";
import Error404 from "../Error404";
import Layout from "../Layout";
const router = createBrowserRouter([
{
    path: "/",
    element:<Layout/>,
    children:[
        {
            path:'/home',
            element: <App/>
        },
        
{path : '/examenes',
element: <Examen/>,
},
{path : "*",
element:<Error404/>
}


    ]
}
])
export default router;