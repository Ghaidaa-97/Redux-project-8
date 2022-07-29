import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost, getPosts } from "../store/postSlice";
import { useNavigate } from "react-router-dom";


export default function () {
    const GoTo = useNavigate();
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const handelClick = (e, post_id) => {
        e.preventDefault();
        dispatch(getPost(post_id));
        alert("Post id: " + post_id);
        GoTo("/blog_detail")
    }


    const posts = useSelector((state) => state.posts.posts);

    const state = useSelector((state) => state);

    const dispatch = useDispatch();
    useEffect(() => {
        console.log(state);
        console.log(lastPage);
        setLastPage(state.posts.lastPage);

    }
        , [state]);
    useEffect(() => {

        dispatch(getPosts(page));
        window.scrollTo(20, 390)
    }, [page]);

    return (
        <>
            <section className="main-page-header speaker-banner bg_img" data-background="./assets/images/banner/banner07.jpg">
                <div className="container">
                    <div className="speaker-banner-content">
                        <h2 className="title">blog - 01</h2>
                        <ul className="breadcrumb">

                            <li>
                                blog
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="blog-section padding-top padding-bottom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 mb-50 mb-lg-0">
                            <article>
                                {posts.map((post) => (
                                    <div className="post-item" key={post.id}>
                                        <div className="post-thumb">
                                            {post.image != null ? <a href="blog-details.html">
                                                <img src="./assets/images/blog/blog01.jpg" alt="blog" />
                                            </a> : null}

                                        </div>
                                        <div className="post-content">
                                            <div className="post-header">
                                                <h4 className="title">
                                                    <a href="blog-details.html">
                                                        {post.title}
                                                    </a>
                                                </h4>
                                                <div className="meta-post">
                                                    <a href="#0" className="mr-4"><i className="flaticon-conversation"></i>20 Comments</a>
                                                    <a href="#0"><i className="flaticon-view"></i>466 View</a>
                                                </div>
                                                <p>
                                                    {post.content}
                                                </p>
                                            </div>
                                            <div className="entry-content">
                                                <div className="left">
                                                    <span className="date">
                                                        {

                                                            post.created_at

                                                        }
                                                    </span>
                                                    <div className="authors">
                                                        <div className="thumb">
                                                            <a href="#0"><img src="./assets/images/blog/author.jpg" alt="#0" /></a>
                                                        </div>
                                                        <h6 className="title"><a href="#0">{post.name}</a></h6>
                                                    </div>
                                                </div>
                                                <a href="" className="buttons" onClick={(e) => {

                                                    handelClick(e, post.id)
                                                }}>Read More <i className="flaticon-right"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </article>
                            <div className="pagination-area text-center widget widget-search"  >
                                <ul>

                                    <div class="entry-content">

                                        <div class="row">
                                            <li>

                                                <a>
                                                    {page == 1 ? null : <button onClick={() => { setPage(page - 1) }} className="bg-dark"><i className="fas fa-angle-double-left disable"></i><span>Prev</span></button>}
                                                </a>
                                            </li>


                                            <li>
                                                <a>
                                                    {page == lastPage ?

                                                        null

                                                        :
                                                        <button onClick={() => { setPage(page + 1) }} className="bg-dark">
                                                            <span>Next</span>
                                                            <i className="fas fa-angle-double-right disable"></i>
                                                        </button>}
                                                </a>
                                            </li>
                                        </div>
                                    </div>
                                </ul>
                            </div>
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
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </section >

        </>
    );
}