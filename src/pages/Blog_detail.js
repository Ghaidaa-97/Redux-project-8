import { useSelector } from "react-redux";


export default function Blog() {
    const post = useSelector((state) => state.posts.post);
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
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="leave-comment">
                                    <h5 className="title">leave comment</h5>
                                    <form className="blog-form">
                                        <div className="form-group">
                                            <textarea placeholder="Write A Message" required ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value="Submit Now" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-sm-10 col-md-8">
                        <aside>
                            <div className="widget widget-search">
                                <h5 className="title">Share your opinion or your question with us  </h5>


                                <button type="submit"><i className="fab fab-school"></i> Add your post now  </button>

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
                            </div>                       </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}