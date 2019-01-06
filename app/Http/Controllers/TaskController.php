<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Illuminate\Routing\Controller;

class TaskController extends Controller
{
    public function list(): string
    {
        return Task::query()
            ->get()
            ->toJson();
    }

    public function get(int $id): string
    {
        return Task::findOrFail($id)
            ->makeHidden('selected')
            ->toJson();
    }

    public function edit(int $id, Request $request): array
    {
        $module = Task::findOrFail($id);

        $module->update($request->all());

        $module->save();

        return [
            'message' => 'Logo was uploaded.',
        ];
    }
}

