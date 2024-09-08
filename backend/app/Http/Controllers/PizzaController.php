<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use PHPUnit\Exception;

class PizzaController extends Controller
{
    /**
     * @param Pizza $pizza
     */
    public function __construct(
        protected Pizza $pizza
    ) {}

    /**
     * @throws Exception
     * @return JsonResponse
     */
    public function getAll(): JsonResponse
    {
        try {
            $pizas = $this->pizza->all();

            if ($pizas->isEmpty()) {
                return response()->json([
                    'message' => 'No pizzas found'
                ], 404);
            }
            return response()->json($pizas, 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * @param Request $request
     *
     * @throws Exception
     * @return JsonResponse
     */
    public function getById(Request $request): JsonResponse
    {
        try {
            $piza = $this->pizza->find($request->id);

            if ($piza->isEmpty()) {
                return response()->json([
                    'message' => 'No pizzas found'
                ], 404);
            }
            return response()->json($piza, 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
