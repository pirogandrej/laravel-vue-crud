<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contact;

class ContactController extends Controller
{
    public function all(){
        $contacts = Contact::all();
        return response()->json($contacts);

    }

    public function store(Request $request){
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'address' => 'required',
            'phone' => 'required'
        ]);

        $contact = Contact::create($request->all());
        return response()->json($contact, 200);
    }

    public function show($id){

        $contact = Contact::find($id);

        return response()->json($contact, 200);
    }

    public function update(Request $request, $id){

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'address' => 'required',
            'phone' => 'required'
        ]);

        $contact = Contact::find($id);
        $contact->update($request->all());
        return response()->json($contact, 200);
    }

    public function destroy($id){

        $contact = Contact::find($id);

        $contact->delete();

        return response()->json($contact, 200);
    }

}
