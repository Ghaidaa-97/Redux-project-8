

import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { setIsLoggedIn } from '../store/postSlice';
import { useDispatch, useSelector } from 'react-redux';




export const Signin = () => {
    window.scrollTo(20, 0)

    const userRef = useRef();
    const errRef = useRef();
    //entries the user inputs
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    //user state
    const [userToSend, setUserToSend] = useState({});


    const GoTo = useNavigate();

    const isLoggedIn = useSelector(state => state.posts.isLoggedIn);
    const dispatch = useDispatch();
    useEffect(() => {
        userRef.current.focus();
        if (JSON.parse(localStorage.getItem('user'))) {
            dispatch(setIsLoggedIn(true));
            GoTo('/profile');
        }
    }, [isLoggedIn])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, email])

    const handleSubmit = async (e) => {
        e.preventDefault();


        setUserToSend({ email: email, password: pwd })
        axios.post('http://127.0.0.1:8000/api/login', userToSend).then(
            (res) => {
                console.log(res)
                localStorage.setItem("user", JSON.stringify(res.data))
                dispatch(setIsLoggedIn(true));
            }
        ).catch((err) => {
            console.log(err)
        })
    }


    return (
        <section className="account-section bg_img" data-background="../assets/images/account/account-bg.jpeg">
            <div className="container">
                <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                            <span className="cate">hello</span>
                            <h2 className="title">welcome back</h2>
                        </div>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <form className="account-form" onSubmit={handleSubmit}>
                            {/* {error && <Alert variant="danger">{error}</Alert>} */}
                            <div className="form-group">
                                <label htmlFor="username">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                            </div>
                            <div className="form-group checkgroup">
                                <input type="checkbox" id="bal2" required checked />
                                <label for="bal2">remember password</label>
                                <a href="#0" className="forget-pass">Forget Password</a>
                            </div>
                            <div className="form-group text-center">
                                <input type="submit" value="log in" />
                            </div>
                            {/* {isLoading && <Spinner variant="primary" animation="border" />} */}
                        </form>
                        <div className="option">
                            Don't have an account? <a href="sign-up">sign up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
