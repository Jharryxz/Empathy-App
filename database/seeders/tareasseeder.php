<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Tareas;

class tareasseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Tareas::create([
            'nombretarea' => 'Comprar materiales',
            'descripciontarea' => 'Comprar papel y bolígrafos para la oficina',
            'fechatarea' => '2025-07-19',
            'estadotarea' => 'Sin iniciar',
        ]);

        Tareas::create([
            'nombretarea' => 'Reunión semanal',
            'descripciontarea' => 'Reunión de seguimiento de proyectos',
            'fechatarea' => '2025-07-20',
            'estadotarea' => 'En Proceso',
        ]);

        Tareas::create([
            'nombretarea' => 'Enviar reporte',
            'descripciontarea' => 'Enviar reporte mensual al gerente',
            'fechatarea' => '2025-07-21',
            'estadotarea' => 'Completada',
            'completed_at' => now(),
        ]);
    }
}
