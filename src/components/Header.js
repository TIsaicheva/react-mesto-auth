import logo from '../images/logo.svg';

function Header() {
    return(
        <header className="header">
            <div className="logo" style={{ backgroundImage: `url(${logo}) no-repeat` }} ></div>
        </header>
    );
}

export default Header;