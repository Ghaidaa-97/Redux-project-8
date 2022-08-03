@extends('Admin.masterpage.master')
@section('title')
    Admin||bookings
@endsection
@section('con')

<div class="container-fluid">

    <div class="row clearfix">
    @if(isset($success))
        <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">{{$success}}</h4>

        </div>
    @endif
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
                <div class="header">
                    <h2> bookings </h2>
                    {{-- <ul class="header-dropdown m-r--5">
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="{{route('admin.movies_add')}}" class=" waves-effect waves-block">Add</a></li>
                            </ul>
                        </li>
                    </ul> --}}
                </div>
                <div class="body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Booking Date</th>
                                <th>Seat Name </th>
                                <th>User</th>
                                <th>Total price</th>


                            </tr>
                        </thead>
                        <tbody>
                            @foreach($bookings as $key =>  $booking)
                            <tr>
                                <th scope="row">{{$key +1 }}</th>
                                <td>{{$booking->created_at}}</td>
                                <td>{{$booking->site_name }}</td>
                                <td>{{$booking->name }}</td>
                                <td>{{$booking->total_price }}</td>




                                <td><form action="{{route('admin.bookings_delete' , $booking->id )}}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <input class="btn btn-danger" type="submit" value="Delete" >  </form></td>

                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
