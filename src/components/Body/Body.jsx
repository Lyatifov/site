import { Route, Routes } from "react-router-dom"
import PublicRoutes from "../routers/routers"



export default function Main() {

    console.log(PublicRoutes)

    return (
        <Routes>
            {
                PublicRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path} />
                )
            }
        </Routes>
    )
}