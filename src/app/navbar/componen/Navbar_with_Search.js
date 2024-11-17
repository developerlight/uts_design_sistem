import '../style/Navbar_with_Search.css';

const Navbar_with_Search = () => {
    return (
        <nav className="navbar search-navbar">
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <form className="search-form" action="#" method="GET">
                <label htmlFor="search-input" className="visually-hidden"></label>
                <input 
                    type="text" 
                    id="search-input" 
                    className="search-input" 
                    placeholder="Search..." 
                    aria-label="Search"
                />
                <button type="submit" className="search-button">🔍</button>
            </form>
        </nav>
    );
}

export default Navbar_with_Search;
