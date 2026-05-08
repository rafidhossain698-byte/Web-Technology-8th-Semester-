<?php
require_once("../controller/bookController.php");

$action = $_POST['action'];

if($action == "add"){
    addBookController($_POST);
}

if($action == "fetch"){
    $result = fetchBooksController();

    while($row=mysqli_fetch_assoc($result)){
        echo "<tr>
            <td>{$row['title']}</td>
            <td>{$row['author']}</td>
            <td>{$row['category']}</td>
            <td>{$row['availability']}</td>
            <td>
                <button onclick='editBook({$row['id']})'>Edit</button>
                <button onclick='deleteBook({$row['id']})'>Delete</button>
            </td>
        </tr>";
    }
}

if($action=="delete"){
    deleteBookController($_POST['id']);
}

if($action=="edit"){
    $book = editBookController($_POST['id']);
    echo json_encode($book);
}

if($action=="update"){
    updateBookController($_POST);
}
?>