<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\booking;
use App\Models\tikits;
use Validator;
class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookings = booking::all();
        return response()->json($bookings);
    }



    public function get_teckit(Request $request){

        $tikits = tikits::where('movie_id' ,$request->movie_id);

        // return response()->json($tikits, 200);
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
            
            'user_id' => 'required',
            'tikit_id' => 'required',
            'total_price' => 'required',
            'payment_method' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
        }
        $booking = booking::create($request->all());
        return response()->json($booking, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $booking = booking::find($id);
        if (is_null($booking)) {
            return response()->json(['error'=>'Booking not found'], 404);
        }
        return response()->json($booking);
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
        $booking = booking::find($id);
        if (is_null($booking)) {
            return response()->json(['error'=>'Booking not found'], 404);
        }
        $booking->update($request->all());
        return response()->json($booking, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $booking = booking::find($id);
        if (is_null($booking)) {
            return response()->json(['error'=>'Booking not found'], 404);
        }
        $booking->delete();
        return response()->json(null, 204);
    }
}
