import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import  {CgShoppingBag } from 'react-icons/cg';
import  {BsApple } from 'react-icons/bs';

const Navbar = () => {
    return (

        <nav className='navbar'>
            <span>
                <Link to="/" style={{textDecoration: "none"}}><BsApple size={16} /></Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>Store</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>Mac</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>iPad</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>iPhone</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>Watch</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>AirPods</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>TV & Home</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>Entertainment</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>Accessories</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}>Support</Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}><BsSearch size={14} style={{position: "relative",top:"2px"}} /></Link>
            </span>
            <span>
                <Link to="/" style={{ textDecoration: "none"}}><CgShoppingBag size={16}  /></Link>
            </span>
            </nav>
            
    )
}

export default Navbar;