<?php

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('allcontacts', 'ContactController@all')->name('all');
Route::post('addcontact', 'ContactController@store')->name('store');
Route::get('contact/{id}', 'ContactController@show')->name('show');
Route::patch('updatecontact/{id}', 'ContactController@update')->name('update');
Route::delete('deletecontact/{id}', 'ContactController@destroy')->name('destroy');
