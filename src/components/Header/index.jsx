import React, { useCallback, useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import logoGreen from '../../assets/logoGreen.png';
import filter from '../../assets/filter.svg';
import menu from '../../assets/menu.png';
import Navigation from '../Navigation/';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

const Header = ({
    location
}) => {
    const isAuthorized = true;
    const history = useHistory();
    const [isMobileNavOpened, setMobileNavOpened] = useState(false);

    const handleClick = useCallback((event) => {
       setMobileNavOpened(true);
    }, []);

    const handleClose = useCallback((event) => {
        setMobileNavOpened(false);
        history.goBack();
     }, [history]);

    useEffect(() => {
        if (location.pathname !== '/navigation') {
            setMobileNavOpened(false);
        }
     }, [location]);

    return (
            <header className={isMobileNavOpened ? "header header_white" : "header"}>
                <img src={isMobileNavOpened ? logoGreen: logo} className="logo" alt="logo" />
                <Link to="/navigation">{isMobileNavOpened
                ? <p className="close" onClick={handleClose}>X</p>
                : <img src={menu} alt="menu" className="menu" onClick={handleClick} />
                }
                </Link>
                {isAuthorized && (
                    <div className="right_container">
                    <Navigation />
                    <img src={filter} alt="active" className="filter" />
                    </div>
                )}
            </header>
    );
};

export default Header;