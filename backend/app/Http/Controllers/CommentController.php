<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Comment;
use Exception;

class CommentController extends Controller
{
    /**
     * @param  protected Comment $comment
     */
    public function __construct(
        protected Comment $comment
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
            $comments = $this->comment->all();
            if ($comments->isEmpty()) {
                return response()->json([
                    'message' => 'No comments found'
                ], 404);
            }
            return response()->json($comments, 200);
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
            $comment = $this->comment->findOrFail($request->id)->get();
            if ($comment->isEmpty()) {
                return response()->json([
                    'message' => 'No comments found'
                ], 404);
            }
            return response()->json($comment, 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
