<?php namespace AppAlza\Alza\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Collection;
use AppAlza\Alza\Models\Job;
use AppAlza\Alza\Http\Resources\JobResource;

class JobsController extends Controller
{
    public function index()
    {
        return JobResource::collection(Job::get());
    }
}