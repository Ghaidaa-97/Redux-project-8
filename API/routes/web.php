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



//movies//
Route::resource('admin', AdminController::class);
Route::get('/ad/movies', [AdminController::class, 'movies'])->name('admin.movies');
Route::get('/ad/movies/add', [AdminController::class, 'Addmovies'])->name('admin.movies_add');
Route::post('/ad/movies/adds', [AdminController::class, 'storemovies'])->name('admin.movies_save');
Route::get('/ad/movies/edit/{id}', [AdminController::class, 'editmovies'])->name('admin.movies_edit');
Route::put('/ad/movies/edits/{id}', [AdminController::class, 'updatemovies'])->name('admin.movies_update');
Route::delete('/ad/movies/delete/{id}', [AdminController::class, 'deletemovies'])->name('admin.movies_delete');
//end of movies//



////////////////////users//////////////////
Route::get('/ad/users', [AdminController::class, 'users'])->name('admin.users');
Route::get('/ad/users/add', [AdminController::class, 'Addusers'])->name('admin.users_add');
Route::post('/ad/users/adds', [AdminController::class, 'storusers'])->name('admin.users_save');
Route::delete('/ad/users/delete/{id}', [AdminController::class, 'deleteusers'])->name('admin.users_delete');
////////////////////end of user////////////




/////////////////////post////////////////
Route::get('/ad/posts', [AdminController::class, 'posts'])->name('admin.posts');
Route::delete('/ad/posts/delete/{id}', [AdminController::class, 'deleteposts'])->name('admin.posts_delete');
//////////////////end of posts//////////




////////////////comments//////////////
Route::get('/ad/comments', [AdminController::class, 'comments'])->name('admin.comments');
Route::delete('/ad/comments/delete/{id}', [AdminController::class, 'deletecomments'])->name('admin.comments_delete');
//////////////end of comments////////




////////// tickets///////////
Route::get('/ad/tickets', [AdminController::class, 'tickets'])->name('admin.tickets');
Route::get('/ad/tickets/add', [AdminController::class, 'Addtickets'])->name('admin.tickets_add');
Route::post('/ad/tickets/adds', [AdminController::class, 'storetickets'])->name('admin.tickets_save');
Route::get('/ad/tickets/edit/{id}', [AdminController::class, 'edittickets'])->name('admin.tickets_edit');
Route::put('/ad/tickets/edits/{id}', [AdminController::class, 'updatetickets'])->name('admin.tickets_update');
Route::delete('/ad/tickets/delete/{id}', [AdminController::class, 'deletetickets'])->name('admin.tickets_delete');

////////end of tickets//////