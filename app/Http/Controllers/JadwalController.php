<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Kelas;
use App\Models\User;
use App\Models\Siswa;

class JadwalController extends Controller
{
    public function index()
    {
        return Inertia::render('guru/Jadwal', [
            'kelas' => Kelas::orderBy('nama_kelas')->get(),
            'user' => User::where('role', 'siswa')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'user_id' => 'required|int|max:11',
            'nama_kelas' => 'required|string|max:255',
            'hari_piket' => 'required|string|max:255',
        ]);

        $kelas = Kelas::where('nama_kelas', $validated['nama_kelas'])->firstOrFail();

        Siswa::create([
            'kelas_id' => $kelas->id,
            'user_id' => $validated['user_id'],
            'hari_piket' => $validated['hari_piket'],
        ]);

        return redirect()->back()->with('success', 'Siswa berhasil ditambahkan');
    }
}
