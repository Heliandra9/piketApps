<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use App\Http\Controllers\JadwalController;
use App\Http\Controllers\KelasController;
use App\Http\Controllers\SiswaController;

Route::get('/', function () {
    return redirect('/login');
})->name('home');

Route::middleware(['auth', 'role:guru'])->prefix('guru')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia('guru/Dashboard');
    })->name('guru.dashboard');
    Route::get('/laporan_piket', function () {
        return Inertia('guru/LihatLaporanUi');
    })->name('guru.laporan_piket');
    Route::get('/jadwal', [JadwalController::class, 'index'])
    ->name('guru.jadwal');
});

Route::post('/kelas', [KelasController::class, 'store'])
    ->middleware(['auth']);

Route::post('/addSiswa', [SiswaController::class, 'store'])
    ->middleware(['auth']);

Route::post('/addJadwal', [JadwalController::class, 'store'])
    ->middleware(['auth']);

// Route untuk Siswa
Route::middleware(['auth', 'role:siswa'])->prefix('siswa')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia('siswa/Dashboard');
    })->name('siswa.dashboard');
});

require __DIR__.'/settings.php';
