$(document).ready(function(){

loadBooks();

function loadBooks(){
    $.post("ajax/bookHandler.php",{action:"fetch"},function(data){
        $("#bookTable").html(data);
    });
}

$("#bookForm").submit(function(e){
    e.preventDefault();

    let id=$("#id").val();

    let action = id=="" ? "add" : "update";

    $.post("ajax/bookHandler.php",{
        action:action,
        id:id,
        title:$("#title").val(),
        author:$("#author").val(),
        category:$("#category").val(),
        availability:$("#availability").val()
    },function(){
        $("#bookForm")[0].reset();
        $("#id").val("");
        loadBooks();
    });
});

window.deleteBook=function(id){
    $.post("ajax/bookHandler.php",{action:"delete",id:id},function(){
        loadBooks();
    });
}

window.editBook=function(id){
    $.post("ajax/bookHandler.php",{action:"edit",id:id},function(data){

        let book=JSON.parse(data);

        $("#id").val(book.id);
        $("#title").val(book.title);
        $("#author").val(book.author);
        $("#category").val(book.category);
        $("#availability").val(book.availability);

    });
}

});