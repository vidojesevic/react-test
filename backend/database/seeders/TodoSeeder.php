<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TodoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $todos = [
            ['title' => 'Task 1', 'completed' => false, 'user_id' => 1],
            ['title' => 'Task 2', 'completed' => true, 'user_id' => 1],
            ['title' => 'Task 3', 'completed' => false, 'user_id' => 1],
            ['title' => 'Task 4', 'completed' => true, 'user_id' => 1],
            ['title' => 'Task 5', 'completed' => false, 'user_id' => 1],
            ['title' => 'Task 6', 'completed' => true, 'user_id' => 2],
            ['title' => 'Task 7', 'completed' => false, 'user_id' => 2],
            ['title' => 'Task 8', 'completed' => true, 'user_id' => 2],
            ['title' => 'Task 9', 'completed' => false, 'user_id' => 2],
            ['title' => 'Task 10', 'completed' => true, 'user_id' => 2],
        ];

        DB::table('todos')->insert($todos);
    }
}
