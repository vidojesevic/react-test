<?php

use App\Http\Controllers\PizzaController;
use App\Http\Controllers\TodosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/comments', [CommentController::class, 'getAll']);
Route::get('/comments/{id}', [CommentController::class, 'getById']);

// Todos
Route::group(['prefix' => 'todos'], function () {
    Route::get('/', [TodosController::class, 'getAll']);
    Route::get('/{id}', [TodosController::class, 'getById']);
})->middleware('auth:sanctum');

Route::group(['prefix' => 'pizza'], function () {
    Route::get('/', [PizzaController::class, 'getAll']);
    Route::get('/{id}', [PizzaController::class, 'getById']);
});
