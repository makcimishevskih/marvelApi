import { NavLink, Outlet } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
    return (
        <header className='app__header'>
            <h1 className='app__title'>
                <NavLink end to='/'>
                    <span>Marvel</span> information portal
                </NavLink>
            </h1>
            <nav className='app__menu'>
                <ul>
                    <li>
                        <NavLink to='' activeclassname='active'>
                            Characters
                        </NavLink>
                    </li>
                    <span className='slash'>/</span>
                    <li>
                        <NavLink to='/comics' activeclassname='active'>
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </header>
    );
};

export default AppHeader;
