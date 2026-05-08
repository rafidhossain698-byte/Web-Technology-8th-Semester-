<?php
require_once("../config/database.php");

function getBooks(){
    global $conn;
    $result = mysqli_query($conn,"SELECT * FROM books");
    return $result;
}

function insertBook($title,$author,$category,$availability){
    global $conn;

    $query = "INSERT INTO books(title,author,category,availability)
              VALUES('$title','$author','$category','$availability')";

    return mysqli_query($conn,$query);
}

function deleteBook($id){
    global $conn;
    return mysqli_query($conn,"DELETE FROM books WHERE id=$id");
}

function getSingleBook($id){
    global $conn;
    $result = mysqli_query($conn,"SELECT * FROM books WHERE id=$id");
    return mysqli_fetch_assoc($result);
}

function updateBook($id,$title,$author,$category,$availability){
    global $conn;

    $query="UPDATE books SET
            title='$title',
            author='$author',
            category='$category',
            availability='$availability'
            WHERE id=$id";

    return mysqli_query($conn,$query);
}
?>