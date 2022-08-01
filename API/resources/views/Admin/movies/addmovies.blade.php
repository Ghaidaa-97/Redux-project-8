@extends('Admin.masterpage.master')
@section('title')
    Admin|| AddMovies
@endsection
@section('con')

<div class="container-fluid">
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2> Add Movie </h2>

                </div>
                <div class="body">
                    <form id="form_validation" method="POST" action="{{route('admin.movies_save')}}" novalidate="novalidate" enctype="multipart/form-data">

                        @csrf
                        <div class="form-group form-float">
                            <div class="form-line focused">
                                <input type="text" class="form-control" name="title" required="" aria-required="true" aria-invalid="false">
                                <label class="form-label">Movie Title</label>
                            </div>
                        <label id="name-error" class="error" for="name" style="display: none;"></label>
                    </div>





                    <div class="form-group form-float">
                        <div class="form-line focused">
                        <input type="text" class="form-control" name="rating" required="" aria-required="true" aria-invalid="false">
                        <label class="form-label">Rating</label>
                    </div>
                <label id="rating-error" class="error" for="rating" style="display: none;"></label>
            </div>
                    <div class="form-group form-float">
                            <div class="form-line error">
                                <textarea name="description" cols="30" rows="5" class="form-control no-resize" required="" aria-required="true" aria-invalid="true"></textarea>
                                <label class="form-label">Description</label>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <b>Date</b>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="material-icons">date_range</i>
                                </span>
                                <div class="form-line">
                                    <input type="text" class="form-control date" placeholder="Ex: 30/07/2016" name="release_date">
                                </div>
                            </div>
                        </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Chose Movie Image</label>
                        <input class="form-control" type="file" id="formFile" name="poster_path">
                    </div>
                    <br>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Chose Movie Cover</label>
                        <input class="form-control" type="file" id="formFile" name="backdrop_path">

                    </div>
                    <br>
                    <br>
                    <input type="hidden" name="from" value="1">
                    <button class="btn btn-primary waves-effect" type="submit">ADD Movie</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
