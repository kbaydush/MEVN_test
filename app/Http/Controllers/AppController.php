<?php

declare(strict_types = 1);

namespace App\Http\Controllers\Api;

use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ApiController extends Controller
{
    public function list(): string
    {
        return Task::query()
            ->get()
            ->toJson();
    }

    public function getTasksByUser(int $userId): string
    {
        return Task::findOrFail($userId)
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
