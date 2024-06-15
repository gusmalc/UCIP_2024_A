<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <link href='https://res.webserver.ar/img/gm_ico.png' rel='shortcut icon' type='image/png'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TP 12</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/tp_12.css?a=<?php echo time(); ?>">
</head>
<body>

    <div class="container">
        <div id="top">
            <h1 id="titulo">Lista Usuarios</h1>
            
            <div>
                <div id="btn_cl" class="btn btn-primary">Cargar Lista</div>
            </div>
        </div>
        
       


        <div id="box_filtro" class="filtro_txt fuera">
            <div class="input-group flex-nowrap" style="width: 300px;">
                <span class="input-group-text " id="addon-wrapping">
                <i class="fa-solid fa-magnifying-glass"></i>
                </span>
                <input type="text" class="form-control " id="filtro">
            </div>
        </div>
        <br>


        <div id="app">

        </div>

    </div>

    <script src="js/tp_12.js?a=<?php echo time(); ?>"></script>
</body>
</html>