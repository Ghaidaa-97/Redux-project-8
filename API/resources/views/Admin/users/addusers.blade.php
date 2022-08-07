@extends('Admin.masterpage.master')
@section('title')
    Admin|| AddUsers
@endsection
@section('con')
    <div class="container-fluid">
        <div class="row clearfix">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2> Add Users </h2>

                    </div>
                    <div class="body">
                        <form id="form_validation" method="POST" action="{{ route('admin.users_save') }}"
                            novalidate="novalidate" enctype="multipart/form-data">

                            @csrf
                            <div class="form-group form-float">
                                <div class="form-line focused">
                                    <input type="text" class="form-control" name="name" required=""
                                        aria-required="true" aria-invalid="false">
                                    <label class="form-label">User Name</label>
                                </div>
                                <label id="name-error" class="error" for="name" style="display: none;"></label>
                            </div>





                            <div class="form-group form-float">
                                <div class="form-line focused">
                                    <input type="text" class="form-control" name="email" required=""
                                        aria-required="true" aria-invalid="false">
                                    <label class="form-label">User Email</label>
                                </div>
                                <label id="rating-error" class="error" for="email" style="display: none;"></label>
                            </div>
                            <div class="form-group form-float">
                                <div class="form-line error">
                                    <input name="password" type="password" cols="30" rows="5"
                                        class="form-control no-resize" required="" aria-required="true"
                                        aria-invalid="true" />
                                    <label class="form-label">Password</label>
                                </div>

                            </div>


                            <br>
                            <br>
                            <input type="hidden" name="from" value="1">
                            <button class="btn btn-primary waves-effect" type="submit">ADD User</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
