<?php

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/', 'ContactController@home');
Route::resource('contacts', 'ContactController');
