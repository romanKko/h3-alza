<?php namespace AppAlza\Alza\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreateFirmsTable extends Migration
{
    public function up()
    {
        Schema::create('appalza_alza_firms', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->integer('wage');
            $table->string('location');
            $table->integer('job_id')->nullable();
            $table->string('description');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('appalza_alza_firms');
    }
}
