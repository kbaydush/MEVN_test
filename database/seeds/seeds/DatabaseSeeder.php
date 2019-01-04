<?php

use App\Models\User;
use App\Models\Task;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => Hash::make('admin'),
            'role' => 2
        ]);

        User::create([
            'name' => 'User',
            'email' => 'user@test.com',
            'password' => Hash::make('secret'),
            'role' => 1
        ]);

        Task::create([
            'name' => 'Task One',
            'userId' => 1
        ]);

        Task::create([
            'name' => 'Task Two',
            'userId' => 1
        ]);

        Task::create([
            'name' => 'Task Three',
            'userId' => 1
        ]);

        Task::create([
            'name' => 'Task Four',
            'userId' => 1
        ]);

        Task::create([
            'name' => 'Task Five',
            'userId' => 1
        ]);

        Task::create([
            'name' => 'Task 6',
            'userId' => 2
        ]);

        Task::create([
            'name' => 'Task 7',
            'userId' => 2
        ]);

        Task::create([
            'name' => 'Task 8',
            'userId' => 2
        ]);

        Task::create([
            'name' => 'Task 9',
            'userId' => 2
        ]);

        Task::create([
            'name' => 'Task 10',
            'userId' => 2
        ]);

    }
}
