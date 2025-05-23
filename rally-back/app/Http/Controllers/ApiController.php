<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Models\Rally;

class ApiController extends Controller
{
    /**
     * Crea un nuevo rally en la base de datos.
     * Valida los datos de entrada antes de guardar.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function createRally(Request $request) {
        try{
            
        $request->validate([//validaciones de datos entrantes
            'category_id' => 'required|integer', 
            'propietario_id' => 'required|integer',
            'nombre'=> 'required|string',
            'descripcion' => 'required|string',
            'premio1' => 'required|integer',
            'premio2'=> 'required|integer',
            'premio3'=> 'required|integer',
            'limite_votos' => 'required|integer',
            'limite_fotos' => 'required|integer',
            'fecha_inicio'=> 'required|date_format:Y-m-d H:i:s',
            'fecha_fin' => 'required|date_format:Y-m-d H:i:s',
            ]);

            $rally = new Rally();
            $rally->category_id =$request->input('category_id');
            $rally->propietario_id = $request->input('propietario_id');
            $rally->nombre = $request->input('nombre');
            $rally->descripcion = $request->input('descripcion');
            $rally->premio1 = $request->input('premio1');
            $rally->premio2 = $request->input('premio2');
            $rally->premio3 = $request->input('premio3');
            $rally->limite_votos = $request->input('limite_votos');
            $rally->limite_fotos = $request->input('limite_fotos');
            $rally->fecha_fin= $request->input('fecha_fin');
            $rally->fecha_inicio = $request->input('fecha_inicio');

            $rally->save();
            return response()->json($rally, 201);

        }catch(Exception $e){
            return response()->json(['Error' => $e->getMessage()], 500);
        }
    }

    /**
     * Devuelve todas las fotos asociadas a un rally específico.
     * La solicitud debe incluir el ID del rally, que será validado.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getPhotosRally(Request $request)
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
        ]);
    }
}
