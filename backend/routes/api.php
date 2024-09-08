<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/comments', [CommentController::class, 'getAll']);
Route::get('/comments/{id}', [CommentController::class, 'getById']);
