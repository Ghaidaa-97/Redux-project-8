<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tikits;
use Validator;
class TiketsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tikets = tikits::all();
        return response()->json($tikets);
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
            'date' => 'required|string|max:255',
            'time_start' => 'required|string|max:255',
            'time_end' => 'required|string|max:255',
            'price' => 'required|string|max:255',
            'quantity' => 'required|string|max:255',
            'movie_id' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $tiket = tikits::create($request->all());

        return response()->json($tiket, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $tiket = tikits::find($id);
        if (is_null($tiket)) {
            return response()->json(['message' => 'Tiket not found'], 404);
        }
        return response()->json($tiket);
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
        $tiket = tikits::find($id);
        if (is_null($tiket)) {
            return response()->json(['message' => 'Tiket not found'], 404);
        }
        $tiket->update($request->all());
        return response()->json($tiket);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tiket = tikits::find($id);
        if (is_null($tiket)) {
            return response()->json(['message' => 'Tiket not found'], 404);
        }
        $tiket->delete();
        return response()->json(['message' => 'Tiket deleted']);
    }
}
