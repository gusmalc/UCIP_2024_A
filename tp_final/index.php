<?php include 'config.php'; ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manzanita Feliz - Inicio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo $site_url . "assets/css/estilos.css?a=" . time(); ?>">
    <!-- <link rel="stylesheet" href="home/css/home.css"> -->
    <style>
        <?php include "home/css/home.css"; ?>
    </style>

</head>
<body>
    <?php include 'common/menu.php'; ?>

    <?php include "home/sections/portada.php"; ?>

    <main>
        <div class="container">
        <h1>Home</h1>
        
        </div>
    </main>
    
    

    <?php include 'common/pie.php'; ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>