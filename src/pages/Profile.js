
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Profile() {

const [user,setUser] =useState(JSON.parse(localStorage.getItem('user')));
const handleOnChange=(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value,
    })
}

const handleOnSubmit=(e)=>{
    e.preventDefault()
    axios.put('http://127.0.0.1:8000/api/profile/'+user.id , user). then((res)=>{
    console.log(res)    
    setUser(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    Swal.fire({
        // title: <strong>Good job!</strong>,
        icon: 'success'
      })
}
return (
<>
<section class="main-page-header speaker-banner bg_img" data-background="./assets/images/banner/banner07.jpg">
        <div class="container">
            <div class="speaker-banner-content">
                <h2 class="title">Profile</h2>
                <ul class="breadcrumb">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>Profile</li>
                </ul>
            </div>
        </div>
    </section>
<section class="account-section bg_img" data-background="../assets/images/account/account-bg.jpeg">
            <div class="container">
                <div class="padding-top padding-bottom">
                    <div class="account-area">
                        <div class="section-header-3">
                            <h6 class="title">Profile settings</h6>
                        </div>
                        <form class="account-form" onSubmit={handleOnSubmit}>
                        <div class="btn btn-secondary d-flex align-items-center justify-content-center">
                            <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
                        <div class="form-group"><input type="file" 
                        /></div>
                        </div> 
                            <br/><div class="form-group">
                                <label htmlFor="username">
                                    Name:
                                </label>
                                <input
                                    type="text" name='name'
                                    onChange={handleOnChange}
                                    value={user.name}
                                />
                            </div>
                            <div class="form-group">
                                <label htmlFor="username">
                                    Email:
                                </label>
                                <input
                                    type="email" name='email' 
                                    onChange={handleOnChange} Value={user.email}
                                />
                            </div>
                            <div class="form-group">
                                <label htmlFor="text">
                                    Phone:

                                </label>
                                <input
                                    type="text" name='phone' placeholder='' 
                                    onChange={handleOnChange} Value={user.phone}
                                />
                            </div>
                            <div class="form-group text-center">
                                <input type="submit" value="Save changes" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
</>
);
}

export default Profile