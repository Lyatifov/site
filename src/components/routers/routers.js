import Catalog from "../Body/Catalog/Catalog"
import Item from "../Body/Item/Item"
import Info from "../Body/Info/Info"
import About from "../Body/About/About"
import Main from "../Body/Main/Main"


export default [
    { path: '/about', element: <About /> },
    { path: '/info', element: <Info /> },
    { path: '/catalog', element: <Catalog /> },
    { path: '/item', element: <Item /> },
    { path: '*', element: <Main /> }
]