<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tareas extends Model
{
     protected $table = 'tareas';

    protected $fillable = [
        'nombretarea',
        'descripciontarea',
        'fechatarea',
        'estadotarea',
        'completed_at'
    ];
}
