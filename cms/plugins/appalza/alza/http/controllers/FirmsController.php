<?php namespace AppAlza\Alza\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Collection;
use AppAlza\Alza\Models\Firm;
use AppAlza\Alza\Http\Resources\FirmResource;

class FirmsController extends Controller
{
    public function index()
    {
        return FirmResource::collection(Firm::get());
    }
}