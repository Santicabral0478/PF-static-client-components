export const NavBar = ()=>{
    return(
        <nav>
            <form action="#">
                <div className="form-input">
                    <input type="search" placeholder="Search..."/>
                    <button className="search-btn" type="submit"><i className='bx bx-search'></i></button>
                </div>
            </form>
            <input type="checkbox" id="theme-toggle" hidden/>
        
            <a href="#" className="profile">
                <img src="assets/images/logo.png"/>
            </a>
        </nav>
    );
}

export default NavBar;