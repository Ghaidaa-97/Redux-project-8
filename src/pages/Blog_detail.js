
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment, deleteComment, deletePost, editComment, getPost, getPosts } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
export default function Blog_detail() {
    const dispatch = useDispatch();
    const GoTo = useNavigate();
    const post = useSelector((state) => state.posts.post);

    console.log(post.title == "");

    const loading = useSelector((state) => state.posts.loading);
    const [comment, setComment] = useState({ user_id: "1", post_id: post.id, message: "" });
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (loading) {
            console.log("loading");
        }
        else {
            if (post.title == "") {
                GoTo("/blog");
            }
        }
    }, []);
    const handelSubmit = (e) => {
        e.preventDefault();
        if (edit) {
            dispatch(editComment(comment));
            setEdit(false);
            dispatch(getPost(post.id));
            setComment({ user_id: "1", post_id: post.id, message: "" });
        } else {
            dispatch(addComment(comment));
            setComment({ user_id: "1", post_id: post.id, message: "", id: "" });
        }
        window.scrollTo(20, 160)
    }

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [])


    return (
        <section className="blog-section padding-top padding-bottom">
            {loading ? <div className="preloader">
                <div className="preloader-inner">
                    <div className="preloader-icon">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div> : null}
            <div className="container">
                <div className="row justify-content-center mb-30-none">
                    <div className="col-lg-8 mb-50 mb-lg-0">
                        <article>
                            <div className="post-item post-details">
                                <div className="post-thumb">
                                    {post.image ?
                                        <img src={'' + post.image} alt="blog" /> : null}
                                </div>
                                <div className="blog-author">
                                    <div className="author-thumb">
                                        <a href="#0">
                                            <img src="./assets/images/blog/author.jpg" alt="blog" />
                                        </a>
                                    </div>
                                    <div className="author-content">
                                        <h6 className="title">
                                            <a href="#0">
                                                {post.name}
                                            </a>
                                        </h6>
                                        <div className="post-header">
                                            <h4 className="m-title mb-3 mt-1">
                                                {post.title}
                                            </h4>
                                            <p>
                                                {post.content}
                                            </p>
                                            <div className="row">
                                                <a>

                                                    <button onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(deletePost(post.id));
                                                        GoTo("/blog")
                                                    }} className="bg-danger" >Delete Post </button>
                                                </a>
                                                <a>

                                                    <button onClick={(e) => {
                                                        e.preventDefault();
                                                        GoTo("/edit_post")
                                                    }} className="bg-dark" >Edit Post </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="blog-comment">
                                <h5 className="title">comments</h5>
                                <ul className="comment-area">
                                    {post.comments.map((comment) => (
                                        <li>
                                            <div className="blog-thumb">
                                                <a href="#0">
                                                    <img src="./assets/images/blog/author.jpg" alt="blog" />
                                                </a>
                                            </div>
                                            <div className="blog-thumb-info">
                                                <span></span>
                                                <h6 className="title"><a href="#0">{comment.name}</a></h6><br />
                                            </div>
                                            <div className="blog-content">
                                                <p>
                                                    {comment.message}
                                                </p>
                                                <div className="row mt-5" >
                                                    <a>
                                                        <button onClick={(e) => {
                                                            e.preventDefault();
                                                            window.scrollTo(500, 500)
                                                            setComment({ user_id: "1", post_id: post.id, message: comment.message, id: comment.id })
                                                            setEdit(true)
                                                        }} className="bg-dark" >Edit </button>
                                                    </a>
                                                    <a>
                                                        <button onClick={(e) => {
                                                            e.preventDefault();
                                                            dispatch(deleteComment(comment.id));
                                                            dispatch(getPost(post.id));

                                                        }} className="bg-danger" > delete </button>
                                                    </a>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="leave-comment">
                                    <h5 className="title">leave comment</h5>
                                    {edit ? <form className="blog-form" onSubmit={handelSubmit}>
                                        <div className="form-group">
                                            <input type="text" placeholder="Write A Message" required value={comment.message} onChange={(e) => { setComment({ ...comment, ['message']: e.target.value }) }} />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Submit Now" />
                                        </div>
                                    </form> :
                                        <form className="blog-form" onSubmit={handelSubmit}>
                                            <div className="form-group">
                                                <input type="text" placeholder="Write A Message" required value={comment.message} onChange={(e) => { setComment({ ...comment, ['message']: e.target.value }) }} />
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Submit Now" />
                                            </div>
                                        </form>
                                    }
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-sm-10 col-md-8">
                        <aside>
                            <div className="widget widget-search">
                                <h5 className="title">Share your opinion or your question with us  </h5>


                                <button type="submit" onClick={(e) => {
                                    e.preventDefault();
                                    GoTo("/add_post")
                                }}><i className="fab fab-school"></i> Add your post now  </button>

                            </div>

                            <div className="widget widget-follow">
                                <h5 className="title">Follow Us</h5>
                                <ul className="social-icons">
                                    <li>
                                        <a href="#0" className="">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="active">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0" className="">
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#0">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div >
            </div >
        </section >
    );
}