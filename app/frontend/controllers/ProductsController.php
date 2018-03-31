<?php
namespace App\Frontend\Controllers;
use Phalcon\Mvc\Controller;

class ProductsController extends BaseController
{
    public function initialize()
    {   
        parent::initialize();
    }

    public function indexAction()
    {
        // return $this->response->redirect('admin/login/index');
    }
}
