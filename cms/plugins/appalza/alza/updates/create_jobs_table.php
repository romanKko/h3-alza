<?php namespace AppAlza\Alza\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateJobsTable extends Migration
{
    public function up()
    {
        Schema::create('appalza_alza_jobs', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id')->nullable();
            $table->string('name')->nullable();
            $table->string('gender')->nullable();
            $table->integer('firm_id')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('appalza_alza_jobs');
    }
}
