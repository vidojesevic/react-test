<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = DB::table('users')->pluck('id');

        foreach (range(6, 10) as $index) {
            DB::table('posts')->insert([
                'user_id' => $users->random(),
                'title' => Str::random(20),
                'content' => Str::random(100),
            ]);
        }
    }
}
