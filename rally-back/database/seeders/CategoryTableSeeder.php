<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::firstOrCreate(['category' => 'Tecnología']);
        Category::firstOrCreate(['category' => 'Salud']);
        Category::firstOrCreate(['category' => 'Deportes']);
        Category::firstOrCreate(['category' => 'Cultura']);
        Category::firstOrCreate(['category' => 'Viajes']);
        Category::firstOrCreate(['category' => 'Naturaleza']);
        Category::firstOrCreate(['category' => 'Moda']);
        Category::firstOrCreate(['category' => 'Actualidad']);
        Category::firstOrCreate(['category' => 'Ciencia']);
    }
}
