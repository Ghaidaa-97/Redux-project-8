import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '../store/postSlice';
import { NavLink } from 'react-router-dom';
import '../css/main.css';
export default function Nav() {
    const isLoggedIn = useSelector(state => state.posts.isLoggedIn);
    const dispatch = useDispatch();
    const [domain, setDomain] = useState(window.location.pathname);


    useEffect(() => {
        setDomain(window.location.pathname);
    }, [])


    return (

        <header class="header-section">
            <div class="header-wrapper">
                {/* <div class="logo mr-auto ">
                        <NavLink to="/">
                            <img src="./assets/images/logo/logo.png" alt="logo" />
                        </NavLink>
                    </div> */}
                <div class="container">

                    <ul class="menu ">
                        <li class="logo mr-auto ">
                            <img src="./assets/images/logo/logo.png" alt="logo" />
                        </li>

                        <li>
                            <NavLink to="/"  >Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog"  >Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">contact Us</NavLink>
                        </li>
                        {!isLoggedIn ?
                            <>
                                <li class="header-button pr-0 ml-auto" >
                                    <NavLink to="/sign-in">Sign In</NavLink>
                                </li>
                            </> :
                            <>
                                <li>
                                    <NavLink to="/profile"  >Profile</NavLink>
                                </li>
                                <li class="header-button pr-0 ml-auto">
                                    <NavLink to={domain} onClick={
                                        (e) => {
                                            e.preventDefault();
                                            localStorage.removeItem('user');
                                            dispatch(setIsLoggedIn(false));
                                        }
                                    }>Logout</NavLink>
                                </li>
                            </>
                        }

                    </ul>
                </div>
                <div class="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>

    );
}   