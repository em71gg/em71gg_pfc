<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rallies', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('propietario_id')->nullable();
            $table->string('nombre');
            $table->string('descripcion');
            $table->smallInteger('premio1');
            $table->smallInteger('premio2');
            $table->smallInteger('premio3');
            $table->tinyInteger('limite_fotos');
            $table->tinyInteger('limite_votos');
            $table->datetime('fecha_inicio');
            $table->datetime('fecha_fin');
            $table->foreign('category_id')->references('id')->on('categories');
            $table->foreign('propietario_id')->references('id')->on('users')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rallies');
    }
};
