<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Rally;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;

class ApiController extends Controller
{
    # =========================================
    # Controllers: Rallies
    # =========================================

    /**
     * Crea un nuevo rally en la base de datos.
     * Valida los datos de entrada antes de guardar.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createRally(Request $request): JsonResponse
    {
        try {

            $request->validate([ //validaciones de datos entrantes
                'category_id' => 'required|integer',
                'propietario_id' => 'nullable|integer',
                'uri_cover' => 'required|image|max:2048', // imagen requerida, máximo 2MB
                'nombre' => 'required|string',
                'descripcion' => 'required|string',
                'premio1' => 'nullable|integer',
                'premio2' => 'nullable|integer',
                'premio3' => 'nullable|integer',
                'limite_votos' => 'required|integer|min:1|max:10',
                'limite_fotos' => 'required|integer',
                'fecha_inicio' => 'required|date_format:Y-m-d H:i:s',
                'fecha_fin' => 'required|date_format:Y-m-d H:i:s',
            ]);

            //Subir imagen a s3 y obtener la url.

            if ($request->hasFile('uri_cover')) {
                $file = $request->file('uri_cover');
                $path = Storage::disk('s3')->put('covers', $file);

                $url = Storage::url($path);
            } else {
                return response()->json(['Error' => 'No se envió imagen'], 400);
            }
            //Crear rally.

            $rally = Rally::create([
                'category_id' => $request->input('category_id'),
                'propietario_id' => $request->input('propietario_id'),
                'nombre' => $request->input('nombre'),
                'descripcion' => $request->input('descripcion'),
                'premio1' => $request->input('premio1'),
                'premio2' => $request->input('premio2'),
                'premio3' => $request->input('premio3'),
                'limite_votos' => $request->input('limite_votos'),
                'limite_fotos' => $request->input('limite_fotos'),
                'fecha_fin' => $request->input('fecha_fin'),
                'fecha_inicio' => $request->input('fecha_inicio'),
                'uri_cover' => $url,
            ]);

            return response()->json([
                'message' => 'Rally creado.',
                'data' => $rally
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error al crear el rally', 
                'error' => $e->getMessage()
            ], 500);
        }
    }
    /**
     * devuelve lainformación de los rallies
     */
    public function getRallies()
    {
        try {
            $rallies = Rally::with(['category' => function ($query) {
                $query->select('id', 'nombre'); //necesito el id también para que laravel pueda recoger la ralación belongsto
            }])->select('id', 'nombre', 'uri_cover', 'descripcion', 'fecha_inicio', 'fecha_fin')->get();

            return response()->json($rallies, 200);
        } catch (Exception $e) {
            return response()->json(['Error' => $e->getMessage()], 500);
        }
    }


    # =========================================
    # Controllers: Photos
    # =========================================

    /**
     * Asocia una foto a un rally 
     */
    public function submitPhotoRally(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'rally_id' => 'required|exists:rallies,id',
            'foto_id' => 'required|exists:fotos,id',
        ]);

        $rally = Rally::findOrFail($validated['rally_id']);

        if (now()->greaterThanOrEqualTo(Carbon::parse($rally->fecha_inicio))) {
            return response()->json([
                'Message' => 'Nose puede asociar una foto cuando el rally ha comenzado'
            ], 403);
        }

        // Evita duplicados en la tabla intermedia
        $rally->fotos()->syncWithoutDetaching([$validated['foto_id']]);

        return response()->json([
            'message' => 'Foto presentada correctamente al rally.'
        ], 201);
    }

    /**
     * Retira una foto de un rallye
     */
    public function removePhotoRally(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'rally_id' => 'required|exists:rallies,id',
            'foto_id' => 'required|exists:fotos,id',
        ]);

        $rally = Rally::findOrFail($validated['rally_id']);

        // Validar fecha
        if (now()->greaterThanOrEqualTo(Carbon::parse($rally->fecha_inicio))) {
            return response()->json([
                'message' => 'No se puede retirar una foto cuando el rally ha comenzado.'
            ], 403);
        }

        $rally->fotos()->detach($validated['foto_id']);

        return response()->json([
            'message' => 'Foto retirada correctamente del rally.'
        ]);
    }


    /**
     * Devuelve todas las fotos asociadas a un rally específico.
     * La solicitud debe incluir el ID del rally, que será validado.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPhotosRally(Request $request): JsonResponse
    {
        // Validar que el ID del rally esté presente y exista en la base de datos
        $request->validate([
            'rally_id' => 'required|exists:rallies,id',
        ]);

        // Buscar el rally solicitado
        $rally = Rally::findOrFail($request->rally_id);

        // Obtener las fotos asociadas al rally, seleccionando solo los campos necesarios
        $fotos = $rally->fotos()->select('id', 'user_id', 'uri_imagen', 'validada')->get();

        // Retornar los datos en formato JSON
        return response()->json([
            'rally_id' => $rally->id,
            'fotos' => $fotos,
        ], 200);
    }
}
