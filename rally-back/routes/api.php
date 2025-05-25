<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('rally' , [ApiController::class, 'createRally']);
Route::post('photosRally', [ApiController::class, 'getPhotosRally']);//el fornt mandará un post
Route::post('submit-photo', [ApiController::class, 'submitPhotoToRally']);
Route::post('remove-photo', [ApiController::class, 'removePhotoToRally']);