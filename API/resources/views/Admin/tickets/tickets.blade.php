@extends('Admin.masterpage.master')
@section('title')
    Admin||Tickets
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
                    <h2> Movies </h2>
                    <ul class="header-dropdown m-r--5">
                        <li class="dropdown">
                            <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                <i class="material-icons">more_vert</i>
                            </a>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="{{route('admin.tickets_add')}}" class=" waves-effect waves-block">Add</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Time Start</th>
                                <th>Time End</th>
                               
                                <th>Quantity</th>
                                <th>Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            @foreach($tickets as $key =>  $ticket)
                            <tr>
                                <th scope="row">{{$key +1 }}</th>
                                <td>{{$ticket->date	}}</td>
                                <td>{{$ticket->time_start}}</td>
                                <td>{{$ticket->time_end}}</td>
                               
                                <td>{{$ticket->quantity}}</td>
                                <td>{{$ticket->price}}</td>
                              
                                 
                                <td><a href="{{route('admin.tickets_edit' , $ticket->id )}}" class="btn btn-warning ">Edit Ticket</a></td>
                                <td><form action="{{route('admin.tickets_delete' , $ticket->id )}}" method="POST">
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
