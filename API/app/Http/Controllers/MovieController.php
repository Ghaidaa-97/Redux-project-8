<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\movies;
use Validator;
class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = movies::all();
        return response()->json($movies);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'release_date' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $movie = movies::create($request->all());

        return response()->json($movie, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $movie = movies::find($id);
        if (is_null($movie)) {
            return response()->json(['message' => 'Movie not found'], 404);
        }
        return response()->json($movie);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validate = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'description' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'release_date' => 'required|date',
        ]);

        if ($validate->fails()) {
            return response()->json($validate->errors(), 400);
        }
        $movie = movies::find($id);
        if (is_null($movie)) {
            return response()->json(['message' => 'Movie not found'], 404);
        }
        $movie->update($request->all());
        return response()->json($movie, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $movie = movies::find($id);
        if (is_null($movie)) {
            return response()->json(['message' => 'Movie not found'], 404);
        }
        $movie->delete();
        return response()->json(['message' => 'Movie deleted'], 204);
    }
}
