<?php namespace AppAlza\Alza\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateFirmsJobsTable extends Migration
{
    public function up()
    {
        Schema::create('appalza_alza_firms_jobs', function (Blueprint $table) {
            $table->integer('firm_id')->unsigned();
            $table->integer('job_id')->unsigned();
            $table->primary(['firm_id', 'job_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('appalza_alza_firms_jobs');
    }
}
