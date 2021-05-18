<?php

    include('db.php');

    If(isset($_POST['id'])){

        $id=$_POST['id'];
        $query = "DELETE FROM items WHERE id=$id ";
        $result= mysqli_query($conn, $query);
       

        if(!$result){
            die('Query Failed.');
        }
            
        echo "Item Deleted successfully";
        
    }

?>