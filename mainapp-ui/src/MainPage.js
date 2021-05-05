import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./components/store/Actions/actions";


function MainPage() {
    const isAuthenticated = useSelector(state => state.isAuthenticated)
    const dispatch = useDispatch();
    const handleClick = (e) => {
        dispatch(logout())
    }
    const authLinks = (
        <Link className="btn btn-dark btn-lg" onClick={handleClick}>Logout</Link>
    );
    const guestLinks = (
        <Link className="btn btn-red btn-lg" to={{pathname: `/login`}}>Login</Link>
    );

    return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><Link className="nav-link" to={{pathname: `/breeds`}}> Breeds</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={{pathname: `/forms`}}>Forms</Link></li>
                    </ul>
                    {isAuthenticated ? authLinks : guestLinks}
                    </div>
                </nav>
    );
}


export default MainPage;