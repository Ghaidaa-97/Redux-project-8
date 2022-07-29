<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\comment;
use App\Models\post;
use Validator;
class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = comment::all();
        return response()->json($comments);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'message' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
            // 'post_id' => 'required|string|max:255',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $comment = comment::create($request->all());
        $post = post::join('users' , 'users.id' , '=' , 'posts.user_id')
        ->select('posts.*' , 'users.name' , 'users.email' , 'users.image')
        ->where('posts.id' ,$request->post_id) ->first();
    $post_comments =comment::join('users' , 'users.id' , '=' , 'comments.user_id')
        ->select('comments.*' , 'users.name' , 'users.email' , 'users.image')
        ->where('post_id' , $request->post_id)
        ->orderBy('comments.created_at' , 'desc')
        ->get();

        $post->comments = $post_comments;
    return response()->json($post,201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $comment = comment::find($id);
        if (is_null($comment)) {
            return response()->json(['message' => 'Comment not found'], 404);
        }
        return response()->json($comment);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $comment = comment::find($id);
        if (is_null($comment)) {
            return response()->json(['message' => 'Comment not found'], 404);
        }
        $comment->update($request->all());
        return response()->json($comment);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comment = comment::find($id);
        if (is_null($comment)) {
            return response()->json(['message' => 'Comment not found'], 404);
        }
        $comment->delete();
        return response()->json(['message' => 'Comment deleted']);
    }
}
