<?php
namespace App\Frontend\Repositories;
use App\Frontend\Models\Product;
use App\Frontend\Models\Order;

class GoodRepository extends BaseRepository
{

    public function initialize(){
    }

    //获取列表
    public function getOne($id){ 
        //查询
        return Product::findFirst($id);
    }


    public function order($data){ 
    	
    	$order = new Order();
    	$order->name = 1;
    	$order->pid = $data['pid'];
    	$order->state = $data['state'];
    	$order->uid = 1;
    	$order->money = $data['price'];
    	$order->end_time = time()+$data['time'];
    	$order->add_time = time();

        if ($order->save() == false) {
            foreach ($order->getMessages() as $message) {
                echo $message, "<br>";
            }
        } else {
            return [
                'status'    =>  0,
                'info'      => ['下单成功']
            ];   
        }  
    } 

}