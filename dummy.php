<?php
function error($msg){
    $response=array("success"=>false,"message"=>$msg); 
    return json_encode($response); 
}
//$name=$_POST['name'];
$name="mo";
$srn=$_POST['srn'];
if ($name=='') {
    die(error('no name'));
}
$mesg="created".$name;
$response=array();
$response['success']=true;
$response['message']= $mesg;
//echo json_encode($response);
$data = [ 'name' => 'God', 'srn' => 12345678 ];
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
?>