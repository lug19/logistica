<?php
include('db.php');

$query="SELECT * FROM items";
$result=mysqli_query($conn, $query);

if(!$result){
    die('Query Failed' . mysqli_error($conn));

}
$json=array();
while( $row= mysqli_fetch_array($result)){
    $json[]=array(
        'name' => $row['name'],
        'description' => $row['description'],
        'id' => $row['id']
    );
}
$jsonstring = json_encode($json);
echo $jsonstring;

?>