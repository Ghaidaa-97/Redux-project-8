<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\comment;

use Validator;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::join('users' , 'users.id' , '=' , 'posts.user_id')
            ->select('posts.*' , 'users.name' , 'users.email' , 'users.image')
            ->orderBy('posts.created_at' , 'desc')
            ->paginate(6);
            foreach ($posts as $post) {

                $post->comments_count= comment::where('post_id' , $post->id)->count();
            }

        return response()->json($posts);
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
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'user_id' => 'required|integer',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }
        $post = Post::create($request->all());
        return response()->json($post , 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::join('users' , 'users.id' , '=' , 'posts.user_id')
            ->select('posts.*' , 'users.name' , 'users.email' , 'users.image')
            ->where('posts.id' , $id) ->first();
        $post_comments =comment::join('users' , 'users.id' , '=' , 'comments.user_id')
            ->select('comments.*' , 'users.name' , 'users.email' , 'users.image')
            ->where('post_id' , $id)
            ->orderBy('comments.created_at' , 'desc')
            ->get();

            $post->comments = $post_comments;
        return response()->json($post);
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
        $validator = Validator::make($request->all(), [
        'title' => 'required|string|max:255',
        'body' => 'required|string',
        'user_id' => 'required|integer',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $post = Post::find($id);
        $post->update($request->all());
        return response()->json($post);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        comment::where('post_id' , $id)->delete();
        $post = Post::find($id);
        $post->delete();

        return response()->json($post);
    }
}
