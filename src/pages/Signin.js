

import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const LOGIN_URL = '/auth';

export const Signin = () => {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);
    const [userToSend, setUserToSend] = useState({});

    const goTo = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, email])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // try {
        //     const response = await axios.post(LOGIN_URL,
        //         JSON.stringify({ user, pwd }),
        //         {
        //             headers: { 'Content-Type': 'application/json' },
        //             withCredentials: true
        //         }
        //     );
        //     console.log(JSON.stringify(response?.data));
        //     //console.log(JSON.stringify(response));
        //     const accessToken = response?.data?.accessToken;
        //     const roles = response?.data?.roles;
        //     setAuth({ user, pwd, roles, accessToken });
        //     setUser('');
        //     setPwd('');
        //     // setSuccess(true);
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     } else if (err.response?.status === 400) {
        //         setErrMsg('Missing Username or Password');
        //     } else if (err.response?.status === 401) {
        //         setErrMsg('Unauthorized');
        //     } else {
        //         setErrMsg('Login Failed');
        //     }
        //     errRef.current.focus();
        // }
        setUserToSend({ email: email, password: pwd })
        axios.post('http://127.0.0.1:8000/api/login', userToSend).then(
            (res) => {
                console.log(res)
                localStorage.setItem("user", JSON.stringify(res.data))
                goTo("/")
            }
        ).catch((err) => {
            console.log(err)
        })
    }


    return (
        <section className="account-section bg_img" data-background="./assets/images/account/account-bg.jpg">
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
                            Don't have an account? <a href="sign-up.html">sign up now</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
