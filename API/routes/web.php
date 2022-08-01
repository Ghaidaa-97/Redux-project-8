<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::resource('admin', AdminController::class);
Route::get('/ad/movies', [AdminController::class, 'movies'])->name('admin.movies');
Route::get('/ad/movies/add', [AdminController::class, 'Addmovies'])->name('admin.movies_add');
Route::post('/ad/movies/adds', [AdminController::class, 'storemovies'])->name('admin.movies_save');
Route::get('/ad/movies/edit/{id}', [AdminController::class, 'editmovies'])->name('admin.movies_edit');
Route::put('/ad/movies/edits/{id}', [AdminController::class, 'updatemovies'])->name('admin.movies_update');
Route::delete('/ad/movies/delete/{id}', [AdminController::class, 'deletemovies'])->name('admin.movies_delete');

Route::get('/ad/tickets', [AdminController::class, 'tickets'])->name('admin.tickets');

Route::get('/ad/users', [AdminController::class, 'users'])->name('admin.users');

Route::get('/ad/posts', [AdminController::class, 'posts'])->name('admin.posts');

Route::get('/ad/comments', [AdminController::class, 'comments'])->name('admin.comments');

