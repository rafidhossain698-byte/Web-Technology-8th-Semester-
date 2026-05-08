<!DOCTYPE html>
<html>
<head>
<title>Library Management System</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="assets/script.js"></script>
</head>

<body>

<h2>Library Management System</h2>

<form id="bookForm">
<input type="hidden" id="id">

Title:
<input type="text" id="title" required>

Author:
<input type="text" id="author" required>

Category:
<input type="text" id="category" required>

Availability:
<select id="availability">
<option>Available</option>
<option>Issued</option>
</select>

<button type="submit">Save Book</button>
</form>

<hr>

<table border="1">
<thead>
<tr>
<th>Title</th>
<th>Author</th>
<th>Category</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody id="bookTable"></tbody>

</table>

</body>
</html>