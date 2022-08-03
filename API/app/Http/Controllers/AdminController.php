<?php

namespace App\Http\Controllers;

use App\Models\admin;
use App\Models\movies;
use App\Models\comment;
use App\Models\post;
use App\Models\User;
use App\Models\tikits;
use App\Models\booking;

use Validator ;
use App\Http\Requests\StoreadminRequest;
use App\Http\Requests\UpdateadminRequest;
use Hash ;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

     return redirect()->route('admin.movies');;
    }



    ///////////// MOVIES //////////////////
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
        $ticket= tikits::where('movie_id', $id)->first();

            $booking = booking::where('tikit_id', $ticket->id)->delete();

        $ticket->delete();

        $movies = movies::find($id);



        $movies->delete();
        return redirect()->route('admin.movies');
    }
    /////////// END OF Movie //////////////




     ///////////// COMMENTS //////////////////
    public function comments()
    {
        $comments = comment::all();
        return view('Admin.comments.comments', compact('comments'));
    }


    public function deletecomments($id){
        $comment =comment::find($id);

        $comment->delete();

        return redirect()->route('admin.comments')->with('Successfully deleted comment');
    }
    /////////// END OF Comments //////////////




    ///////////// POST //////////////////
    public function posts()
    {
        $posts = post::all();
        return view('Admin.posts.posts', compact('posts'));
    }



    public function deleteposts($id){
        $post =post::find($id);
        $comments =comment::where ('post_id' , $id)->delete();
        $post->delete();

        return redirect()->route('admin.posts')->with('Successfully deleted post');
    }
      /////////// END OF POST //////////////



   ///////////// User //////////////////
    public function users()
    {
        $users = User::all();
        return view('Admin.users.users', compact('users'));
    }


    public function Addusers()
    {
        return view('Admin.users.addusers');
    }


    public function storusers(StoreadminRequest $request){
    $validate = $request->validate([
        'name' => 'required|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:6',
    ]);

    if ($request == true) {
        $user = new User;
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->password = Hash::make($request->input('password'));


        $user->save();
        return redirect()->route('admin.users')->with('success', 'user added successfully');

    }}


    public function deleteusers($id){
        $user = User::find($id);
        $posts =post::where ('user_id' , $id)->get();
        foreach($posts as $post){
        $post->user_id = 1 ;
        $post->update(); }
        $user->delete();
        return redirect()->route('admin.users')->with('success', 'user deleted successfully');
    }
    /////////// END OF USER //////////////


    ///////////// Tickets //////////////////
    public function tickets()
    {
        $tickets = tikits::join('movies', 'tikits.movie_id', '=', 'movies.id')->select('tikits.*', 'movies.title')->get();
        return view('Admin.tickets.tickets', compact('tickets'));
    }

    public function Addtickets()
    {   $movies=movies::all();
        return view('Admin.tickets.addtickets' , compact('movies'));
    }


    public function storetickets(StoreadminRequest $request){
        $validate = $request->validate([
            'date' => 'required',
            'time_start' => 'required|unique:tikits',
            'time_end' => 'required|unique:tikits',
            'price' => 'required',
            'quantity' => 'required',
            'movie_id' => 'required',

        ]);

        if ($request == true) {
            $tickets = new tikits;
            $tickets->date = $request->input('date');
            $tickets->time_start = $request->input('time_start');
            $tickets->time_end = $request->input('time_end');
            $tickets->price = $request->input('price');
            $tickets->quantity = $request->input('quantity');
            $tickets->movie_id = $request->input('movie_id');






            $tickets->save();
            return redirect()->route('admin.tickets')->with('success', 'Ticket added successfully');

        }}

        public function deletetickets($id){
            $ticket =tikits::find($id);
            $ticket->delete();

            return redirect()->route('admin.tickets')->with('Successfully deleted ticket');
        }


        public function edittickets($id){

            $ticket = tikits::findOrFail($id);

        return view('Admin.tickets.tickets_edits', compact('ticket'));
        }


        public function updatetickets(UpdateadminRequest $request, $id){

            $validatedData = $request->validate([
                'date' => 'required',
                'time_start' => 'required',
                'time_end' => 'required',
                'price' => 'required',
                'quantity' => 'required',
                // 'movie_id' => 'required',

            ]);
            tikits::whereId($id)->update($validatedData);

            return redirect()->route('admin.tickets')->with('Successfully updated ticket');




        }


    /////////// END OF Tickets /////////////////

        public function bookings(){
            $bookings = booking::join('tikits', 'bookings.tikit_id', '=', 'tikits.id')->select('bookings.*', 'tikits.date', 'tikits.time_start', 'tikits.time_end', 'tikits.price', 'tikits.quantity', 'tikits.movie_id')->join('users' , 'bookings.user_id', '=', 'users.id')->select('bookings.*', 'users.name')->get();
            return view('Admin.bookings.bookings', compact('bookings'));
        }

   public function deletebooking($id){
        $booking = booking::find($id);
        $booking->delete();

        return redirect()->route('admin.bookings')->with('Successfully deleted booking');
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
