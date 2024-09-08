<?php

namespace App\Http\Controllers;

use App\Models\Todos;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PHPUnit\Exception;

class TodosController extends Controller
{
    /**
     * @param Todos $todes
     */
    public function __construct(
        protected Todos $todos
    ) {}

    /**
     * getAll
     *
     * @throws Exception
     * @return JsonResponse
     */
    public function getAll(): JsonResponse
    {
        try {
            $todoss = $this->todos->all();
            if ($todoss->isEmpty()) {
                return response()->json([
                    'message' => 'No todoss found'
                ], 404);
            }
            return response()->json($todoss, 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get by id
     *
     * @param Request $request
     *
     * @throws Exception
     * @return JsonResponse
     */
    public function getById(Request $request): JsonResponse
    {
        try {
            $todos = $this->todos->findOrFail($request->id)->get();
            if ($todos->isEmpty()) {
                return response()->json([
                    'message' => 'No todoss found'
                ], 404);
            }
            return response()->json($todos, 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
