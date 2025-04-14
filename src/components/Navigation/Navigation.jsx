import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [hasUser, setHasUser] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const navUlRef = useRef();

  const toggleNavMenu = e => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowNavMenu(!showNavMenu);
  };

  useEffect(() => {
    if (!showNavMenu) return;

    const closeNavMenu = e => {
      if (navUlRef.current && !navUlRef.current.contains(e.target)) {
        setShowNavMenu(false);
      }
    };

    document.addEventListener('click', closeNavMenu);

    return () => document.removeEventListener('click', closeNavMenu);
  }, [showNavMenu]);

  const closeNavMenu = () => setShowNavMenu(false);

  return (
    <nav id="nav-container">
      <div id="nav-container-left">
        <NavLink to="/" className="nav-item">
          <div className="nav-item" id="logo-icon">
            Logo Icon
          </div>
        </NavLink>
        <div className="wide-display">
          <NavLink to="/" className="nav-item nav-menu-link">
            Home
          </NavLink>
          <NavLink to="/test" className="nav-item nav-menu-link">
            Test
          </NavLink>
        </div>
      </div>
      <div id="nav-container-right">
        <div className="wide-display">
          {!hasUser && (
            <>
              <button
                className="nav-item"
                id="sign-up-button"
                onClick={() => setHasUser(true)}
              >
                Sign Up
              </button>
              <button
                className="nav-item"
                id="log-in-button"
                onClick={() => setHasUser(true)}
              >
                Log In
              </button>
            </>
          )}
          {hasUser && (
            <button
              className="nav-item"
              id="profile-button"
              onClick={() => setHasUser(false)}
            >
              User Icon
            </button>
          )}
        </div>
        <div className="mobile-display">
          <button
            className="nav-item"
            id="nav-menu-button"
            onClick={toggleNavMenu}
          >
            Navigation Menu
          </button>
          {showNavMenu && (
            <div className="nav-menu-dropdown" ref={navUlRef}>
              <NavLink
                to="/"
                onClick={closeNavMenu}
                className="nav-menu-dropdown-link"
              >
                Home
              </NavLink>
              <NavLink
                to="/test"
                onClick={closeNavMenu}
                className="nav-menu-dropdown-link"
              >
                Test
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
