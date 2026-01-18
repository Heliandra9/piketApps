<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    protected $fillable = [
        'kelas_id',
        'user_id',
        'hari_piket',
        'total_piket',
        'total_tidak_piket',
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }
    
    public function kelas()
    {
        return $this->hasMany(Kelas::class);
    }
}
