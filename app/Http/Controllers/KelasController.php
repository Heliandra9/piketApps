<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kelas;
use Inertia\Inertia;

class KelasController extends Controller
{
    public function index()
    {
        return Inertia::render('guru/Jadwal', [
            'kelas' => Kelas::orderBy('nama_kelas')->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_kelas' => 'required|string|max:255',
        ]);

        Kelas::create($validated);

        return redirect()->back()->with('success', 'Kelas berhasil ditambahkan');
    }
}
