// import your react model here and render it in the index.js file.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


//import your pages here  (e.g. import Home from './pages/Home';)
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blog_detail from "./pages/Blog_detail";

//import your components here (if you have any)
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";

//import your css here (if you have any)
//import '../css/main.css';



export default function AppRoutes() {
    return (
        <Router> {/* <Router> is a component that wraps your entire app.*/}

            <Nav /> {/* <Nav> is a component that renders the navigation bar.*/}
            <Routes> {/* <Routes> is a component that renders your routes.*/}
                {/* add your routes here  */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog_detail" element={<Blog_detail />} />
                <Route path="/add_post" element={<AddPost />} />
                <Route path="/edit_post" element={<EditPost />} />

                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer /> {/* <Footer> is a component that renders the footer.*/}


        </Router>

    ); //end return

} //end AppRoutes