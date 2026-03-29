import "/src/App.css";

export const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-items">
                    <a href="#">Home</a>
                </li>
                <li className="nav-items">
                    <a href="#">Contact</a>
                </li>
                <li className="nav-items">
                    <a href="#">Pricing</a>
                </li>
            </ul>
        </nav>
    );
}