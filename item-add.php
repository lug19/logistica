<?php
include('db.php');
if(isset($_POST['name'])){
    $name = $_POST['name'];
    $description = $_POST['description'];
    $query = "INSERT INTO items(name, description) VALUES ('$name', '$description')";
    $result = mysqli_query($conn, $query);
    if (!$result){
        die('Query failed');
    }
    echo 'Item added successfully';
}


?>