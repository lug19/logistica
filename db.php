<?php

$conn = mysqli_connect(
    'localhost',
    'root',
    '',
    'logistica'
    )

    if(isset($conn)){
        echo "database is connected";
    }