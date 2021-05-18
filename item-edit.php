<?php

    include('db.php');

    

        $id=$_POST['id'];
        $query = "SELECT * FROM items WHERE id=$id ";
        $result= mysqli_query($conn, $query);
       

        if(!$result){
            die('Query Failed.');
        }

        $json=array();
        while($row = mysqli_fetch_array($result)){
            $json[]=array(
                'name' => $row['name'],
                'description' => $row['description'],
                'id' => $row['id']
            );
        };
        
    $jsonstring = json_encode($json[0]);
    echo $jsonstring;

?>