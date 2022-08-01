<?php

namespace App\Http\Controllers;

use App\Models\admin;
use App\Models\movies;
use App\Models\comment;
use App\Models\post;
use App\Models\User;
use App\Models\tikits;
use Validator ;
use App\Http\Requests\StoreadminRequest;
use App\Http\Requests\UpdateadminRequest;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return view('Admin.index');
    }

    public function movies()
    {
        $movies = movies::select('*')
            ->orderBy('created_at' , 'desc')->get();
        return view('Admin.movies.movies', compact('movies'));
    }

    public function Addmovies()
    {
        return view('Admin.movies.addmovies');
    }

    public function storemovies(StoreadminRequest $request)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'release_date' => 'required|string|max:255',
            'rating' => 'required|',
            'poster_path' => 'required',

        ]);
        $inputs = $request->all();
        if ($validate->fails()) {
            dd($validate);
            return redirect()->back()->withErrors($validate)->withInput();
        } else {

            $movies = new movies();
            $movies->title = $inputs['title'];
            $movies->description = $inputs['description'];
            $movies->release_date = $inputs['release_date'];
            $movies->rating = $inputs['rating'];
            $movies->from = $inputs['from'];
            if($request->hasFile('poster_path')){
                $file = $request->file('poster_path');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('images', $filename);
                $movies->poster_path = $filename;
            }

            if($request->hasFile('backdrop_path')){
                $file = $request->file('backdrop_path');
                $extension = $file->getClientOriginalExtension();
                $filename = time() . '.' . $extension;
                $file->move('images', $filename);
                $movies->backdrop_path = $filename;
            }
            else{
                $movies->backdrop_path = "2" . $filename ;
            }
            $movies->save();
            return redirect()->route('admin.movies')->with('success', 'Movie added successfully');
        }
        return redirect()->route('admin.movies');
    }

    public function editmovies($id)
    {
        $movie = movies::find($id);
        return view('Admin.movies.movies_edits', compact('movie'));
    }

    public function updatemovies(UpdateadminRequest $request, $id)
    {
        $movies = movies::find($id);
        $movies->title = $request->title;
        $movies->description = $request->description;
        if($request->hasFile('poster_path')){
            $file = $request->file('poster_path');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('images', $filename);
            $movies->poster_path = $filename;
            $movies->backdrop_path = "2" . $filename ;
        }

        if($request->hasFile('backdrop_path')){
            $file = $request->file('backdrop_path');
            $extension = $file->getClientOriginalExtension();
            $filename = time() . '.' . $extension;
            $file->move('images', $filename);
            $movies->backdrop_path = $filename;
        }

        $movies->save();
        return redirect()->route('admin.movies')->with('success', 'Movie updated successfully');
    }

    public function deletemovies($id)
    {
        $movies = movies::find($id);
        $movies->delete();
        return redirect()->route('admin.movies');
    }



    public function comments()
    {
        $comments = comment::all();
        return view('Admin.comments.comments', compact('comments'));
    }
    public function posts()
    {
        $posts = post::all();
        return view('Admin.posts.posts', compact('posts'));
    }
    public function users()
    {
        $users = User::all();
        return view('Admin.users.users', compact('users'));
    }
    public function tickets()
    {
        $tikits = tikits::all();
        return view('Admin.tikits.tikits', compact('tikits'));
    }






    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreadminRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreadminRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateadminRequest  $request
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateadminRequest $request, admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(admin $admin)
    {
        //
    }
}
