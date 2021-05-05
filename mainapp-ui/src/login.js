import React, {useState, useEffect} from 'react';
import './App.css';
import {Link, Redirect} from "react-router-dom";
import {login} from "./components/store/Actions/actions";
import {useDispatch, useSelector} from "react-redux";

function LoginPage() {
    const isAuthenticated = useSelector(state => state.isAuthenticated)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({username: '', password: ''});


    const loginUser = (e) => {
        e.preventDefault();
        debugger;
        e.preventDefault();
        debugger;
        dispatch(login(formData.username, formData.password))
        //then(response => {
        //     setRedirect(true)
        // }).catch(err => {
        //     if (err.response) {
        //         alert("Bad request")
        //     } else if (err.request) {
        //         alert("Error")
        //     }
        // })
    }
    const onChange = (e) => {
        e.persist();
        debugger;
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    if (isAuthenticated) {
        return <Redirect to={{pathname: `/`}}/>
    }
    return (
        <div>
            <form onSubmit={loginUser}>
                <input type="hidden" name="csrfmiddlewaretoken"
                       value="0pmpXbOsJcizwf95KkMx2zLtTewOy8CTVHQFqn3JRsSoWPoHqkkWpXktslABmAAC"/>
                <div class="form-outline mb-4" style={{'margin-left': '500px'}}>
                    <input type="text" name="username" className="input" placeholder="Username"
                           maxLength="100" required
                           id="id_username" onChange={onChange}/>
                </div>

                <div class="form-outline mb-4" style={{'margin-left': '500px'}}>
                    <input type="password" name="password" className="input" placeholder="Password" maxLength="100"
                           required
                           id="password" onChange={onChange}/>
                </div>

                    <input className='btn btn-outline-dark btn-lg btn-block mb-4' style={{'margin-left': '500px'}}
                     type="submit" value="Hello Brotherhood"/>

                <div className="text-center">
                    <p>Not a member? <Link to={{pathname: `/register`}} className="btn btn-link">Sing up</Link></p>
                    <p>or sign up with:</p>
                    <div className="row">
                        <div className="col-md-12"><a
                            className="btn btn-lg btn-block  btn-light" href="#"><img
                            src="https://img.icons8.com/color/16/000000/google-logo.png"/> Signup Using Google</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}


export default LoginPage;