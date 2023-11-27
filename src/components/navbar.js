import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import  {CgShoppingBag } from 'react-icons/cg';
import  {BsApple } from 'react-icons/bs';
import { HiBars2 } from "react-icons/hi2";

const navMenu = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support']


const Navbar = () => {
    return (
        <>
        <nav className='navbar desktop'>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><BsApple size={17} /></Link>
            </span>
            {navMenu.map(item => {
                return (
                    <span>
                    <Link to="/" style={{color:"black", textDecoration: "none"}}>{item}</Link>
                    </span>
                )
            })}
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><BsSearch size={14} style={{position: "relative",top:"2px"}} /></Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><CgShoppingBag size={16}  /></Link>
            </span>
            </nav>
            {/* mobile */}
            <nav className='navbar mobile'>
                <div className='start'>  
                <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><BsApple size={17} /></Link>
            </span>
                </div>
           <div className='end'>
           <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><BsSearch size={17} style={{position: "relative",top:"2px"}} /></Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><CgShoppingBag size={17}  /></Link>
            </span>
            <span>
                <Link to="/" style={{color:"black", textDecoration: "none"}}><HiBars2 size={17}  /></Link>
            </span>
           </div>
      
            </nav>
            </>
    )
}

export default Navbar;