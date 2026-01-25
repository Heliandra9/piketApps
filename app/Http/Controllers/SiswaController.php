<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Siswa;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class SiswaController extends Controller
{
    public function store(Request $request)
    {
        try
        {
            $validated = $request->validate([
                'name' => 'required|string|max:255', 
                'username' => 'required|string|max:255|unique:users,username', 
                'password' => 'required|string|min:8',
            ]);

            $user = User::create([
                'name' => $validated['name'],
                'username' => $validated['username'],
                'password' => Hash::make($validated['password']),
                'role' => 'siswa',
            ]);

            return redirect()->back()->with('success', 'Siswa berhasil ditambahkan');
        } catch (\Throwable $e) {

            // simpan ke log
            Log::error('Error create siswa', [
                'message' => $e->getMessage(),
                'line' => $e->getLine(),
                'file' => $e->getFile(),
            ]);

            // tampilkan ke user
            return back()->withErrors([
                'error' => $e->getMessage()
            ]);
        }
    }
}
