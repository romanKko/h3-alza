<?php

use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use AppAlza\Alza\Http\Controllers\FirmsController;
use AppAlza\Alza\Http\Controllers\JobsController;

Route::group([
    'prefix' => 'api/v1',

], function (Router $router) {
    $router->get('jobs', [JobsController::class, 'index']);
    $router->get('firms', [FirmsController::class, 'index']);
});