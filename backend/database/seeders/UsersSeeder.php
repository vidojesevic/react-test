<?php
/**
 * @author    Vidoje Šević
 * @website   https://www.vsevic.com
 * @email     vidoje@vsevic.com
 * @date      09/08/24
 */

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(10)->create();
    }
}

