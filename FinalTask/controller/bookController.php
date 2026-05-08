<?php
require_once("../model/bookModel.php");

function addBookController($data){
    return insertBook(
        $data['title'],
        $data['author'],
        $data['category'],
        $data['availability']
    );
}

function fetchBooksController(){
    return getBooks();
}

function deleteBookController($id){
    return deleteBook($id);
}

function editBookController($id){
    return getSingleBook($id);
}

function updateBookController($data){
    return updateBook(
        $data['id'],
        $data['title'],
        $data['author'],
        $data['category'],
        $data['availability']
    );
}
?>