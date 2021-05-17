<?PHP
    include('db.php');
   $search  = $_POST['search'];
   if(!empty($search)){
       $query = "SELECT * FROM items WHERE name LIKE '$search%'";
       $result = mysqli_query($conn, $query);
        if(!$result){
            die('Query Error' . mysqli_errno($conn));    
        }
        $json = array();
        while($row = mysqli_fetch_array($result)){
            $json[]=array(
                'name' => $row['name'],
                'description' => $row['description'],
                'id' => $row['id']
            );
      
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;
   }
   ?>