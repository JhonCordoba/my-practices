<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = ['title', 'description'];


    public function posts()
    {
        return $this->hasMany('App\Post', 'category_id', 'id');
    }
}