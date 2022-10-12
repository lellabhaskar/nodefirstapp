import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return (
        // <h1>In Navbar</h1>
        <nav>
            <Link to='about'> About</Link>
            <Link to='products'> Products</Link>
        </nav>

    )
}