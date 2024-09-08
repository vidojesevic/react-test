<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CommentsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $posts = DB::table('posts')->pluck('id');

        foreach (range(1, 5) as $index) {
            DB::table('comments')->insert([
                'post_id' => $posts->random(),
                'author' => Str::random(10),
                'comment' => Str::random(50),
            ]);
        }
    }
}
