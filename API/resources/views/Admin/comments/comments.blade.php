@extends('Admin.masterpage.master')
@section('title')
    Admin||Comment
@endsection
@section('con')
    <div class="container-fluid">

        <div class="row clearfix">
            @if (isset($success))
                <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">{{ $success }}</h4>

                </div>
            @endif
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div class="card">
                    <div class="header">
                        <h2> Comments </h2>
                    </div>


                    <div class="body table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Comments</th>
                                    <th>User Name</th>
                                </tr>
                            </thead>

                            <tbody>
                                @foreach ($comments as $key => $comment)
                                    <tr>
                                        <th scope="row">{{ $key + 1 }}</th>
                                        <td>{{ $comment->message }}</td>
                                        <td>{{ $comment->name }}</td>
                                        <td>
                                            <form action="{{ route('admin.comments_delete', $comment->id) }}"
                                                method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <input class="btn btn-danger" type="submit" value="Delete">
                                            </form>
                                        </td>

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
