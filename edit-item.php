<?php
include('db.php');
$id = $_POST['id'];
$name= $_POST['name'];
$description = $_POST['description'];

$query="UPDATE items SET name='$name', description='$description', id='$id' WHERE id='$id'";
$result = mysqli_query($conn, $query);
if(!$result){
    die('Query failed');

}
echo 'Update item successfully'

?>