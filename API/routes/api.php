<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Login;


Route::resource('posts', PostController::class);
Route::post('login' ,[Login::class , 'Login_user']);
Route::post('Register' ,[Login::class , 'Register']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
