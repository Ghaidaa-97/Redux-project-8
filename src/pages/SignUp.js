import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../store/postSlice";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EM_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const REGISTER_URL = '/register';

export const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validem, setValidem] = useState(false);
    const [emFocus, setEmFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [userToSend, setUserToSend] = useState({})

    const isLoggedIn = useSelector(state => state.posts.isLoggedIn);
    const dispatch = useDispatch();

    const GoTo = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidem(EM_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd, email])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EM_REGEX.test(email);
        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry");
            return;
        }
        setUserToSend({ name: user, email: email, password: pwd })
        axios.post('http://127.0.0.1:8000/api/register', userToSend).then(
            (res) => {
                console.log(res)
                localStorage.setItem("user", JSON.stringify(res.data))
                dispatch(setIsLoggedIn(true))
            }
        ).catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {

        if (JSON.parse(localStorage.getItem('user'))) {
            dispatch(setIsLoggedIn(true))
            GoTo("/profile");
        }
    }, [isLoggedIn])
    return (
        <section class="account-section bg_img" data-background="../assets/images/account/account-bg.jpeg">
            <div class="container">
                <div class="padding-top padding-bottom">
                    <div class="account-area">
                        <div class="section-header-3">
                            <span class="cate">welcome</span>
                            <h2 class="title">to Boleto </h2>
                        </div>

                        <p ref={errRef}
                            className={errMsg ? "errmsg" : "offscreen"}
                            aria-live="assertive">{errMsg}</p>

                        <form class="account-form" onSubmit={handleSubmit}>

                            <div class="form-group">
                                <label htmlFor="username">
                                    Name:
                                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                            </div>
                            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                4 to 24 characters.<br />
                                Must begin with a letter.<br />
                                numbers, underscores allowed.
                            </p>
                            <div class="form-group">
                                <label htmlFor="username">
                                    Email:
                                    <FontAwesomeIcon icon={faCheck} className={validem ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validem || !email ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                    aria-invalid={validem ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                            </div>
                            <p id="uidnote" className={userFocus && email && !validem ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                example@domain.com
                            </p>


                            <div class="form-group">
                                <label htmlFor="password">
                                    Password:
                                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                            </div>
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                8 to 24 characters.<br />
                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                            <div class="form-group">
                                <label htmlFor="confirm_pwd">
                                    Confirm Password:
                                    <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                                    <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                                </label>
                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                            </div>
                            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon={faInfoCircle} />
                                Must match the first password input field.
                            </p>
                            <div class="form-group text-center">
                                <input type="submit" disabled={!validName || !validPwd || !validMatch ? true : false} value="Sign Up" />
                            </div>
                        </form>
                        <div class="option">
                            Already have an account? <a href="/sign-in">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}