<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return redirect('/login');
})->name('home');

Route::middleware(['auth', 'role:guru'])->prefix('guru')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia('guru/Dashboard');
    })->name('guru.dashboard');
    Route::get('/jadwal', function () {
        return Inertia('guru/Jadwal');
    })->name('guru.jadwal');
});

// Route untuk Siswa
Route::middleware(['auth', 'role:siswa'])->prefix('siswa')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia('siswa/Dashboard');
    })->name('siswa.dashboard');
});

require __DIR__.'/settings.php';
