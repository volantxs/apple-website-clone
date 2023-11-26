const Footer = () => {

    function openDropdown(e) {
        e.preventDefault();
        let uList = e.currentTarget.parentElement.children[1];
        if (uList.style.display = "none") {
            uList.style.display = "block"
            e.currentTarget.innerHTML = "x";
        }
        else if (uList.style.display = "none") {
            uList.style.display = "none"
        }
    }

    return (
        <>
        <footer className="desktop">
            <br/><hr/>
            <div className="footer">
                <div className="row">
                <div className="col-3"> 
                <dl>
                    <dd>Shop and Learn</dd>
                    <dd>Store</dd>
                    <dd>Mac</dd>
                    <dd>iPad</dd>
                    <dd>iPhone</dd>
                    <dd>Watch</dd>
                    <dd>AirPods</dd>
                    <dd>TV & Home</dd>
                    <dd>AirTag</dd>
                    <dd>Accessories</dd>
                    <dd>gift Cards</dd>
                </dl>  
                <dl>
                    <dd>Apple Wallet</dd>
                    <dd>Wallet</dd>
                </dl> 
                </div>
                <div className="col-3"> 
                <dl>
                    <dd>Account</dd>
                    <dd>Manage Your Apple ID</dd>
                    <dd>Apple Store Account</dd>
                    <dd>iCloud.com</dd>
                </dl> 
                <dl>
                    <dd>Entertainment</dd>
                    <dd>Apple One</dd>
                    <dd>Apple TV+</dd>
                    <dd>Apple Music</dd>
                    <dd>Apple Arcade</dd>
                    <dd>Apple Podcasts</dd>
                    <dd>Apple Books</dd>
                    <dd>Apple Store</dd>
                </dl>    
                </div>
                <div className="col-3"> 
                <dl>
                    <dd>Apple Store</dd>
                    <dd>Find a Store</dd>
                    <dd>Genius Bar</dd>
                    <dd>Today at Apple</dd>
                    <dd>Apple Summer Camp</dd>
                    <dd>Ways to Buy</dd>
                    <dd>Apples Trade In</dd>
                    <dd>Recycling Programme</dd>
                    <dd>Order Status</dd>
                    <dd>Shopping Help</dd>
                </dl>   
                </div>
                <div className="col-3"> 
                <dl>
                    <dd>For Business</dd>
                    <dd>Apple and Business</dd>
                </dl>  
                <dl>
                    <dd>For Education</dd>
                    <dd>Apple and Education</dd>
                    <dd>Shop for Education</dd>
                    <dd>Shop for University</dd>
                </dl> 
                <dl>
                    <dd>For Healthcare</dd>
                    <dd>Apple in Healthcare</dd>
                    <dd>Health on Apple Watch</dd>
                </dl>  
                </div>
                <div className="col-3"> 
                <dl>
                    <dd>Apple Values</dd>
                    <dd>Accesibility</dd>
                    <dd>Environment</dd>
                    <dd>Privacy</dd>
                    <dd>Supplier Responsibility</dd>
                </dl>   
                <dl>
                    <dd>About Apple</dd>
                    <dd>Newsroom</dd>
                    <dd>Apple Leadership</dd>
                    <dd>Career Opportunities</dd>
                    <dd>Investors</dd>
                    <dd>Ethics & Compliance</dd>
                    <dd>Events</dd>
                    <dd>Contact Apple</dd>
                </dl>  
                </div>
                </div>
            </div>
            <div className="postFooter">
                    <p>More ways to shop: <a href="https://www.apple.com/in/retail/">Find an Apple Store</a> or <a href="https://locate.apple.com/">other retailer</a> near you. Or call 000800 040 1966.</p>
                <hr/>
                <div className="endnote">
                <p>Copyright 2023 Apple Inc. All rights reserved</p>
                <ul className="row">
                    <li>Privacy Policy<span>|</span></li>
                    <li>Terms of Use<span>|</span></li>
                    <li>Sales Policy<span>|</span></li>
                    <li>Legal<span>|</span></li>
                    <li>Site Map</li>
                </ul>
                <p className="end">India</p>
                </div>
                </div>

            
        </footer>

        <footer className="mobile">
            <br/><hr/>
            <div className="dropdown">
            Shop and Learn 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>
            <div className="dropdown">
            Apple Wallet 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>TV & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>
            <div className="dropdown">
            Account
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                </ul>
            </div>
            <hr/>
            <div className="dropdown">
            Entertainment 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                </ul>
            </div>
            <hr/>

            <div className="dropdown">
            Apple Store 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>

            <div className="dropdown">
            For Business 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>

            <div className="dropdown">
            For Education 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>

            <div className="dropdown">
            For Healthcare 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>TV & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>

            <div className="dropdown">
            Apple Values 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>TV & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>

            <div className="dropdown">
            About Apple 
            <span role="button" onClick={openDropdown}>+</span>
                <ul>
                    <li>Store</li>
                    <li>Mac</li>
                    <li>TV & Home</li>
                    <li>AirTag</li>
                    <li>Accessories</li>
                    <li>Gift Cards</li>
                </ul>
            </div>
            <hr/>
            <div className="postFooter">
                    <p>More ways to shop: <a href="https://www.apple.com/in/retail/">Find an Apple Store</a> or <a href="https://locate.apple.com/">other retailer</a> near you. Or call 000800 040 1966.</p>
                    <p style={{color: "black"}}>India</p>
                <div>
                <p>Copyright 2023 Apple Inc. All rights reserved</p>
                <ul className="row">
                    <li>Privacy Policy <span>|</span></li>
                    <li>Terms of Use <span>|</span></li>
                    <li>Sales Policy <span>|</span></li>
                    <li>Legal <span>|</span></li>
                    <li>Site Map</li>
                </ul>
                </div>
                </div>
        </footer>
        </>
    )
}

export default Footer;