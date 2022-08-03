<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Login;

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



//movies//
Route::resource('admin', AdminController::class)->middleware('isLogged');
Route::get('/ad/movies', [AdminController::class, 'movies'])->name('admin.movies')->middleware('isLogged');
Route::get('/ad/movies/add', [AdminController::class, 'Addmovies'])->name('admin.movies_add')->middleware('isLogged');
Route::post('/ad/movies/adds', [AdminController::class, 'storemovies'])->name('admin.movies_save')->middleware('isLogged');
Route::get('/ad/movies/edit/{id}', [AdminController::class, 'editmovies'])->name('admin.movies_edit')->middleware('isLogged');
Route::put('/ad/movies/edits/{id}', [AdminController::class, 'updatemovies'])->name('admin.movies_update')->middleware('isLogged');
Route::delete('/ad/movies/delete/{id}', [AdminController::class, 'deletemovies'])->name('admin.movies_delete')->middleware('isLogged');
//end of movies//



////////////////////users//////////////////
Route::get('/ad/users', [AdminController::class, 'users'])->name('admin.users')->middleware('isLogged');
Route::get('/ad/users/add', [AdminController::class, 'Addusers'])->name('admin.users_add')->middleware('isLogged');
Route::post('/ad/users/adds', [AdminController::class, 'storusers'])->name('admin.users_save')->middleware('isLogged');
Route::delete('/ad/users/delete/{id}', [AdminController::class, 'deleteusers'])->name('admin.users_delete')->middleware('isLogged');
////////////////////end of user////////////




/////////////////////post////////////////
Route::get('/ad/posts', [AdminController::class, 'posts'])->name('admin.posts')->middleware('isLogged');
Route::delete('/ad/posts/delete/{id}', [AdminController::class, 'deleteposts'])->name('admin.posts_delete')->middleware('isLogged');
//////////////////end of posts//////////


Route::get('/ad/bookings', [AdminController::class, 'bookings'])->name('admin.bookings')->middleware('isLogged');
Route::delete('/ad/booking/delete/{id}', [AdminController::class, 'deletebooking'])->name('admin.bookings_delete')->middleware('isLogged');


////////////////comments//////////////
Route::get('/ad/comments', [AdminController::class, 'comments'])->name('admin.comments')->middleware('isLogged');
Route::delete('/ad/comments/delete/{id}', [AdminController::class, 'deletecomments'])->name('admin.comments_delete')->middleware('isLogged');
//////////////end of comments////////




////////// tickets///////////
Route::get('/ad/tickets', [AdminController::class, 'tickets'])->name('admin.tickets')->middleware('isLogged');
Route::get('/ad/tickets/add', [AdminController::class, 'Addtickets'])->name('admin.tickets_add')->middleware('isLogged');
Route::post('/ad/tickets/adds', [AdminController::class, 'storetickets'])->name('admin.tickets_save')->middleware('isLogged');
Route::get('/ad/tickets/edit/{id}', [AdminController::class, 'edittickets'])->name('admin.tickets_edit')->middleware('isLogged');
Route::put('/ad/tickets/edits/{id}', [AdminController::class, 'updatetickets'])->name('admin.tickets_update')->middleware('isLogged');
Route::delete('/ad/tickets/delete/{id}', [AdminController::class, 'deletetickets'])->name('admin.tickets_delete')->middleware('isLogged');

Route::get('/ad/login', [Login::class, 'admin_login'])->name('admin.login');
Route::post('/adlogin', [Login::class, 'admin_login_check'])->name('admin.login_save');
Route::get('/adlogout', [Login::class, 'admin_logout'])->name('admin.logout');
////////end of tickets//////
