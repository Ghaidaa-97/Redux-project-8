// import your react model here and render it in the index.js file.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//import your pages here  (e.g. import Home from './pages/Home';)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Register } from "./pages/SignUp";
import { Signin } from "./pages/Signin";
import Blog from "./pages/Blog";
import Blog_detail from "./pages/Blog_detail";
import CheckOut from "./pages/Checkout";
import Profile from "./pages/Profile";


//import your components here (if you have any)
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import AddMoviesApi from "./pages/AddMoviesApi";
import Single_movie from "./pages/SingelMovie";


//import your css here (if you have any)
//import '../css/main.css';



export default function AppRoutes() {
    const isLoggedIn = useSelector(state => state.posts.isLoggedIn);
    return (
        <Router> {/* <Router> is a component that wraps your entire app.*/}

            <Nav /> {/* <Nav> is a component that renders the navigation bar.*/}
            <Routes> {/* <Routes> is a component that renders your routes.*/}
                {/* add your routes here  */}
                <Route path="/" element={<Home />} />

                <Route path="/single_movie/:id" element={<Single_movie />} />

                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign-up" element={<Register />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog_detail" element={isLoggedIn ? <Blog_detail /> : <Signin />} />
                <Route path="/add_post" element={isLoggedIn ? <AddPost /> : <Signin />} />
                <Route path="/edit_post" element={isLoggedIn ? <EditPost /> : <Signin />} />
                <Route path="/checkout" element={isLoggedIn ? <CheckOut /> : <Signin />} />
                <Route path="/add_movies_api" element={<AddMoviesApi />} />
                <Route path="/profile" element={isLoggedIn ? <Profile /> : <Signin />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer /> {/* <Footer> is a component that renders the footer.*/}


        </Router>

    ); //end return

} //end AppRoutes