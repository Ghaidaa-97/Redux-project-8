<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Hash;
use Validator;
class Login extends Controller
{

   public function Register(Request $request)
   {
      $validator = Validator::make($request->all(), [
         'name' => 'required|string|max:255',
         'email' => 'required|string|email|max:255|unique:users',
         'password' => 'required|string|min:6',
      ]);
      if ($validator->fails()) {
         return response()->json($validator->errors(), 400);
      }
      $input = $request->all();
        $input['password'] = Hash::make($input['password']);
      $user = User::create($input);
      return response()->json($user , 201);
   }

   public function Login_user(Request $request)
   {
      $validator = Validator::make($request->all(), [
         'email' => 'required|string|email|max:255',
         'password' => 'required|string|min:6',
      ]);
      if ($validator->fails()) {
         return response()->json($validator->errors(), 400);
      }
      $user = User::where('email', $request->email)->first();
      if ($user) {
         if (Hash::check($request->password, $user->password)) {
            return response()->json($user, 200);
         }
         else {
            return response()->json(['message' => 'Invalid email or password'], 400);
        }
      }
      return response()->json(['message' => 'Invalid email or password'], 400);
   }

}



