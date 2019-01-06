<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    public function list(): string
    {
        return User::query()
            ->get()
            ->toJson();
    }

    public function get(int $id): string
    {
        return User::where('userId', '=', $id)->get()
            ->toJson();
    }
}
