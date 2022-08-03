<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\admin;
use Hash;
use Validator;
use Session;
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


  public function update(Request $request,$id)
         {
          $user=User::find($id);
          $user->name =$request->name;
          $user->email =$request->email;
          $user->phone =$request->phone;

          $user->update();

            return response()->json($user,200);






         }


         public function admin_login(){
            if(Session::has('Admin')){
                return redirect()->route('admin.index');
            }
            return view('Admin.login');
         }
         public function admin_login_check( Request $request ){
            if(Session::has('Admin')){
                return redirect()->route('admin.index');
            }
            $validator = Validator::make($request->all(), [
               'email' => 'required|string|email|max:255',
               'password' => 'required|string|min:6',
            ]);
            if ($validator->fails()) {
               return redirect()->back()->withErrors($validator)->withInput();
            }
            $user = admin::where('email', $request->email)->first();
            if ($user) {
               if ($request->password== $user->password) {
                    Session::put('Admin', $user);
                  return redirect()->route('admin.index');
               }
               else {
                  return redirect()->back()->withErrors(['message' => 'Invalid email or password'])->withInput();
               }
            }
            else{
               return redirect()->back()->withErrors(['message' => 'Invalid email or password'])->withInput();
            }


         }

         public function admin_logout(){
            Session::forget('Admin');
            return redirect()->route('admin.login');
         }

}



