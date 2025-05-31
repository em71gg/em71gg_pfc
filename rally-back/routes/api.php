<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('rally' , [ApiController::class, 'createRally']);
Route::get('rallies', [ApiController::class, 'getRallies']);
Route::get('user-rallies', [ApiController::class, 'getUserRallies']);
Route::get('/{id}/photosRally', [ApiController::class, 'getPhotosRally']);//el front mandará un post
Route::post('create-photo', [ApiController::class, 'createPhoto']);
Route::post('submit-photo', [ApiController::class, 'submitPhotoToRally']);
Route::post('remove-photo', [ApiController::class, 'removePhotoToRally']);
