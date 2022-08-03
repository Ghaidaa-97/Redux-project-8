
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import "../css/profile.css"

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
        title: "Updated Successfully",
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

    <div class="container-xl px-1 mt-4">
    {/* <!-- Account page navigation--> */}
    <nav class="nav nav-borders">
        <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
        <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Booked</a>

    </nav>
<br/>
    <div class="row padding-bottom d-flex align-items-center justify-content-center" id='pro'>
        <div class="col-xl-4">
            {/* <!-- Profile picture card--> */}
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Profile Picture</div>
                <div class="card-body text-center">
                    {/* <!-- Profile picture image--> */}
                    <img class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    {/* <!-- Profile picture help block--> */}
                    <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                    {/* <!-- Profile picture upload button--> */}
                    <button id="btn" type="button">Upload new image</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            {/* <!-- Account details card--> */}
            <div class="card mb-4">
                <div class="card-header">Account Details</div>
                <div class="card-body">
                    <form onSubmit={handleOnSubmit}>
                        {/* <!-- Form Group (username)--> */}
                        <div class="row gx-3 mb-3">
                        <div class="col-md-12">
                            <label class="small mb-1" for="inputUsername">Username</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username"  name='name'
                                    onChange={handleOnChange}
                                    value={user.name}/>
                        </div>
                        </div>
                        {/* <!-- Form Group (email address)--> */}
                        <div class="row gx-3 mb-3">
                        <div class="col-md-12">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" name='email' 
                                    onChange={handleOnChange} Value={user.email}/>
                        </div>
                        </div>
                        {/* <!-- Form Row--> */}
                        <div class="row gx-3 mb-3">
                            {/* <!-- Form Group (phone number)--> */}
                            <div class="col-md-12">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" name='phone' 
                                    onChange={handleOnChange} Value={user.phone}/>
                            </div>
                        </div>
                        {/* <!-- Save changes button--> */}
                        <input type="submit" value="Save changes"id="btn"/>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</>
);
}

export default Profile