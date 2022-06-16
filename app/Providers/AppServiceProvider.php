<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;  //20220617 kella

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        
        Schema::defaultStringLength(191);   //20220617 kella - to solve issue:  Syntax error or access violation: 1071 Specified key was too long; max key length is 767 bytes
    }
}