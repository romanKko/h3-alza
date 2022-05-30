<?php namespace AppAlza\Alza\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class JobResource extends Resource
{
    public function toArray($request)
    {
        $response = [
            'id'            => $this->id,
            'name'          => $this->name,
            'gender'        => $this->gender,
            'firm_id'       => $this->firm_id,
            'created_at'    => $this->created_at->toDateTimeString(),
            'updated_at'    => $this->updated_at->toDateTimeString(),
        ];

        return $response;
    }

}