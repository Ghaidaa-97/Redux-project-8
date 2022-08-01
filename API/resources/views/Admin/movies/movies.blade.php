@extends('Admin.masterpage.master')
@section('title')
    Admin||Movies
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
                                <li><a href="{{route('admin.movies_add')}}" class=" waves-effect waves-block">Add</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="body table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Movie Title</th>
                                <th>Movie Des</th>
                                <th>Image</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($movies as $key =>  $movie)
                            <tr>
                                <th scope="row">{{$key +1 }}</th>
                                <td>{{$movie->title}}</td>
                                <td>{{$movie->description}}</td>
                                <td>
                                    @if($movie->from == 2)
                                    <img src="https://image.tmdb.org/t/p/w500/{{$movie->poster_path }}" width="100px"  alt="movie"> </td>
                                    @else
                                    <img src={{url("images/".$movie->poster_path)}} width="100px"  alt="movie"> </td>
                                    @endif
                                    <td>{{$movie->rating}}</td>
                                <td><a href="{{route('admin.movies_edit' , $movie->id )}}" class="btn btn-warning ">Edit Movie</a></td>
                                <td><form action="{{route('admin.movies_delete' , $movie->id )}}" method="POST">
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
