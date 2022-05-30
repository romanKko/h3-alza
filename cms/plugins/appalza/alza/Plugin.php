<?php namespace AppAlza\Alza;

use Backend;
use System\Classes\PluginBase;

/**
 * Alza Plugin Information File
 */
class Plugin extends PluginBase
{
    /**
     * Returns information about this plugin.
     *
     * @return array
     */
    public function pluginDetails()
    {
        return [
            'name'        => 'Alza',
            'description' => 'No description provided yet...',
            'author'      => 'AppAlza',
            'icon'        => 'icon-leaf'
        ];
    }

    /**
     * Register method, called when the plugin is first registered.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Boot method, called right before the request route.
     *
     * @return array
     */
    public function boot()
    {

    }

    /**
     * Registers any front-end components implemented in this plugin.
     *
     * @return array
     */
    public function registerComponents()
    {
        return []; // Remove this line to activate

        return [
            'AppAlza\Alza\Components\MyComponent' => 'myComponent',
        ];
    }

    /**
     * Registers any back-end permissions used by this plugin.
     *
     * @return array
     */
    public function registerPermissions()
    {
        return []; // Remove this line to activate

        return [
            'appalza.alza.some_permission' => [
                'tab' => 'Alza',
                'label' => 'Some permission'
            ],
        ];
    }

    /**
     * Registers back-end navigation items for this plugin.
     *
     * @return array
     */
    public function registerNavigation()
    {
        return [
            'alza' => [
                'label'       => 'Homepage',
                'url'         => Backend::url('appalza/alza/firms'),
                'icon'        => 'icon-id-card',
                'permissions' => ['appalza.alza.*'],
                'order'       => 500,
                'sideMenu'    =>[
                    'firms' =>[
                        'label'       => 'Firm',
                        'url'         => Backend::url('appalza/alza/firms'),
                        'icon'        => 'icon-id-card',
                        'permissions' => ['appalza.alza.*'],
                        'order'       => 500,
                    ],
                    'jobs' =>[
                        'label'       => 'Job',
                        'url'         => Backend::url('appalza/alza/jobs'),
                        'icon'        => 'icon-briefcase',
                        'permissions' => ['appalza.alza.*'],
                        'order'       => 500,
                    ],
                ],  
            ],
        ];
    }
}
