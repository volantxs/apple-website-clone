const navMenu = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support']

const MobileNav = () => {
    return (
        <div className="mobile-nav">
            <ul>
            {navMenu?.map(item => {
                <li>
                   {item} 
                </li>
            })} 
            </ul>


        </div>
    ) 
    
}

export default MobileNav;