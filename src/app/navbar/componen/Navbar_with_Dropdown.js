import '../style/Navbar_with_Dropdown.css'



const Default_Navbar = () => {
    return (
        <nav class="navbar dropdown-navbar">
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li class="dropdown">
                    <a href="#">Services</a>
                    <ul class="dropdown-content">
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Marketing</a></li>
                        <li><a href="#">SEO</a></li>
                    </ul>
                </li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>


    );
}
export default Default_Navbar;