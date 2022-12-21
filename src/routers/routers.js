import Catalog from "../components/Body/Catalog/Catalog"
import Item from "../components/Body/Item/Item"
import Info from "../components/Body/Info/Info"
import About from "../components/Body/About/About"
import Main from "../components/Body/Main/Main"


export default [
    { path: '/about', element: <About /> },
    { path: '/info', element: <Info /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/catalog/:params', element: <Catalog /> },
    { path: '/item/', element: <Item /> },
    { path: '/item/:id', element: <Item /> },
    { path: '*', element: <Main /> }
]