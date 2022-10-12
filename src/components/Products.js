import { Link,Outlet } from "react-router-dom"

export const Products = ()=>{
    return (
        <>
        <h1>Products</h1>
        <nav>
        <Link to='feature'> Featureproduct</Link>
        <Link to='new'> Newproduct</Link>
        </nav>
        <Outlet></Outlet>
        </>
       
    )
}