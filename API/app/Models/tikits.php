<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tikits extends Model
{
    use HasFactory;
    protected $fillable = ['date', 'time_start', 'time_end', 'price', 'quantity', 'movie_id'];
}
