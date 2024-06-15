<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<link id="estilo" rel="stylesheet" href="css/estilos.css">
</head>
<body>
    <div>
        <dws-hamb2 grosor="10%" color="#f00"></dws-hamb2>
    </div>
    <div>
        <dws-hamb2 grosor="10%" color="#000"></dws-hamb2>
    </div>
    <div class="container">
        <h1  id="titulo">HOLA MUNDO</h1>
        <div id="btn1" class="btn btn-danger">CAMBIA COLOR</div>
        <div id="btn2" class="btn btn-danger">Modo Oscuro</div>
        <div id="btn3" class="btn btn-danger">Agregar H1</div>

        <div id="contenedor"></div>
    </div>

    <script src="js/dws_hamb2.js"></script>
<script src="js/scripts.js?a=<?php echo time(); ?>"></script>
</body>
</html>