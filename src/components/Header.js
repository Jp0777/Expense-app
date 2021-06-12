import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div>
                <Link to="/" className="link"> <h1>Expensify</h1></Link>
            </div>
            <div className="links">
                <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">Go Home</NavLink>
            </div>
        </div>

    )
}

export default Header;