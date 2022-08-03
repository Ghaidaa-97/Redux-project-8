import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBooking, getTicket, getTikets } from '../store/bookingSlice';
import Swal from 'sweetalert2';

export default function CheckOut() {
    const movie = useSelector(state => state.movies.movie);
    const tickets = useSelector(state => state.booking.tickets);
    const Ticket = useSelector(state => state.booking.ticket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTikets(movie.id));
    }
        , [dispatch, movie.id]);
    useEffect(() => {
        console.log(tickets);
    }
        , [tickets]);


    const handelChange = (e) => {
        console.log(e.target.value);
        dispatch(getTicket(e.target.value));
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        if (Ticket.price == "") {
            Swal.fire(
                {
                    title: "Please select a ticket time",
                    icon: "error",
                    confirmButtonText: "OK"
                }
            )
        }
        else {

            dispatch(addBooking({ user_id: JSON.parse(localStorage.getItem('user')).id, site_name: "when arrive", tikit_id: Ticket.id, total_price: Ticket.price, payment_method: "credit" }));
            Swal.fire({
                title: 'Booking Successful',
                text: 'You will be received a confirmation email shortly with your booking details',
                icon: 'success',

                confirmButtonColor: '#3085d6',

                confirmButtonText: 'Go to homepage'
            }).then((result) => {
                if (result.value) {
                    window.location.href = "/";
                }
            })

        }
    }

    return (
        <>

            <form onSubmit={handelSubmit}>

                <section className="details-banner hero-area bg_img seat-plan-banner" data-background={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{ 'color': 'red', 'backgroundImage': `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}>
                    <div className="container">
                        <div className="details-banner-wrapper">
                            <div className="details-banner-content style-two">
                                <h3 className="title">{movie.title}</h3>


                            </div>
                        </div>
                    </div>
                </section>

                <section className="page-title bg-one">
                    <div className="container">
                        <div className="page-title-area">
                            <div className="item md-order-1">
                                <a href="movie-ticket-plan.html" className="custom-button back-button">
                                    <i className="flaticon-double-right-arrows-angles"></i>back
                                </a>
                            </div>
                            <div className="item date-item">
                                <span className="date">MON, SEP 09 2020</span>
                                <select className="select-bar" onChange={handelChange} >

                                    <option value="none">Select a time</option>
                                    {tickets.map(ticket => (
                                        <option value={ticket.id}>{ticket.time_start} - {ticket.time_end}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="item">
                                <h5 className="title">05:00</h5>
                                <p>Mins Left</p>
                            </div>
                        </div>
                    </div>
                </section>



                <div className="movie-facility padding-bottom padding-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">



                                <div className="checkout-widget checkout-card mb-0">
                                    <h6 className="subtitle">Enter Your Card Details </h6>
                                    <form className="payment-card-form">
                                        <div className="form-group w-100">
                                            <label for="card1">Card Details</label>
                                            <input type="text" id="card1" />
                                            <div className="right-icon">
                                                <i className="flaticon-lock"></i>
                                            </div>
                                        </div>
                                        <div className="form-group w-100">
                                            <label for="card2"> Name on the Card</label>
                                            <input type="text" id="card2" />
                                        </div>
                                        <div className="form-group">
                                            <label for="card3">Expiration</label>
                                            <input type="text" id="card3" placeholder="MM/YY" />
                                        </div>
                                        <div className="form-group">
                                            <label for="card4">CVV</label>
                                            <input type="text" id="card4" placeholder="CVV" />
                                        </div>
                                        <div className="form-group check-group">
                                            <input id="card5" type="checkbox" checked />
                                            <label for="card5">
                                                <span className="title">QuickPay</span>
                                                <span className="info">Save this card information to my Boleto  account and make faster payments.</span>
                                            </label>
                                        </div>

                                    </form>
                                    <p className="notice">
                                        By Clicking "Make Payment" you agree to the <a href="#0">terms and conditions</a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="booking-summery bg-one">
                                    <h4 className="title">booking summery</h4>
                                    <ul>
                                        <li>
                                            <h6 className="subtitle">Movie name : </h6>
                                            <span className="text">{movie.title}</span>

                                        </li>
                                        <li>
                                            <h6 className="subtitle"><span>ticket time</span><span></span></h6>
                                            <div className="info"><span>start in : {Ticket.time_start}</span> <span> end in : {Ticket.time_end}</span></div>
                                        </li>

                                    </ul>


                                </div>
                                <div className="proceed-area  text-center">
                                    <h6 className="subtitle"><span>Amount Payable</span><span>${Ticket.price}</span></h6>
                                    <input type="submit" className="custom-button back-button" value="proceed" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </form>


        </>
    );
}