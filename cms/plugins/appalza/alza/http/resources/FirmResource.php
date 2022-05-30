<?php namespace AppAlza\Alza\Http\Resources;

use Illuminate\Http\Resources\Json\Resource;

class FirmResource extends Resource
{
    public function toArray($request)
    {
        $response = [
            'id'            => $this->id,
            'name'          => $this->name,
            'wage'          => $this->wage,
            'location'      => $this->location,
            'job_id'        => $this->job_id,
            'description'   => $this->description,
            'created_at'    => $this->created_at->toDateTimeString(),
            'updated_at'    => $this->updated_at->toDateTimeString(),
        ];

        return $response;
    }

}