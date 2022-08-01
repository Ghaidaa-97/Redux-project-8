import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../store/postSlice";
import { useNavigate } from "react-router-dom";
export default function Addpost() {
    const [post, setPost] = useState({ title: '', content: '', user_id: JSON.parse(localStorage.getItem('user')).id });
    const dispatch = useDispatch();
    const GoTo = useNavigate();
    window.scroll(0, 0);
    const handelChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(addPost(post));
        dispatch(getPosts(1));
        GoTo("/blog_detail");
    }
    console.log(post);
    return (
        <section className="blog-section padding-top padding-bottom">
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
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="blog-comment">

                                <div className="leave-comment">
                                    <h5 className="title">Write your post</h5>
                                    <form className="blog-form" onSubmit={handelSubmit}>
                                        <div className="form-group">
                                            <h6 className="mt-4">Subject </h6>
                                            <input className="mt-4" type="text" placeholder="xxxxxxxxxxxxxx" required onChange={handelChange} name='title' value={post.title} />
                                        </div>

                                        <div className="form-group">
                                            <h6 className="mt-4">What are you think  </h6>
                                            <textarea className="mt-4" placeholder="write here anything " required onChange={handelChange} name="content" value={post.content}></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Publish Now" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>

                </div>
            </div>
        </section>
    );
}