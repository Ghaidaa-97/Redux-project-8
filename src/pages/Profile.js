import React from 'react'
import "../css/main.css"

const Profile = () => {
  return (
    <>
    <section class="main-page-header speaker-banner bg_img" data-background="./assets/images/banner/banner07.jpg">
        <div class="container">
            <div class="speaker-banner-content">
                <h2 class="title">Profile</h2>
                <ul class="breadcrumb">
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        Profile
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section className="account-section bg_img" data-background="../assets/images/account/account-bg">
            <div className="container">
                <div className="padding-top padding-bottom">
                    <div className="row">
        <div class="col-md-4 ">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div class="col-md-6">
            <div class="p-3 py-">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row">
                    <div class="col-md-12"><label class="labels"></label><input type="text" class="form-group" placeholder="enter phone number" value=""/></div>
                    <div class="col-md-12"><label class="labels"></label><input type="text" class="form-group" placeholder="enter address line 1" value=""/></div>
                    <div class="col-md-12"><label class="labels"></label><input type="text" class="form-group" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels"></label><input type="text" class="form-group" placeholder="enter address line 2" value=""/></div>
                    <div class="col-md-12"><label class="labels"></label><input type="text" class="form-group" placeholder="enter address line 2" value=""/></div>
                </div>
                <div class="form-group">
                                            <input type="submit" value="Save profile" />
                                        </div>

            </div>
        </div>
    </div>
</div>
</div>
</section>
</>
  )
}

export default Profile