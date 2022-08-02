@extends('Admin.masterpage.master')
@section('title')
    Admin|| Edit Tickets
@endsection
@section('con')

<div class="container-fluid">
    <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2> Edit Tickets </h2>

                </div>
                <div class="body">
                    <form id="form_validation" method="POST" action="{{route('admin.tickets_update' , $ticket->id )}}" novalidate="novalidate" >
                        @method('PUT')
                        @csrf
                  




                 
                        <div class="col-md-3">
                            <b>Date</b>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="material-icons">date_range</i>
                                </span>
                                <div class="form-line">
                                    <input type="text" class="form-control date" placeholder="Ex: 30/07/2016" name="date" value="{{$ticket->date}}">
                                </div>
                            </div>
                        </div>


                        <div class="col-md-3">
                            <b>Start_time (24 hour)</b>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="material-icons">access_time</i>
                                </span>
                                <div class="form-line">
                                    <input type="text" class="form-control time24" placeholder="Ex: 23:59" name="time_start" value="{{$ticket->time_start}}">
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <b>End_time (24 hour)</b>
                            <div class="input-group">
                                <span class="input-group-addon">
                                    <i class="material-icons">access_time</i>
                                </span>
                                <div class="form-line">
                                    <input type="text" class="form-control time24" placeholder="Ex: 23:59" name="time_end" value="{{$ticket->time_end}}">
                                </div>
                            </div>
                        </div>

                        <div class="form-group form-float">
                            <div class="form-line focused">
                            <input type="text" class="form-control" name="price" required="" aria-required="true" aria-invalid="false" placeholder="Price : " value="{{$ticket->price}}">
                           
                        </div>
                    <label id="rating-error" class="error" for="price" style="display: none;"></label>
                </div>
                   

                <div class="form-group form-float">
                    <div class="form-line focused">
                    <input type="text" class="form-control" name="quantity" required="" aria-required="true" aria-invalid="false" placeholder="Quantity : " value="{{$ticket->quantity}}">
                   
                </div>
            <label id="rating-error" class="error" for="quantity" style="display: none;"></label>
        </div>
                   
         
                 
                    <button class="btn btn-primary waves-effect" type="submit">Edit Ticket</button>
                        </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
