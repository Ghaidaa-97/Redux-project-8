<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class movies extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description',  'release_date', 'rating', 'poster_path', 'backdrop_path', 'trailer' , 'from'];
}
