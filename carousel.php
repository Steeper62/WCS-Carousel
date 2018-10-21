<?php
/**
 * Created by PhpStorm.
 * User: vince
 * Date: 21/10/18
 * Time: 11:25
 */

$image = [
    'assets/images/lille1.jpg',
    'assets/images/lille2.jpg',
    'assets/images/lille3.jpg',
    'assets/images/lille4.jpg'
];

$i = $_GET['img'];

$retour = array(
    'image'    => $image[$i]
);

header('Content-type: application/json');
echo json_encode($retour);